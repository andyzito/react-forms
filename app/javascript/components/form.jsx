import React from 'react'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
  }

  loadSubmissions() {
    const url = "/api/v1/" + this.model
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
  }

  postEntity(data) {
    const url = "/api/v1/" + this.model;
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.loadSubmissions.bind(this))
  }
}