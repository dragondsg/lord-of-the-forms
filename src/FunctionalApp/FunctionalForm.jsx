import { ErrorMessage } from "../ErrorMessage";
import { TextInput, PhoneInput } from "./FunctionalInput";
import { useState } from 'react';

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

function changeConstructor(setState) {
  return (e) => {
    setState(e.target.value);
  }
}

export const FunctionalForm = ({ setUserInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [cityName, setCityName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [submitted, setSub] = useState(false);
  const firstNameValid = firstName.length > 1;
  const lastNameValid = lastName.length > 1;
  const mailAddressValid = mailAddress.includes("@");
  const cityNameValid = /^[a-zA-Z ]+$/.test(cityName);
  const phoneValid = /^[0-9]+$/.test(phoneNumber) && phoneNumber.length == 7;
  const allValid = firstNameValid && lastNameValid && mailAddressValid && cityNameValid && phoneValid;

  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      setSub(true);
      if (allValid) {
        setUserInfo({
          firstName: firstName,
          lastName: lastName,
          email: mailAddress,
          city: cityName,
          phone: phoneNumber,
        });
      }
    }}>
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <TextInput labelText={"First Name"}
      inputProps={{
        placeholder: "Bilbo",
        value: firstName,
        onChange: changeConstructor(setFirstName),
      }} />
      <ErrorMessage message={firstNameErrorMessage} show={submitted && !firstNameValid} />

      {/* last name input */}
      <TextInput labelText={"Last Name"}
      inputProps={{
        placeholder: "Baggins",
        value: lastName,
        onChange: changeConstructor(setLastName),
      }} />
      <ErrorMessage message={lastNameErrorMessage} show={submitted && !lastNameValid} />

      {/* Email Input */}
      <TextInput labelText={"Email"}
      inputProps={{
        placeholder: "bilbo-baggins@adventurehobbits.net",
        value: mailAddress,
        onChange: changeConstructor(setMailAddress),
      }} />
      <ErrorMessage message={emailErrorMessage} show={submitted && !mailAddressValid} />

      {/* City Input */}
      <TextInput labelText={"City"}
      inputProps={{
        placeholder: "Hobbiton",
        value: cityName,
        onChange: changeConstructor(setCityName),
      }} />
      <ErrorMessage message={cityErrorMessage} show={submitted && !cityNameValid} />

      <PhoneInput labelText={"Phone"}
      phoneSetter={setPhoneNumber} />
      <ErrorMessage message={phoneNumberErrorMessage} show={submitted && !phoneValid} />

      <input type="submit" value="Submit" />
    </form>
  );
};
