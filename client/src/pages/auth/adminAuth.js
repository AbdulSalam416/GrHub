import React, { useContext } from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminLogin = () => {
  useBodyClass("p-auth");

  const navigate = useNavigate();

  const [errorResponse, setErrorResponse] = React.useState("");

  // React.useEffect(() => {

  // }, [navigate]);

  const trySignIn = async (event) => {
    event.preventDefault();
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log(username, password);
    axios
      .post("/api/adminRoute/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        window.localStorage.setItem("isAdmin", true);
        window.localStorage.setItem("isLoggedIn", true); 
        window.localStorage.setItem("username", username);
        navigate("/admin-panel");
      })
      .catch(function (error) {
        console.log(error);
        switch (error.code) {
          default:
            setErrorResponse("An unknown error has occured");
        }
      });
  };

  return (
    <main className="p-auth-main">
      <form method="POST" action="/" onSubmit={trySignIn} className="form">
        <h1 className="el-title--h1">Sign in</h1>

        {/* <Input type={'text'} name={'user-name'} placeholder={'Your name'} /> */}

        {/* <Input type={'password'} name={'user-password'} placeholder={'Password'} /> */}

        <Input type={"text"} name={"username"} placeholder={"Username "} />
        <Input type={"password"} name={"password"} placeholder={"Password"} />

        <button className="el-button outline" type="submit">
          Login
        </button>

        <span className="el-question">{errorResponse}</span>
      </form>
    </main>
  );
};

export default AdminLogin;
