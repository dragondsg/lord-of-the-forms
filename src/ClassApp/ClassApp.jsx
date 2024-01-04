import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

const defaultUser = {
  email: "default@default.com",
  firstName: "Default",
  lastName: "Default",
  phone: "1234567",
  city: "Hobbiton",
};

export class ClassApp extends Component {
  state = {
    userInfo: defaultUser,
  };

  render() {
    const setUserInfo = (first, last, email, city, phone) => {
      this.setState({
        userInfo: {
          email: email,
          firstName: first,
          lastName: last,
          phone: phone,
          city: city,
        }
      });
    }

    return (
      <>
        <h2>Class</h2>
        <ProfileInformation
          userData={ this.state.userInfo }
        />
        <ClassForm setUser={setUserInfo} />
      </>
    );
  }
}
