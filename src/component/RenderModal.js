import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import RenderModal from './RenderModal'

class PerantComponent extends Component {

    constructor(props){
        super(props)
        this.state ={
            beastName: '',
            showModal: false
        }
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    beastNameButton = () => {
        this.setState({
            beastName: this.state.title,
            showModal: true
        })
    }

    render() {
        return (
            <div>
                <Button variant="info" onClick={this.beastNameButton}>Button 1</Button>
                <Button variant="info" onClick={this.beastNameButton}>Button 2</Button>
            

            <RenderModal
            show={this.state.showModal}
            handleClose={this.handleClose}
            beastTitle={this.state.beastName}
            />
            </div>
        );
    }
}

export default PerantComponent


;