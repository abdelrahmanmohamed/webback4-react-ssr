import {Component} from "react";
import RegisterController from "../controllers/registerController";
import FormState from "../model/FormState";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.registerController = new RegisterController();
        this.state = new FormState(1, '', '', '');
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
    }

    handleChange(event) {
        const newState = this.registerController.handleChange(event, this.state)
        this.setState(newState);
    }

    handleSubmit(event) {
        this.registerController.handleSubmit(event, this.state)
    }

    next() {
        let newState = this.registerController.next(this.state)
        this.setState(newState)
    }

    prev() {
        let newState = this.registerController.prev(this.state)
        this.setState(newState)
    }
}
