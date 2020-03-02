import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"

import Sidebar from "./Sidebar"
import Footer from "./Footer"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
  shiftContent: {
    paddingLeft: 260,
  },
  content: {
    height: "100%",
  },
}))

const Main = props => {
  const { children } = props

  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  })

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const shouldOpenSidebar = isDesktop ? true : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
