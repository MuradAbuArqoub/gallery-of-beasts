import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Modals from "./component/Modals";
import Data from './component/Data.json'
import Form from 'react-bootstrap/Form'
import Button from "@restart/ui/esm/Button";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        hornsData: Data,
        horns: ""
    }
}

// clickHandler = (event) => {
//     event.preventDefault();
//     this.setState({
//         horns: event.target.value,
//         hornsData: this.filterDataHorns(Number(event.target.value))
//     })
// }


filterDataHorns =  (hornsValue) => {

  let HornsData = Data.filter(element => {
    if (hornsValue === 0) {
      return element;
    }

    else {
      if (element.horns === hornsValue ? true : false) {
        return true;

      }
    }
  });
  console.log(HornsData);
  return HornsData;
}

clickHandler = async(event) => {
  event.preventDefault();
  await this.setState({
      horns: event.target.value,
      hornsData: this.filterDataHorns(Number(event.target.value))
  });
  console.log(this.state.horns)
}

  render() {
    return (
      <div>
        <Header/>
        <Form.Select onChange={this.clickHandler} aria-label="Default select example">
                
                <option value="0">all</option>
                <option value="1">uno</option>
                <option value="2">dos</option>
                <option value="3">tres</option>
                <option value="100">nice crock bro</option>
                
            </Form.Select>
         
        <Main/>
        <Modals/>
        <Footer/>
      </div>
    )
  }
}
export default App;