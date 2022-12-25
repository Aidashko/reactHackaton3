import React, { useContext } from "react";
import AuthForm from "../components/Autoriz/AuthForm";
import AuthContextProvider, {
  authContext,
} from "../contexts/AuthContextProvider";

const AuthPage = () => {
  const {
    user: { email },
  } = useContext(authContext);

  return (
    <AuthContextProvider>
      <AuthForm />
    </AuthContextProvider>
  );
};

export default AuthPage;
