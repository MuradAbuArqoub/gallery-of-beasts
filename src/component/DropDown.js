import React from "react";
import Form from 'react-bootstrap/Form'

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

        // submitHandler = async (event) => {
        //     event.preventDefault();
        //     await this.setState({
        //       userName: event.target.userName.value,
        //       age: event.target.age.value,
        //       breed: event.target.breed.value,
        //       likeCats: event.target.likeCats.checked,
        //       showModal: true,
        //     });

        //     closeHandler = () => {
        //         this.setState({
        //           showModal: false,
        //         });
    }
    render() {
        return (
            <div>
                {/* <Form onSubmit = {}> */}
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value={this.props.horns}>1</option>
                    <option value={this.props.horns}>2</option>
                    <option value={this.props.horns}>3</option>
                    <option value={this.props.horns}>100</option>
                </Form.Select>
            </div>
        );
    }
}

export default DropDown