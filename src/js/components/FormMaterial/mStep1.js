import React, { Component } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';

class BStep1 extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <React.Fragment>
                <FormControl controlId="email">
                    <InputLabel >Email address</InputLabel>
                    <Input
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleChange}
                    />
                </FormControl>
            </React.Fragment>
        );
    }
}

export default BStep1;
