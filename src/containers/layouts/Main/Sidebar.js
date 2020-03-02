import React from "react"
import { useSelector } from "react-redux"
import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { Divider, Drawer, Avatar } from "@material-ui/core"
import { getMenus } from "helpers/MenuItems"
// import { getUserInfo } from "travelkosh-shared"
import Navigation from "./Navigation"
import TknLogo from "images/tkn_logo.png"

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 260,
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "calc(100 % - 66px)",
  },
  logo: {
    height: "46px",
    width: "200px",
    margin: "8px",
  },
  divider: {
    backgroundColor: "rgba(26, 190, 197, 0.2)",
  },
  profileContainer: {
    padding: "8px",
    display: "flex",
    position: "fixed",
    bottom: "0",
    backgroundColor: "#FFF",
    zIndex: "2",
    width: "259px",
    height: "66px",
    borderTop: "1px solid rgba(26, 190, 197, 0.2)",
  },
  profileImage: {
    width: "50px",
    height: "50px",
    border: "2px solid #11a4b4",
    backgroundColor: "#f6f9fc",
    color: "#1abec5",
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "8px",
    justifyContent: "center",
    overflow: "hidden",
  },
  name: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#11a4b4",
    fontSize: "18px",
  },
  email: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#11a4b4",
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}))

const Sidebar = props => {
  // const userInfo = useSelector(state => getUserInfo(state))

  const { open, variant, onClose, className, ...rest } = props

  const classes = useStyles()

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Divider className={classes.divider} />
        <img className={classes.logo} src={TknLogo} alt="travelkosh network" />
        <Divider className={classes.divider} />
        <Navigation menuItems={getMenus} depth={0} />
        {/* <div className={classes.profileContainer}>
          <Avatar
            className={classes.profileImage}
            alt={userInfo.displayName}
            src={userInfo.profileImage}
          >
            {userInfo.displayName.charAt(0)}
          </Avatar>
          <div className={classes.nameContainer}>
            <span className={classes.name}>{userInfo.displayName}</span>
            <span className={classes.email}>{userInfo.email}</span>
          </div>
        </div> */}
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
}

export default Sidebar
