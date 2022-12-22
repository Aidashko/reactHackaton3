// const PUBLIC_ROUTES = [
//     { link: "/", element: <Home />, id: 1 },
//     { link: "/admin", element: <Admin />, id: 2 },
//     { link: "/auth", element: <AuthPage />, id: 3 },
//     { link: "/products", element: <Products />, id: 4 },
//     { link: "/edit/:id", element: <Edit />, id: 5 },
//     { link: "/cart", element: <Cart />, id: 6 },

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

//   ];
const PUB_ROUTERS = [
  { link: "/", element: <Home />, id: 1 },
  { link: "/products", element: <Products />, id: 2 },
];

const MyRoutes = () => {
  return (
    <Routes>
      {PUB_ROUTERS.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MyRoutes;
