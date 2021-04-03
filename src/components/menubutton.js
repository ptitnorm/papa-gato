import * as React from "react"
import { Link } from "gatsby"
import "@fontsource/raleway/100.css"

const MenuButton = ({ buttonTitle }) => (
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            padding: 10,
            textAlign: `center`,
            fontFamily: `Raleway,sans-serif`,
            fontSize: `medium`,
            fontWeight: 500,
            diplay: 'inlinde-block',
          }}
        >
          {buttonTitle}
        </Link>
)

MenuButton.defaultProps = {
    buttonTitle: ``,
  }

export default MenuButton