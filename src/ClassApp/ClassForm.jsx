import { Component } from "react";
import { TextInput, PhoneInput } from "./ClassInput";
import { ErrorMessage } from "../ErrorMessage";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    cityName: "",
    phoneNumber: "",

    submitted: false,
  };

  render() {
    const firstNameValid = this.state.firstName.length > 1;
    const lastNameValid = this.state.lastName.length > 1;
    const emailValid = this.state.emailAddress.includes("@");
    const cityNameValid = /^[a-zA-Z ]+$/.test(this.state.cityName);
    const phoneValid = /^[0-9]+$/.test(this.state.phoneNumber) && this.state.phoneNumber.length == 7;
    const allValid = firstNameValid && lastNameValid && emailValid && cityNameValid && phoneValid;

    const setPhoneNumber = (num) => {
      this.setState({
        phoneNumber: num,
      });
    };

    return (
      <form onSubmit={(e)=>{
        e.preventDefault();
        this.setState({ submitted: true, });
        if (allValid) {
          this.props.setUser(
            this.state.firstName,
            this.state.lastName,
            this.state.emailAddress,
            this.state.cityName,
            this.state.phoneNumber,
          );
        }
      }}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <TextInput labelText={"First Name"}
        inputProps={{
          placeholder: "Bilbo",
          value: this.state.firstName,
          onChange: (e) => {this.setState({ firstName: e.target.value })},
        }} />
        <ErrorMessage message={firstNameErrorMessage} show={ !firstNameValid && this.state.submitted } />

        {/* last name input */}
        <TextInput labelText={"Last Name"}
        inputProps={{
          placeholder: "Baggins",
          value: this.state.lastName,
          onChange: (e) => {this.setState({ lastName: e.target.value })},
        }} />
        <ErrorMessage message={lastNameErrorMessage} show={ !lastNameValid && this.state.submitted } />

        {/* Email Input */}
        <TextInput labelText={"Email"}
        inputProps={{
          placeholder: "bilbo-baggins@adventurehobbits.net",
          value: this.state.emailAddress,
          onChange: (e) => {this.setState({ emailAddress: e.target.value })},
        }} />
        <ErrorMessage message={emailErrorMessage} show={ !emailValid && this.state.submitted } />

        {/* City Input */}
        <TextInput labelText={"City"}
        inputProps={{
          placeholder: "Hobbiton",
          value: this.state.cityName,
          onChange: (e) => {this.setState({ cityName: e.target.value })},
        }} />
        <ErrorMessage message={cityErrorMessage} show={ !cityNameValid && this.state.submitted } />

        <PhoneInput labelText={"Phone"}
          phoneSetter={setPhoneNumber} />
        <ErrorMessage message={phoneNumberErrorMessage} show={ !phoneValid && this.state.submitted } />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
