import React,{useEffect,useState} from "react";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import Container from "../../components/Container";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useNavigate, Link } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Users from '../../components/Admin'

  import './style.css'


  

  export const Admin = () => {
    useBodyClass("p-auth");
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
  
    useEffect(() => {
      const isLoggedIn = window.localStorage.getItem("isLoggedIn");
      const isAdmin = window.localStorage.getItem("isAdmin");
  
      if (isLoggedIn && isAdmin) {
        // Check if user data is stored in local storage
        const storedUsersData = window.localStorage.getItem("allUsersData");
  
        if (storedUsersData) {
          // If data is available, parse it and set it in the state
          setAllUsers(JSON.parse(storedUsersData));
        } else {
          // If data is not available, fetch it from the server
          axios
            .get(`/api/adminRoute/all-users`)
            .then(function (response) {
              const usersData = response.data;
              setAllUsers(usersData);
  
              window.localStorage.setItem(
                "allUsersData",
                JSON.stringify(usersData)
              );
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      } else {
        navigate('/admin-login');
      }
    }, [navigate]);
  
    return (
      <main className="p-article-box">
        <Container>
          <ToastContainer />
          <div>
            <h3 className="el-button outline">Golden Reserve Hub Depositors</h3>
            <Users users={allUsers} />
          </div>
        </Container>

        <Link className="el-button outline" to={"/new-depositor"}>
              Add a Depositor       
        </Link>

        <Link className="el-button outline" to={"/price-calculator"}>
              Gold Price Calculator          
        </Link>

      </main>
    );
  };