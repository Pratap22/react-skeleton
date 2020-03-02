import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
}))

const Footer = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{" "}
        <Link to="https://travelkosh.com/" target="_blank">
          Stonegrid Technology Sols Pvt. Ltd.
        </Link>
        . {new Date().getFullYear()}
      </Typography>
      <Typography variant="caption">
        Traveller's are everywhere. Let's find them together.
      </Typography>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

export default Footer
