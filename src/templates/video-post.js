import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
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

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="inner outer">
              <article className="post post-full">
                <header className="post-header inner-sm">
                  <h1 className="post-title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  <div  className="post-meta inner-sm"> 
                  <time className="published" dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date', null)).strftime('%B %d, %Y')}</time>

                  </div>

                  {/* {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                  </div>
                  )}
                  {_.get(this.props, 'pageContext.frontmatter.image', null) && (
                  <div className="post-image">
                    <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                  </div>
                  )} */}
                </header>

                <div className="post-content inner-sm">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
              </article>
            </div>
            </Layout>
        );
    }
}
