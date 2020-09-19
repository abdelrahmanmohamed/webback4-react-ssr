import React from 'react';
import Button from '@material-ui/core/Button';
import {FormGroup} from '@material-ui/core';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import RegisterForm from "../RegisterForm";

class App extends RegisterForm {
    constructor(props) {
        super(props)
    }

    /*
    * the functions for our button
    */
    previousButton() {
        return this.registerController.previousButton(this.state, () => {
            return <Button
                type="button" onClick={this.prev}>
                Previous
            </Button>
        })
    }

    nextButton() {
        return this.registerController.nextButton(this.state, () => {
            return <Button
                type="button" onClick={this.next}>
                Next
            </Button>
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Material UI React Form 🧙‍♂️</h1>
                <p>Step {this.state.currentStep} </p>

                <FormGroup>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                        handleSubmit={this.state.handleSubmit}
                    />
                    {this.previousButton()}
                    {this.nextButton()}

                </FormGroup>
            </React.Fragment>
        );
    }
}

export default App;
