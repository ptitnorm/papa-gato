import * as React from "react"
import PropTypes from "prop-types"
import MenuButton from "./menubutton"
import fblogo from "../images/facebook.png"
import instlogo from "../images/instagram.png"

const Header = ({ siteTitle }) => (
  <header

    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <div
          style={{
            width: `100%`,
            display: `inline-block`,
            height: `25px`
          }}
        >
          <MenuButton buttonTitle="Accueil" />
          <MenuButton buttonTitle="Photos" /> 
          <MenuButton buttonTitle="Commandes" /> 
          <div
            style={{
              float: `right`,
            }}
          >
            <a href="https://www.facebook.com/Super-Papa-G%C3%A2to-102639401927726"><img src={fblogo} alt="Logo" style={{width:20,height:20,}}/></a>
            <a href="https://www.facebook.com/Super-Papa-G%C3%A2to-102639401927726"><img src={instlogo} alt="Logo" style={{width:20,height:20,}}/></a> 
          </div>
        </div>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
