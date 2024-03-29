import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="inner outer">
              <article className="bio post-full">
                {/* <header className="post-header inner-sm">
                  <h1 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                  </div>
                  )}
                </header> */}
                {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                <div className="post-image">
                  <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                </div>
                )}
                <div className="bio-content inner-sm">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
              </article>
            </div>
            </Layout>
        );
    }
}
