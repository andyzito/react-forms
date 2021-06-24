// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class GalacticIdentificationForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      submissions: props.submissions,
      name: '',
      id_number: '',
      quadrant: 'zeta',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const url = "/api/v1/galactic_identifications";
    console.log(this.state)

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
    })
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <div>Submissions</div>
        <ul>
          { this.state.submissions.map((submission) => {
            return <li>{submission.name}</li>
          })}
          <li></li>
        </ul>
        <form id="galactic_identification_form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={ this.state.name }
            onChange={this.handleInputChange} />
          <input
            type="text"
            name="id_number"
            value={ this.state.id_number }
            onChange={this.handleInputChange} />
          <select name="quadrant" value={ this.state.quadrant } onChange={this.handleInputChange}>
            <option value="zeta">Zeta</option>
            <option value="beta">Beta</option>
            <option value="theta">Theta</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
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

document.addEventListener('DOMContentLoaded', () => {
  const url = "/api/v1/galactic_identifications"
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("ERROR!!!");
    })
    .then((data) => {
      ReactDOM.render(
        <GalacticIdentificationForm submissions={data} />,
        document.body.appendChild(document.createElement('div')),
      )
    })
})