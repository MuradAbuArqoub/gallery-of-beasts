import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import RenderModal from "./component/RenderModal";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <RenderModal/>
        <Footer/>
      </div>
    )
  }
}
export default App;