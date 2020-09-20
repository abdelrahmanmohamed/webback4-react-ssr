import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <React.Fragment>
                <Form.Group controlId="username">
                    <Form.Label >Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={this.props.username}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
            </React.Fragment>
        );
    }
}

export default Step2;
