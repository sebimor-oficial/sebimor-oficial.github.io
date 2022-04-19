const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/sebimor-oficial.github.io',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        "gatsby-remark-embed-video",
        {  
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-embed-video`,
              ],
            },
        }
    ]
};
