import React, {Component} from 'react';
import {FormControl, Input, InputLabel} from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Step3 extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <React.Fragment>
                <FormControl>
                    <InputLabel>Password</InputLabel>
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

export default Step3;
