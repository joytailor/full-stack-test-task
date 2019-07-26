import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../components/posts/Post';
import Button from '../components/posts/Button';
import { postsSelectors, postsOperations } from '../store/posts';
import './PostPage.scss';

class PostsPage extends Component {
	componentDidMount() {
		this.props.getAllPosts();
  }

	goToForm() {
		this.props.history.push({
      pathname: '/posts/new',
    });
	}

	render() {
		const { posts } = this.props;
		return (
  <section className="PostSection">
    <header className="PostSection__header">
      <Button goToForm={this.goToForm.bind(this)} />
    </header>
    <main className="PostSection__content">
      {posts.map(post => (
        <Post
          key={post._id}
          author={post.author}
          title={post.title}
          description={post.description}
          date={post.createdAt}
        />
				))}
    </main>
  </section>
		);
	}
}

const mapStateToProps = state => ({
	posts: postsSelectors.getAllPosts(state),
})

const MapDispatchToProps = {
	getAllPosts: postsOperations.requestAllPosts,
}

export default connect(
	mapStateToProps,
	MapDispatchToProps,
)(PostsPage);
