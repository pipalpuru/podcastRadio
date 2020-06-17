import React from "react";
import "./App.css";
// import PostForm from "./components/PostForm";
// import PostList from "./components/PostList";
// import ShowJsonData from "./components/ShowJsonData";
import Header from "./components/Header";
import MainContain from "./components/MainContain";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <PostForm></PostForm> */}
      {/* <PostList /> */}
      {/* <ShowJsonData></ShowJsonData> */}
      <Header></Header>
      <MainContain></MainContain>
      <Footer></Footer>
    </div>
  );
}

export default App;
