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
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <div
          style={{
            width: `100%`,
          }}
        >
          <MenuButton buttonTitle="Accueil" />
          <MenuButton buttonTitle="Photos" /> 
          <MenuButton buttonTitle="Commandes" /> 
          <MenuButton buttonTitle="Contact"/> 
          <div style={{ width: `15%`,}}>
            <img src={fblogo} alt="Logo" style={{width:20,height:20,}}/>
            <img src={instlogo} alt="Logo" style={{width:20,height:20,}}/>
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
