import React,{useEffect,useState} from "react";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import Container from "../../components/Container";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {formatDate } from '../../dateUtils'


import './style.css'
  

export const Account = () => {
  useBodyClass("p-auth");

  const navigate = useNavigate()
  const [userData, setUserData] = useState(null); // State to store user dat


 
 useEffect(() => {
  
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      // User is logged in, perform necessary actions
      const username = window.localStorage.getItem("username");


      axios
        .get(`/api/depositorRoute/profile/${username}`)
        .then(function (response) {
          // Handle the response and set the user data in state
          setUserData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // User is not logged in, redirect to login page
      navigate('/login');
    }


  
 
 },[userData, navigate])




  return (
    <main  className="p-article-box">
    <Container>
    <ToastContainer />
    

    <div className="container">
  <h2>Depositor Dashboard : {userData && userData.username}</h2>
  <table className="user-profile-table">
    <tbody>
      <tr>
        <td><strong>Vault Number:</strong></td>
        <td>{userData && userData.vaultNumber}</td>
      </tr>
      <tr>
        <td><strong>Full Name:</strong></td>
        <td>{userData && userData.fullName}</td>
      </tr>
      <tr>
        <td><strong>Date of Birth:</strong></td>
        <td>{userData && formatDate(userData.dateOfBirth)}</td>
      </tr>
      <tr>
        <td><strong>email:</strong></td>
        <td>{userData && userData.email}</td>
      </tr>
      <tr>
        <td><strong>Nationality:</strong></td>
        <td>{userData && userData.nationality}</td>
      </tr>
      <tr>
        <td><strong>Country:</strong></td>
        <td>{userData && userData.country}</td>
      </tr>
      <tr>
        <td><strong>Gender:</strong></td>
        <td>{userData && userData.sex}</td>
      </tr>
      <tr>
        <td><strong>Occupation:</strong></td>
        <td>{userData && userData.occupation}</td>
      </tr>
      <tr>
        <td><strong>Deposit Date:</strong></td>
        <td>{userData && formatDate(userData.depositDate)}</td>
      </tr>
      <tr>
        <td><strong>Address:</strong></td>
        <td>{userData && userData.address}</td>
      </tr>
      <tr>
        <td><strong>Stock:</strong></td>
        <td>{userData && userData.itemName}</td>
      </tr>
      <tr>
        <td><strong>Weight:</strong></td>
        <td>{userData && userData.weight}kg</td>
      </tr>
      <tr>
        <td><strong>Purity</strong></td>
        <td>{userData && userData.purity}%</td>
      </tr>
      <tr>
        <td><strong>Carat:</strong></td>
        <td>{userData && userData.carat}</td>
      </tr>
      <tr>
        <td><strong>Demurrage Charge($):</strong></td>
        <td>${userData && userData.demurrageCharge} per month</td>
      </tr>
      <tr>
        <td><strong>Next of Kin:</strong></td>
        <td>{userData && userData.nextOfKin}</td>
      </tr>
    </tbody>
  </table>
</div>


   
    </Container>
    

    </main>
  
  );
};

// export default Signup


// this code has been written by a novice frontend dev ,   kindly adjust where needed considering performance   you can replace address for testing 
    // const user = auth.currentUser;
    








   // https://api-dawn-2-phase-2.solrise.finance/api/v3/funds/9zART5211mn51x9raDojtHcmfEU6SQ58xMCFDe5479VQ/aum?performancePeriod=all
   //https://api-dawn-2-phase-2.solrise.finance/api/v3/funds/9zART5211mn51x9raDojtHcmfEU6SQ58xMCFDe5479VQ/performance?performancePeriod=all
   //https://api-dawn-2-phase-2.solrise.finance/api/v3/funds/9zART5211mn51x9raDojtHcmfEU6SQ58xMCFDe5479VQ/performance?performancePeriod=1d

//  const fetchInfo = async () => {
  
//    let Investment = await axios.get('https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/DaMeLur5PYcLHfGMTexLowVuP91mKmvhGLbeEV2wKzDr/investments')
//   //  console.log(Investment)
//    return Investment.data.data[0]
//  }

//https://api-dawn-2-phase-2.solrise.finance/api/v3/wallet/DaMeLur5PYcLHfGMTexLowVuP91mKmvhGLbeEV2wKzDr/investments
// https://api-dawn-2-phase-2.solrise.finance/api/v3/funds?page=0&pageSize=1000&owner=Db9EN9KHvQ8ePitn4LKzCUrUcBDVGa4Q86Hj64rstQ1p&sortField=lastActivityTimestamp&sortDirection=DESC
