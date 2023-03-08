/* eslint-disable no-unused-vars */
import Home from "./pages/Home";
import Error404 from "./pages/Error404/Error404";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import EachProduct from "./pages/EachProduct/EachProduct";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logoutSuccess } from "./store";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="products" element={<EachProduct />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

function App() {
  const user = useSelector((state) => {
    return state.user;
  });

  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    // console.log(cookies.user);
    if (
      cookies.user &&
      !user.isLoggedIn &&
      cookies.user.id &&
      cookies.user.token &&
      cookies.user.name &&
      cookies.user.email &&
      cookies.user.photo
    ) {
      dispatch(
        loginSuccess({
          token: cookies.user.token,
          id: cookies.user.id,
          name: cookies.user.name,
          email: cookies.user.email,
          photo: cookies.user.photo,
        })
      );
    }
  }, [cookies.user, dispatch, user.isLoggedIn]);

  // console.log(user);

  return <RouterProvider router={router} />;
}

export default App;
