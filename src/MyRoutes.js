import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";


const PUBLIC_ROUTES = [
  { link: "/auth", element: <AuthPage />, id: 3 },
 
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;