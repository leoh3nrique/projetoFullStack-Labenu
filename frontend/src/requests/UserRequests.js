import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const UserRequests = () => {
  const context = useContext(GlobalContext);

  const { setToken } = context;

  const login = async (email, password) => {
    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("http://localhost:3003/users/login", body);
      setToken(response.data.token);
    } catch (error) {
      // Lidar com erros
      console.error("Erro na requisição:", error);
    }
  };

  const signup = async (name, email, password) =>{
    const body ={
      name:name,
      email:email,
      password:password
    }
    try {
      const response = await axios.post("http://localhost:3003/users/signup", body);
      setToken(response.data.token);
    } catch (error) {
      // Lidar com erros
      console.error("Erro na requisição:", error);
    }
  }


  return { login, signup };
};

export default UserRequests;
