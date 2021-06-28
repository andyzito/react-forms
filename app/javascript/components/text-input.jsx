import React from 'react'

export default class TextInput extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <span>
        <label htmlFor={ this.props.name }>{ this.props.label }</label>
        <input
          type="text"
          name={ this.props.name }
          value={ this.props.value }
          onChange={this.props.handleInputChange} />
      </span>
   )
  }
}