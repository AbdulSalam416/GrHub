import React from "react";
import Home from "./pages/home";
import General from "./pages/general";
import Market from "./pages/market";
import Auth from "./pages/auth";
import Team from "./pages/team";
import Privacy from "./pages/privacy";
import Article from "./pages/article";
import { Account } from "./pages/account";
import { AdminLogin } from "./pages/auth";
import { Admin } from "./pages/admin";
import Logout from "./components/Logout/Logout";
import NewDepositor from './pages/admin/new-depositor'


const routes = [
  { path: "/", element: <Home /> },

  { path: "/general", element: <General /> },

  { path: "/market", element: <Market /> },

  
  { path: "/login", element: <Auth /> },


  { path: "/services", element: <Team /> },

  { path: "/privacy", element: <Privacy /> },

  { path: "/article/:id", element: <Article /> },

  { path: "account", element: <Account/>},

  {path:"admin-login", element:<AdminLogin/>},


  {path:"admin-panel", element:<Admin/>},

  {path:"logout", element:<Logout/>},

  {path:"new-depositor", element:<NewDepositor/>},



];

export default routes;
