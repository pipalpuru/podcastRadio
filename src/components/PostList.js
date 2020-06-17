import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {},
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=a87f99a94216f5b560f514d9f37b0860&format=json"
      )
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      });
    // .catch((error) => {
    //   console.log(error);
    //   this.state({ errorMsg: "Error Retriving Data" });
    // });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List Of Posts
        <div>{posts?.artist?.name}</div>
        <div>{posts?.artist?.mbid}</div>
      </div>
    );
  }
}

export default PostList;
