import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"

import { Button } from "../styles/theme/styledComponents"
import * as s from "../styles/Sidebar.styles"

const SidebarLink = ({ to, displayName, pathname }) => (
  <Button className={pathname === to ? "btn-inverted" : ""}>
    <Link to={to}>{displayName}</Link>
  </Button>
)

const Sidebar = ({ isSubscribed, location }) => {
  return (
    <s.SidebarStyles>
      <div className="sidebar-links">
        <div style={{ marginLeft: "2rem" }}>App:</div>
        <SidebarLink
          to="/app"
          displayName="Dashboard"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/trip/create"
          displayName="Create a new trip"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/trips"
          displayName="Trips"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/app/trips/archived"
          displayName="Archived trips"
          pathname={location.pathname}
        />
        {isSubscribed ? (
          <SidebarLink
            to="/app/billing"
            displayName="Billing"
            pathname={location.pathname}
          />
        ) : (
          <SidebarLink
            to="/app/upgrade"
            displayName="Upgrade to Premium"
            pathname={location.pathname}
          />
        )}
        <SidebarLink
          to="/app/settings"
          displayName="Settings"
          pathname={location.pathname}
        />
        <div style={{ marginLeft: "2rem" }}>Pages:</div>
        <SidebarLink
          to="/"
          displayName="Landing Page"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/login"
          displayName="Login"
          pathname={location.pathname}
        />
        <SidebarLink
          to="/register"
          displayName="Register"
          pathname={location.pathname}
        />
      </div>
    </s.SidebarStyles>
  )
}

Sidebar.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string
  }).isRequired
}

SidebarLink.propTypes = {
  displayName: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default compose(
  withRouter,
  connect(({ auth }) => ({ isSubscribed: auth.user.subscribed }))
)(Sidebar)
