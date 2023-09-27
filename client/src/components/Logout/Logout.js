// Logout.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();

    navigate("/");

    // Redirect the user to the homepage
  }, [navigate]);
};

export default Logout;
