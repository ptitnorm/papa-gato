import * as React from "react"
import { Link } from "gatsby"

const MenuButton = ({ buttonTitle }) => (
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: 10,
          }}
        >
          {buttonTitle}
        </Link>
)

MenuButton.defaultProps = {
    buttonTitle: ``,
  }

export default MenuButton