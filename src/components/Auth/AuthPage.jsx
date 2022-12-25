import React, { useContext } from "react";
import AuthForm from "./AuthForm";
import { authContext } from "../../AuthContextProvider";


const AuthPage = () => {
  const {
    user: { email },
  } = useContext(authContext);

  return (
    <div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;