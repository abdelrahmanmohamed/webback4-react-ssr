import React from 'react';
import {Form} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import RegisterForm from '../RegisterForm';

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
                className="btn btn-secondary"
                type="button" onClick={this.prev}>
                Previous
            </Button>
        })
    }

    nextButton() {
        return this.registerController.nextButton(this.state, () => {
            return <Button
                className="btn btn-primary float-right"
                type="button" onClick={this.next}>
                Next
            </Button>
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>React Bootstrap Form 🧙‍♂️</h1>
                <p>Step {this.state.currentStep} </p>
                <Form onSubmit={this.state.handleSubmit}>
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
                </Form>

            </React.Fragment>
        );
    }
}

export default App;
