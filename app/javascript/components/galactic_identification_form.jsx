import React from 'react'
import PropTypes from 'prop-types'

export default class GalacticIdentificationForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      submissions: [],
      name: '',
      id_number: '',
      quadrant: 'zeta',
    }

    this.loadSubmissions()

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadSubmissions() {
    const url = "/api/v1/galactic_identifications"
    fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("ERROR!!!");
    })
    .then((data) => {
      console.log(this)
      this.setState({
        submissions: data,
      })
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

  handleSubmit(event) {
    const url = "/api/v1/galactic_identifications";

    let newEntity = {
      name: this.state.name,
      id_number: this.state.id_number,
      quadrant: this.state.quadrant,
    }
    console.log(JSON.stringify(newEntity))

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntity),
    }).then(this.loadSubmissions.bind(this))
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
        <h2>Submissions</h2>
        <ul>
          { this.state.submissions.map((submission) => {
            return <li>{submission.name}</li>
          })}
        </ul>
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