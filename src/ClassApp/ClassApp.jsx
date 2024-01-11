import { Component } from "react";
import { ClassForm } from "./ClassForm";
import { ProfileInformation } from "../ProfileInformation";

export class ClassApp extends Component {
  state = {
    userInfo: null,
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
        },
      });
    };

    return (
      <>
        <h2>Class</h2>
        <ProfileInformation userData={this.state.userInfo} />
        <ClassForm setUser={setUserInfo} />
      </>
    );
  }
}
