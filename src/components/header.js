import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <StaticImage
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
      src="../images/logo-v2.png"
    />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
