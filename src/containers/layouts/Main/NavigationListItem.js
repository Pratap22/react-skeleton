/* eslint-disable react/display-name */
import React, { useState, forwardRef } from "react"
import { useDispatch } from "react-redux"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import { Link } from "@reach/router"
import { ListItem, Button, Collapse } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"

const useStyles = makeStyles(theme => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: "#11a4b4",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  buttonLeaf: {
    color: "#11a4b4",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    borderRadius: "0",
    fontWeight: theme.typography.fontWeightRegular,
    "&.depth-0": {
      fontWeight: theme.typography.fontWeightMedium,
      "&:before": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        width: "4px",
        backgroundColor: "#11a4b4",
      },
      "&.active": {
        "&:before": {
          bottom: "0",
        },
      },
    },
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0)",
      "&.depth-0:before": {
        bottom: "0",
      },
    },
  },
  icon: {
    color: theme.palette.icon,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  expandIcon: {
    marginLeft: "auto",
    height: 16,
    width: 16,
  },
  label: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    color: "#11a4b4",
  },
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link
      {...props}
      getProps={linkProps => {
        return linkProps.isCurrent
          ? { className: `${props.className} active` }
          : {
              className: `${props.className}`,
            }
      }}
    />
  </div>
))

const NavigationListItem = props => {
  const dispatch = useDispatch()
  const {
    label,
    path,
    depth,
    children,
    isLogout,
    icon: Icon,
    open: openProp,
  } = props
  const classes = useStyles()
  const [open, setOpen] = useState(openProp)

  const handleToggle = () => {
    setOpen(open => !open)
  }

  let paddingLeft = 8

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth
  }

  const style = {
    paddingLeft,
  }

  if (children) {
    return (
      <ListItem className={clsx(classes.item)} disableGutters>
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} />}
          {label}
          {open ? (
            <ExpandLessIcon className={classes.expandIcon} color="inherit" />
          ) : (
            <ExpandMoreIcon className={classes.expandIcon} color="inherit" />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    )
  } else if (isLogout) {
    return (
      <ListItem
        className={clsx(classes.itemLeaf)}
        disableGutters
        divider={true}
      >
        <Button
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          onClick={() => {}}
          style={style}
        >
          {<ExitToAppIcon className={classes.icon} />}
          Logout
        </Button>
      </ListItem>
    )
  } else {
    return (
      <ListItem
        className={clsx(classes.itemLeaf)}
        disableGutters
        divider={true}
      >
        <Button
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          component={CustomRouterLink}
          style={style}
          to={path}
        >
          {Icon && <Icon className={classes.icon} />}
          {label}
        </Button>
      </ListItem>
    )
  }
}

export default NavigationListItem
