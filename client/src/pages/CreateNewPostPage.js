import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postsOperations } from '../store/posts';
import './CreateNewPostPage.scss';

const INITIAL_STATE = {
    author: '',
    title: '',
    description: '',
}
class CreateNewPostPage extends Component {
  state = { ...INITIAL_STATE };

  onSubmitForm = async (e) => {
    e.preventDefault();
    await this.props.sendNewPost({ ...this.state});
    this.reset();
    this.goToPostsPage();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value});
  }

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  }

  goToPostsPage () {
    this.props.history.push({
      pathname: '/',
    });
  }

  render() {
    const { name, title, description } = this.state;
    return (
      <section className="CreatePost">
        <form
          onSubmit={this.onSubmitForm}
          className="CreatePost__form"
        >
          <label className="CreatePost__label">
            Name
            <input
              name="author"
              className="CreatePost__field--input"
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className="CreatePost__label">
            Title
            <input
              name="title"
              className="CreatePost__field--input"
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={this.handleChange}
            />
          </label>
          <label className="CreatePost__label">
            Description
            <textarea
              name="description"
              className="CreatePost__field--textarea"
              placeholder="Enter post description"
              maxLength="2000"
              value={description}
              onChange={this.handleChange}
            />
          </label>
          <button
            type="submit"
            className="CreatePost__button"
          >
            Submit
          </button>
        </form>
      </section>
    );
  }
}

const MapDispatchToProps = {
	sendNewPost: postsOperations.requestAddNewPost,
}

export default connect(
  null,
	MapDispatchToProps,
)(CreateNewPostPage);
