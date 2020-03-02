import React from "react"
import { List } from "@material-ui/core"

import NavigationListItem from "./NavigationListItem"

const Navigation = props => {
  const { menuItems, depth } = props
  const menuLinks = menuItems.reduce(
    (items, menuItem) => reduceChildRoutes({ items, menuItem, depth }),
    []
  )
  menuLinks.push(<NavigationListItem depth={0} isLogout={true} key="logout" />)
  return (
    <List style={{ paddingTop: "0px", paddingBottom: "0px" }}>{menuLinks}</List>
  )
}

const reduceChildRoutes = props => {
  const { items, menuItem, depth } = props

  if (menuItem.children) {
    const open = false
    items.push(
      <NavigationListItem
        depth={depth}
        icon={menuItem.icon}
        key={menuItem.path}
        label={menuItem.label}
        open={Boolean(open)}
      >
        <Navigation depth={depth + 1} menuItems={menuItem.children} />
      </NavigationListItem>
    )
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        path={menuItem.path}
        icon={menuItem.icon}
        key={menuItem.path}
        label={menuItem.label}
      />
    )
  }

  return items
}

export default Navigation
