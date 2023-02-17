// import do react
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Hook custom
import useAuth from "../../hooks/useAuth";
// Style
import "../css/Login&&Sub.css";
//imagens
import imagem from "../../img/image 2.jpg";
import logo from "../../img/Type=Colored negative.svg";
import pess from "../../img/Vector (1).svg"
import cad from "../../img/Vector.svg"


const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [ativo, setAtivo] = useState(false);
  const [ativoCad, setAtivoCad] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email | !senha) {
      setError(`Wow, invalid username or password.
                      Please, try again!`);
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }
    navigate("/Conteudo");
  };

  const anime = () => {
    setAtivo(true);
  }
  const anime2 = () => {
    setAtivoCad(true);
  }
  return (
    <div className="body-ls-login">
      <img src={pess} alt="pessoa" className="btnz" id={ativo === false?"btnz1":"btnz-1"}/>
      <img src={cad} alt="cadeado" className="btnz" id={ativoCad === false?"btnz2":"btnz-2"}/>
      <div className="form-e-login">
        <h1 className="titulo-login">Welcome,</h1>
        <p className="sub-titulo-login">To continue browsing safely, log in to the network.</p>
        <form onSubmit={handleLogin} className="formul-login">
          <h2>Login</h2>
          <label>
            <input className={!error? "btn-form-login":"erro-btn"} type="email" placeholder='user name' 
            value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} 
            onClick={anime}/>
          </label>
          <label >
            <input className={!error? "btn-form-login":"erro-btn"} type="password" placeholder='password' 
            value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} 
            onClick={anime2}/>
          </label>
          {error && <div className="errou-login">{error}</div>}
          <button type="submit" className="btn-button-login" onClick={anime}>Log in</button>
        </form>
        <Link to="/Sub" className="links">Register</Link>
      </div>
      <div className="img-d">
        <img src={logo} alt="logo" id="imgm-0"/>
        <img src={imagem} alt="Imagem Principal" id="imgm-1"/>
      </div>
    </div>
  )
}

export default Login