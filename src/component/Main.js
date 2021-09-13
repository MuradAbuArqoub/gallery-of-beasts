import React from "react";
import Data from "./Data.json";
import Animals from "./Animals";

class Main extends React.Component {
    render() {
        return (
           <div>
                {
                    Data.map(element => {
                        return (<Animals title={element.title} image_url={element.image_url} description={element.description}  />)
                    })
                }
                
           </div>
        )
    }
}
export default Main