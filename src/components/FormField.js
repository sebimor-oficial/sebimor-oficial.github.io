import React from 'react';
import _ from 'lodash';


import {withPrefix} from '../utils';


export default class FormField extends React.Component {
    render() {
        // let field = _.get(this.props, 'field', null);
        return (
          <div className="form-group form-checkbox">    
            <h3>Miembros de Sebimor</h3>
            <ul>
              <li>Eugenio Gonzales</li>
              <li>Luna Rivera</li>
              <li>Oscar Thurin</li>
              <li>Sebastian Morales</li>
            </ul>
            {_.get(this.props, 'pageContext.frontmatter.image', null) && (
              <div className="post-image">
                <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
              </div>
            )}
          </div>
            // (_.get(field, 'input_type', null) === 'checkbox') ? (
            // <div className="form-group form-checkbox">
            //   <input type="checkbox" id={_.get(field, 'name', null)} name={_.get(field, 'name', null)}{...(_.get(field, 'is_required', null) ? ({required: true}) : null)}/>
            //   {_.get(field, 'label', null) && (
            //   <label htmlFor={_.get(field, 'name', null)}>{_.get(field, 'label', null)}</label>
            //   )}
            // </div>
            // ) : ((_.get(field, 'input_type', null) === 'select') ? (
            // <div className="form-group">
            //   {_.get(field, 'label', null) && (
            //   <label htmlFor={_.get(field, 'name', null)}>{_.get(field, 'label', null)}</label>
            //   )}
            //   <div className="form-select-wrap">
            //     <select id={_.get(field, 'name', null)} name={_.get(field, 'name', null)}{...(_.get(field, 'is_required', null) ? ({required: true}) : null)}>
            //       {_.get(field, 'default_value', null) && (
            //       <option value="">{_.get(field, 'default_value', null)}</option>
            //       )}
            //       {_.map(_.get(field, 'options', null), (option, option_idx) => (
            //       <option key={option_idx} value={option}>{option}</option>
            //       ))}
            //     </select>
            //   </div>
            // </div>
            // ) : ((_.get(field, 'input_type', null) === 'textarea') ? (
            // <div className="form-group">
            //   {_.get(field, 'label', null) && (
            //   <label htmlFor={_.get(field, 'name', null)}>{_.get(field, 'label', null)}</label>
            //   )}
            //   <textarea name={_.get(field, 'name', null)} id={_.get(field, 'name', null)} rows="5"{...(_.get(field, 'default_value', null) ? ({placeholder: _.get(field, 'default_value', null)}) : null)}{...(_.get(field, 'is_required', null) ? ({required: true}) : null)}/>
            //   <span className="animate-border" aria-hidden="true" />
            // </div>
            // ) : 
            // <div className="form-group">
            //   {_.get(field, 'label', null) && (
            //   <label htmlFor={_.get(field, 'name', null)}>{_.get(field, 'label', null)}</label>
            //   )}
            //   <input type={_.get(field, 'input_type', null)} name={_.get(field, 'name', null)} id={_.get(field, 'name', null)}{...(_.get(field, 'default_value', null) ? ({placeholder: _.get(field, 'default_value', null)}) : null)}{...(_.get(field, 'is_required', null) ? ({required: true}) : null)} />
            //   <span className="animate-border" aria-hidden="true" />
            // </div>
            // ))
        );
    }
}
