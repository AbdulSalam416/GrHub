import React,{useMemo,createContext, useState,  useEffect} from "react";
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { useRoutes } from "react-router-dom";
import { fetch } from "./redux/actions";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext()


const initialData = {
  username:"",
  password:"",
}


function App() {
  const routing = useRoutes(routes);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(initialData) 


  useEffect(()=>{
    const getArticles = ()=>{
      dispatch(fetch());
    }
    getArticles()
    
  },[])

  const addUserData = (name, data) => {
    setUserData(userData => ({
      ...userData,
      [name]: data
    }))
  }


    

  return (
    <AuthContext.Provider value={{userData, add:addUserData}}>
          <Header />
          <SmoothScroll>
            {routing}
            <Footer />
          </SmoothScroll>
    </AuthContext.Provider>
  );
}

export default App;
