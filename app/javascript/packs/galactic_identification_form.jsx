// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const GalacticIdentificationForm = props => (
  <div>
    <div>Test</div>
    <ul>
      { this.state.submissions.map((submission) => {
        return <li>test</li>
      })}
      <li></li>
    </ul>
  </div>
)

GalacticIdentificationForm.defaultProps = {
  identifier: '',
  name: '',
}

GalacticIdentificationForm.propTypes = {
  identifier: PropTypes.string,
  name: PropTypes.string,
}

document.addEventListener('DOMContentLoaded', () => {
  const url = "api/v1/galactic_identifications/index"
  fetch(url)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      throw new Error("ERROR!!!");
    })
    // .then((data)) => {

    // }
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GalacticIdentificationForm />,
    document.body.appendChild(document.createElement('div')),
  )
})
