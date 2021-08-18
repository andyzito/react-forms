import React from 'react'

export default class SelectInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      options: {}
    }

    this.loadOptions()
  }

  loadOptions() {
    const url = "/api/v1/" + this.props.model + '/options?field=' + this.props.optionsAttribute
    fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("ERROR!!!");
    })
    .then((data) => {
      console.log(data)
      this.setState({
        options: data,
      })
    })
  }

  render () {
    return(
      <span>
        <label htmlFor={ this.props.name }>{ this.props.label }</label>
        <select name={ this.props.name } value={ this.props.value } onChange={ this.props.handleInputChange }>
          { Object.keys(this.state.options).map((key) => {
            return <option value={ key } >{ this.state.options[key] }</option>
          })}
        </select>
      </span>)
  }
}