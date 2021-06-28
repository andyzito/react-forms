import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'
import FormContainer from './form-container'
import TextInput from './text-input.jsx'
import SelectInput from './select-input.jsx'

export default class QZedIncidentForm extends Form {
  model = 'q_zed_incidents'

  constructor (props) {
    super(props)

    this.state = {
      submissions: [],
    }

    this.loadSubmissions()

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let newEntity = {
      irt_number: this.state.irt_number,
    }
    this.postEntity(newEntity)
    event.preventDefault()
  }

  render () {
    return(
      <FormContainer submissions={this.state.submissions}>
      <form onSubmit={this.handleSubmit}>
        <TextInput
          name="irt_number"
          label="IRT Number"
          value={ this.state.irt_number }
          handleInputChange={ this.handleInputChange} />

        <TextInput
          name="rcode"
          label="RCode"
          value={ this.state.rcode }
          handleInputChange={ this.handleInputChange } />

        <TextInput
          name="pid_number"
          label="PiD Number"
          value={ this.state.pid_number }
          handleInputChange={ this.handleInputChange } />

        <SelectInput
          name="incident_type"
          label="Incident Type"
          value={ this.state.incident_type }
          handleInputChange={ this.handleInputChange }
          optionsAttribute='incident_type'
        />
      </form>
      </FormContainer>
    )
  }
}

QZedIncidentForm.defaultProps = {
  irt_number: '',
}

QZedIncidentForm.propTypes = {
  irt_number: PropTypes.string,
}