import React from "react";
import Data from "./Data.json";
import Animals from "./Animals";
import Modals from "./Modals";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedTitle: '',
          selectedImg: '',
          selectedDes: '',
          showModel: false
        }
      }
    
      handleClose = () => {
        this.setState({ showModel: false });
    
      };
      show = () => {
        this.setState({
        //   selectedTitle: title,
        //   selectedImg: image_url,
        //   selectedDes: description,
          showModel: true
        });
      };

    render() {
        return (
           <div>
                {
                    Data.map((element, index)=> {
                        return (<Animals title={element.title} key={index} image_url={element.image_url} description={element.description} showModel={this.show} />
                        
                        )
                        
                    })
                }
                <Modals showModel={this.state.showModel} handleClose={this.handleClose}/> 

           </div>
        )
    }
}
export default Main