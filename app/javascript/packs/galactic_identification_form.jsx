// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import FormContainer from '../components/form_container'

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
      this.setState({
        submissions: data,
      }, () => {console.log(this.state)})
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
    })
    this.loadSubmissions()
    event.preventDefault()
  }

  render () {
    return (
      <FormContainer
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        submissions={this.state.submissions}
        name={this.state.name}
        id_number={this.state.id_number}
        quadrant={this.state.quadrant}
        quadrants={this.quadrants}
      ></FormContainer>
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
  ReactDOM.render(
    <GalacticIdentificationForm />,
    document.body.appendChild(document.createElement('div')),
  )
})