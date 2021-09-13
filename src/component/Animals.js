import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Animals extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        votes: 0
    }
}

addVote = () => {
    this.setState({
        votes: this.state.votes + 1
    })
}

  render(){
    return(

      
      <div>
                
      {/* <img onClick={this.addVote} src={this.props.image_url} alt={this.props.keyword} width={400} />

      <h2>{this.props.title}</h2>
      
      <p>{this.props.description} {this.state.votes}</p>
       */}
      <Card style={{ width: '18rem' }}>
  <Card.Img  variant="top" src={this.props.image_url} alt={this.props.keyword} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
     number of votes {this.state.votes}
    </Card.Text>
    <Button onClick={this.addVote} variant="primary">vote</Button>
  </Card.Body>
</Card>

</div>

      
    )
  }
}
export default Animals