import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import axios from 'axios'

function Home() {
  const [inputUser, setInputUser] = useState("");
  const navigate = useNavigate();

  const getUser = async (name) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const usersData = response.data;
      const foundUser = usersData.find(user => user.name === name);

      if (foundUser) {
        navigate('/user', { state: { user: foundUser } });
      } else {
        alert("Usuário não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  return (
    <div className="all">
        <div className="header">
            Bem-Vindo ao Site da Rebeca
        </div>
      <h2>Digite seu Nome:</h2>
      <input
        type="text"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
      />
      <button onClick={() => getUser(inputUser)}>Pesquisar</button>
    </div>
  );
}

export default Home