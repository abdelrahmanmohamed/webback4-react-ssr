import React, { Component } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
                <FormControl controlId="password">
                    <InputLabel >Password</InputLabel>
                    <Input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                    />
                </FormControl>
                <Button variant="success" type="submit" onClick={this.props.handleSubmit}>Sign up</Button>
            </React.Fragment>
        );
    }
}
export default BStep3;