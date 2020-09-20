import React from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import RegisterForm from '../registerForm';

class App extends RegisterForm {

    previousButton() {
        return this.registerController.previousButton(this.state, () => {
            return <button
                className="btn btn-secondary"
                type="button" onClick={this.prev}>
                Previous
            </button>;
        });
    }

    nextButton() {
        return this.registerController.nextButton(this.state, () => {
            return <button
                className="btn btn-primary float-right"
                type="button" onClick={this.next}>
                Next
            </button>;
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Html React Form 🧙‍♂️</h1>
                <p>Step {this.state.currentStep} </p>

                <form onSubmit={this.handleSubmit}>
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
                    />
                    {this.previousButton()}
                    {this.nextButton()}

                </form>
            </React.Fragment>
        );
    }
}

export default App;
