import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {classNames, htmlToReact, getPages, Link, withPrefix} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Video extends React.Component {
    render() {
        let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/video'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <div className="inner outer video-post-offset">
              {/* <header className={classNames('page-header', 'inner-sm', {'screen-reader-text': _.get(this.props, 'pageContext.frontmatter.hide_title', null)})}>
                <h1 className="page-title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                <div className="page-subtitle">
                  {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle', null))}
                </div>
                )}
              </header> */}
              <div className={classNames('post-feed', 'grid', {'grid-col-2': _.get(this.props, 'pageContext.frontmatter.col_number', null) === 'two', 'grid-col-3': _.get(this.props, 'pageContext.frontmatter.col_number', null) === 'three'})}>
                {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} className="post grid-item">
                  <div className="post-inside">
                    {_.get(post, 'frontmatter.thumb_image', null) && (
                      <Link className="video-post-thumbnail" to={withPrefix(_.get(post, 'url', null))}>
                        <img src={withPrefix(_.get(post, 'frontmatter.thumb_image', null))} alt={_.get(post, 'frontmatter.thumb_image_alt', null)} />
                      </Link>
                    )}
                    <header className="post-header">
                      <h2 className="post-title"><Link to={withPrefix(_.get(post, 'url', null))} rel="bookmark">{_.get(post, 'frontmatter.title', null)}</Link></h2>
                      <div className="post-meta">
                      {_.get(post, 'frontmatter.type', null) && (
                        <p className="type-published">
                          {_.get(post, 'frontmatter.type', null)} <span> | </span>  
                        </p>
                      )}
                        <time className="published"
                          dateTime={moment(_.get(post, 'frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date', null)).strftime('%B %d, %Y')}</time>
                      </div>
                    </header>
                    {_.get(post, 'frontmatter.excerpt', null) && (
                    <p className="post-content post-blog">
                      {_.get(post, 'frontmatter.excerpt', null)}
                    </p>
                    )}
                  </div>
                </article>
                ))}
              </div>
            </div>
            </Layout>
        );
    }
}
