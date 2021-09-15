import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Dropdown from "./component/DropDown";


class App extends React.Component {
  render() {
    return (
      <div>
        <Dropdown/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
export default App;