import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';

class Step1 extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <React.Fragment>
                <Form.Group controlId="email">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
            </React.Fragment>
        );
    }
}

export default Step1;
