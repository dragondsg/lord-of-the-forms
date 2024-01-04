import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { useState } from 'react';

export const FunctionalApp = () => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <>
      <h2>Functional</h2>
      <ProfileInformation userData={userInfo} />
      <FunctionalForm setUserInfo={setUserInfo} />
    </>
  );
};
