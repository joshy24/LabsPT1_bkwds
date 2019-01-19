import React from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { Button } from "../styles/theme/styledComponents"
import * as s from "../styles/Sidebar.styles"

const SidebarLink = ({ icon, displayName, pathname, to }) => (
  <Button className={pathname === to ? "btn-inverted" : ""}>
    <Link to={to}>
      <i className={`fa ${icon}`} />
    </Link>
    <Link to={to}>{displayName}</Link>
  </Button>
)

const menuItems = [
  {
    displayName: "Dashboard",
    icon: "fa-tachometer",
    to: "/app"
  },
  {
    displayName: "Create a new trip",
    icon: "fa-plus-circle",
    to: "/app/trip/create"
  },
  {
    displayName: "Trips",
    icon: "fa-map-marker",
    to: "/app/trips"
  },
  {
    displayName: "Archived Trips",
    icon: "fa-map",
    to: "/app/trips/archived"
  },
  {
    displayName: "Billing",
    icon: "fa-credit-card",
    to: "/app/billing"
  },
  {
    displayName: "Settings",
    icon: "fa-cog",
    to: "/app/settings"
  },
  {
    displayName: "Landing Page",
    icon: "fa-heart",
    to: "/"
  },
  {
    displayName: "Login",
    icon: "fa-heart",
    to: "/login"
  },
  {
    displayName: "Register",
    icon: "fa-heart",
    to: "/register"
  }
]

const Sidebar = ({ location, isSidebarOpen }) => {
  return (
    <s.SidebarStyles>
      <div className={`sidebar-links ${isSidebarOpen ? "open" : ""}`}>
        {menuItems.map(menuItem => (
          <SidebarLink
            {...menuItem}
            key={menuItem.displayName}
            pathname={location.pathname}
          />
        ))}
      </div>
    </s.SidebarStyles>
  )
}

const mapStateToProps = ({ navigation: { isSidebarOpen } }) => ({
  isSidebarOpen
})

export default withRouter(connect(mapStateToProps)(Sidebar))
