import React from 'react'

export default class SelectInput extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <span>
        <label htmlFor={ this.props.name }>{ this.props.label }</label>
        <select name={ this.props.name } value={ this.props.value } onChange={ this.props.handleInputChange }>
          { this.props.options.map((option) => {
            return <option value={ option.value } >{ option.name }</option>
          })}
        </select>
      </span>)
  }
}