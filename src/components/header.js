import * as React from "react"
import PropTypes from "prop-types"
import MenuButton from "./menubutton"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `seagreen`,
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
        
        <MenuButton buttonTitle="Accueil"/> 
        <MenuButton buttonTitle="Photos"/> 
        <MenuButton buttonTitle="Commandes"/> 
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
