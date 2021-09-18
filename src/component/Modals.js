import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class Modals extends Component {



  render() {
    return (
      <div>

        <Modal show={this.props.showModel} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <img className="img" src="" alt={this.state.selectedTitle} style={{ width: '100%' }} /> */}
            <br />
            <br />
            xxx
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default Modals;