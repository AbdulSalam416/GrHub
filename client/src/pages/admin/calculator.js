import React, { useContext } from "react";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import useBodyClass from "../../hooks/useBodyClass";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Calculator = () => {
  useBodyClass("p-auth");

  const navigate = useNavigate();

  const [errorResponse, setErrorResponse] = React.useState("");

  // React.useEffect(() => {

  // }, [navigate]);

//   const addNew = async (event) => {
//     const isLoggedIn = window.localStorage.getItem("isLoggedIn");
//     const isAdmin = window.localStorage.getItem("isAdmin");
//     event.preventDefault();
//     const vaultNumber = event.target.vaultNumber.value;
//     const username = event.target.username.value;
//     const password = event.target.password.value;
//     const fullName = event.target.fullName.value;
//     const dateOfBirth = event.target.dateOfBirth.value;
//     const email = event.target.email.value;
//     const country = event.target.country.value;
//     const nationality = event.target.nationality.value;
//     const sex = event.target.sex.value;
//     const occupation = event.target.occupation.value;
//     const depositDate = event.target.depositDate.value;
//     const address = event.target.address.value;
//     const itemName = event.target.itemName.value;
//     const weight = event.target.weight.value;
//     const purity = event.target.purity.value;
//     const carat = event.target.carat.value;
//     const demurrageCharge = event.target.demurrageCharge.value;
//     const nextOfKin = event.target.nextOfKin.value;

//     if (isLoggedIn && isAdmin) {
//       axios
//         .post("/api/adminRoute/add-depositor", {
//           vaultNumber: vaultNumber,
//           username: username,
//           password: password,
//           fullName: fullName,
//           dateOfBirth: dateOfBirth,
//           email: email,
//           country: country,
//           nationality: nationality,
//           sex: sex,
//           occupation: occupation,
//           depositDate: depositDate,
//           address: address,
//           itemName: itemName,
//           weight: weight,
//           purity: purity,
//           carat: carat,
//           demurrageCharge: demurrageCharge,
//           nextOfKin: nextOfKin,
//         })
//         .then(function (response) {
//           console.log(response);
//           alert("SUCCESS");
//           window.localStorage.removeItem('allUsersData')
//           navigate("/admin-panel");
//         })
//         .catch(function (error) {
//           console.log(error);
//           switch (error.code) {
//             default:
//               setErrorResponse("An unknown error has occured");
//           }
//         });
//     } else {
//       alert("Login to add a depositor");
//     }
//   };

  return (
    <main className="p-auth-main">
<br /> <br />
<br />
<br />
<br />

<h3 className="el-button outline">Under Development</h3>

      {/* <form method="POST" action="/" onSubmit={addNew} className="form">
        <h3 className="el-title--h1">New Depositor</h3>

        <Input
          type={"text"}
          name={"vaultNumber"}
          placeholder={"Vault Number"}
        />

        <Input type={"text"} name={"username"} placeholder={"username"} />
        <Input type={"password"} name={"password"} placeholder={"password "} />
        <Input type={"text"} name={"fullName"} placeholder={"Full Name"} />
        <Input type={"date"} name={"dateOfBirth"} placeholder={``} />
        <Input type={"email"} name={"email"} placeholder={`Email`} />
        <Input type={"text"} name={"country"} placeholder={"Country"} />
        <Input type={"text"} name={"nationality"} placeholder={"Nationality"} />
        <Input type={"text"} name={"sex"} placeholder={"Gender"} />
        <Input type={"text"} name={"occupation"} placeholder={"Occupation"} />
        <Input type={"date"} name={"depositDate"} placeholder={``} />
        <Input type={"text"} name={"address"} placeholder={"Address"} />
        <Input type={"text"} name={"itemName"} placeholder={"Item Name"} />
        <Input type={"number"} name={"weight"} placeholder={"Weight"} />
        <Input type={"number"} name={"purity"} placeholder={"Purity"} />
        <Input type={"number"} name={"carat"} placeholder={"carat"} />
        <Input
          type={"number"}
          name={"demurrageCharge"}
          placeholder={"Demurrage Charge"}
        />
        <Input type={"text"} name={"nextOfKin"} placeholder={"Next Of Kin"} />

        <button className="el-button outline" type="submit">
          Submit
        </button>

        <span className="el-question">{errorResponse}</span>
      </form> */}
    </main>
  );
};

export default Calculator;
