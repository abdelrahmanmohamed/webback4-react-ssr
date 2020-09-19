import React, {Component} from 'react';
import {FormControl, Input, InputLabel} from '@material-ui/core';

class Step2 extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <React.Fragment>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        value={this.props.username}
                        onChange={this.props.handleChange}
                    />
                </FormControl>
            </React.Fragment>
        );
    }
}

export default Step2;
