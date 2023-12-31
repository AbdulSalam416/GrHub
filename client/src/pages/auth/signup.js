import React,{useContext,useCallback} from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import { AuthContext } from "../../App";

export const Signup = () => {
  useBodyClass("p-auth");
  const authContext = useContext(AuthContext)

  const navigate = useNavigate();
  const email = authContext.userData.userEmail
  const name = authContext.userData.userName

  const [response, setResponse] = React.useState("");


  const trySignUp = async (event) => {
    event.preventDefault();
    console.log(email)

      const sig =  await signMessages()
 
    axios.post('https://auth.nilecapital.cc/api/signup', {
      email: email,
      name:name,
    })
    .then(function (response) {
      console.log(response);
      setResponse(' sign up email sent to your email')
      navigate('/login')
    })
    .catch(function (error) {
      console.log(error);
      setResponse(error.message)
    });

  };

  const signMessages = useCallback(async () => {

    try {
       
       const message = new TextEncoder().encode(` I accept that ${name }, ${email}, be associated with the details provided `);
      
    } catch (error) {
      alert(`Signing failed: ${error?.message}`);
    }

  },[email, name]) 

  return (
    <main className="p-auth-main">
      <form method="POST" action="/"onSubmit={trySignUp} className="form">
        <h1 className="el-title--h1">Sign up</h1>

        <Input type={'text'} name={'userName'} placeholder={'Your name'} />
 
        {/* <Input type={'password'} name={'user-password'} placeholder={'Password'} /> */}
        
        <Input type={'email'} name={'userEmail'} placeholder={'Email address'} />


       
       

        <button className="el-button outline" type="submit" >
         Continue
        </button>

        <span className="el-question">
          Have an account ? <a href="/login">Sign In</a>
        </span>
        <span className="el-question">
          {response}
        </span>
      </form>
    </main>
  );
};

export default Signup


// this code has been written by a novice frontend dev , 