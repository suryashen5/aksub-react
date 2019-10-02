import React, { Component } from "react";
import CardSummaryContainer from "../components/pages/home/CardSummaryContainer.jsx";
import Calculator from "../components/pages/home/Calculator.jsx";
import posts from "../services/modules/posts.js";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const data = posts.getPostData();
    data.then(response => {
      this.setState({ posts: response.data });
    });
  }

  renderPosts() {
    const { posts } = this.state;
    return posts.map(post => <div key={post.id}>{post.name}</div>);
  }

  render() {
    return (
      <div>
        <CardSummaryContainer />
        <Calculator />
        {this.renderPosts()}
      </div>
    );
  }
}

export default Home;
