import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class FormContainer extends React.Component {
  constructor (props) {
    super(props)

    console.log(props)
    this.handleInputChange = props.handleInputChange;
    this.handleSubmit = props.handleSubmit;
  }

  render () {
    console.log(this.props)
    return(
      <div className="form-container">
        <div className="panel">
          <form id="galactic_identification_form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={ this.props.name }
              onChange={this.handleInputChange} />
            <label htmlFor="id_number">ID Number</label>
            <input
              type="text"
              name="id_number"
              value={ this.props.id_number }
              onChange={this.handleInputChange} />
            <label htmlFor="quadrant">Quadrant</label>
            <select name="quadrant" value={ this.props.quadrant } onChange={this.handleInputChange}>
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
          <h2>Submissions</h2>
          <ul>
            { this.props.submissions.map((submission) => {
              return <li>{submission.name}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}