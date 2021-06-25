import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'

export default class GalacticIdentificationForm extends Form {
  model = 'galactic_identifications'

  constructor (props) {
    super(props)

    this.state = {
      submission: {},
      name: '',
      id_number: '',
      quadrant: 'zeta',
    }

    this.loadSubmissions()

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
    return (
      <div className="form-container">
      <div className="panel">
        <form id="galactic_identification_form" onSubmit={this.handleSubmit}>
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
      </div>

      <div className="panel">
        <h2>Submission</h2>
        <pre>
          { JSON.stringify(this.state.submission, null, 2) }
        </pre>
      </div>
    </div>
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