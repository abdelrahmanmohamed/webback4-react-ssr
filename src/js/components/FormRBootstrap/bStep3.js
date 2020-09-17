import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BStep3 extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <React.Fragment>
                <Form.Group controlId="password">
                    <Form.Label >Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Button variant="success" type="submit">Sign up</Button>
            </React.Fragment>
        );
    }
}
export default BStep3;