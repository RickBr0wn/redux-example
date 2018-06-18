import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../Actions/postActions'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  onChange = event => this.setState({ [event.target.name]: event.target.value })

  onSubmit = event => {
    event.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post)
  }

  render() {
    return (
      <div>
        <h1>ADD POST</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea type="text" name="body" value={this.state.body} onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />
        <hr />
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)