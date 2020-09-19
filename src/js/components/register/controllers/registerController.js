import FormState from "../model/FormState";

export default class RegisterController {
    constructor() {
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    handleChange(event, state) {
        const {name, value} = event.target
        const formState = new FormState(state.currentStep, state.email, state.username, state.password)
        formState[name] = value;
        console.log(formState);
        return formState;
    }

    handleSubmit(event, state) {
        console.log(state)
        event.preventDefault();
        alert(`Your registration detail: \n
           Email: ${state.email} \n
           Username: ${state.username} \n
           Password: ${state.password}`)
    }

    next(state) {
        let currentStep = state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        return new FormState(currentStep, state.email, state.username, state.password)
    }

    prev(state) {
        let currentStep = state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        return new FormState(currentStep, state.email, state.username, state.password)
    }

    previousButton(state, renderPreviousButton) {
        if (state.currentStep !== 1) {
            return renderPreviousButton();
        }
        return null;
    }

    nextButton(state, renderNextButton) {
        if (state.currentStep < 3) {
            return renderNextButton();
        }
        return null;
    }

}
