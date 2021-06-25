import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'
import FormContainer from './form-container'

export default class GalacticIdentificationForm extends Form {
  model = 'galactic_identifications'

  constructor (props) {
    super(props)

    this.state = {
      submissions: [],
      name: '',
      id_number: '',
      quadrant: 'zeta',
    }

    // this.loadSubmissions()

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let newEntity = {
      name: this.state.name,
      id_number: this.state.id_number,
      quadrant: this.state.quadrant,
    }
    this.postEntity(newEntity)
    event.preventDefault()
  }

  render () {
    return(
      <FormContainer submissions={this.state.submissions}>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={ this.state.name }
          onChange={this.handleInputChange} />
        <label htmlFor="id_number">ID Number</label>
        <input
          type="text"
          name="id_number"
          value={ this.state.id_number }
          onChange={this.handleInputChange} />
        <label htmlFor="quadrant">Quadrant</label>
        <select name="quadrant" value={ this.state.quadrant } onChange={this.handleInputChange}>
          <option value="zeta">Zeta</option>
          <option value="beta">Beta</option>
          <option value="theta">Theta</option>
          <option value="data">Data</option>
          <option value="meta">Meta</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      </FormContainer>
    )
  }
}

GalacticIdentificationForm.defaultProps = {
  identifier: '',
  name: '',
}

GalacticIdentificationForm.propTypes = {
  identifier: PropTypes.string,
  name: PropTypes.string,
}