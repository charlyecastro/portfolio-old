/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Logo from "../images/logo.png"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, url, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            url
            title
            description
            author
          }
        }
      }
    `
  )

  const metaImg = `${url}${Logo}`
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `image`,
          content: metaImg,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImg,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image:width`,
          content: `512`,
        },
        {
          property: `og:image:height`,
          content: `512`,
        },


        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImg,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  url: 'https://charlyecastro.com',
  description: `Charlye Castro is a Seattle based Software Engineer, experienced in web and mobile development`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  url: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
