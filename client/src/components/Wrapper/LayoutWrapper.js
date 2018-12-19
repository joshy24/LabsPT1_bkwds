import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "reactstrap"
import styled from "styled-components"

import Nav from "../Nav"
import Sidebar from "../Sidebar"
import BreadcrumbBar from "../Breadcrumb"
import { logout } from "../../redux/actions/auth"

const LayoutStyles = styled.div`
  /* Bootstrap overrides */
  ol,
  ul {
    margin: 0;
  }

  /* general styles, TODO: move to GlobalStyles component */
  a {
    text-decoration: none;
  }

  /* styles from ./index.css */
  .authButton a {
    color: white;
  }
`

const LayoutWrapper = props => {
  return (
    <LayoutStyles>
      <div id="layoutWrapper">
        <Nav />
        <Container fluid>
          <Row id="topMenu" xs="12">
            <Col id="breadcrumb" xs="auto" className="mr-auto">
              {props.location.pathname !== "/" &&
                props.location.pathname !== "/login" &&
                props.location.pathname !== "/signup" && (
                  <BreadcrumbBar {...props} />
                )}
            </Col>
            <Col className="authButton d-flex align-items-start" xs="auto">
              {props.location.pathname !== "/signup" && (
                <Button>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              )}
              {!props.isLoggedIn && props.location.pathname !== "/login" && (
                <Button>
                  <Link to="/login">Log In</Link>
                </Button>
              )}
              {props.isLoggedIn && (
                <Button onClick={props.handleSignOut}>Sign Out</Button>
              )}
            </Col>
          </Row>
          <Row>
            {props.location.pathname !== "/" && (
              <Col id="sidebar" xs="auto">
                <Sidebar {...props} />
              </Col>
            )}
            <Col id="mainSection" xs="5">
              {props.children}
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutStyles>
  )
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  location: state.router.location
})

const mapDispatchToProps = { handleSignOut: logout }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutWrapper)
