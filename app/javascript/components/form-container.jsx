import React from 'react'

export default class FormContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <div className="form-container">
        <div className="panel">
          { this.props.children }
        </div>

        <div className="panel">
          <h2>Submissions</h2>
            { this.props.submissions.map((submission) => {
              return <pre>
              { JSON.stringify(submission, null, 2) }
              </pre>
            })}
        </div>
      </div>
    )
  }
}
