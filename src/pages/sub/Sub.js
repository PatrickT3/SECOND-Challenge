import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// style
import "../css/Subs.css";
import imagem from "../../img/image 2.jpg";
import logo from "../../img/Type=Colored negative.svg";

const Sub = () => {
  const [name,setName] = useState("");
  const [lastName,setLastName] = useState("");
  const [birthDate,setBirthDate] = useState("");
  const [city,setCity] = useState("");
  const [country,setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email | !senhaConf | !senha | !name | !lastName | !birthDate | !city | !country) {
      setError("* Fill out all the fields");
      return;
    } else if (senha !== senhaConf) {
      setError("* The passwords do not match");
      return;
    }

    const res = signup(email, senha, name, lastName, city, country);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("Login");
  };
  return (
    <div className="body-ls">
      <div className="form-e">
      <Link to="/Login" className="links1">Back</Link>
        <h1 className="titulo">Welcome,</h1>
        <p className="sub-titulo">Please, register to continue</p>
        {error && <div className="errou">{error}</div>}
        <form onSubmit={handleSignup} className="formul">
          <label><span className="span">First name</span>
            <input className="btn-form" type="text" placeholder='Your first name' 
            value={name} onChange={(e) => [setName(e.target.value), setError("")]} />
          </label>
          <label><span className="span">Last name</span>
            <input className="btn-form" type="text" placeholder='Your last name' 
            value={lastName} onChange={(e) => [setLastName(e.target.value), setError("")]} />
          </label>
          <label><span className="span">Birth date</span>
            <input className="btn-form" type="text" placeholder='MM/DD/YYYY' 
            value={birthDate} onChange={(e) => [setBirthDate(e.target.value), setError("")]} />
          </label>
          <label><span className="span">Country</span>
            <input className="btn-form" type="text" placeholder='Your Country' 
            value={country} onChange={(e) => [setCountry(e.target.value), setError("")]} />
          </label>
          <label><span className="span">City</span>
            <input className="btn-form" type="text" placeholder='Your City' 
            value={city} onChange={(e) => [setCity(e.target.value), setError("")]} />
          </label>
          <label><span className="span">E-mail</span>
            <input className="btn-form" type="email" placeholder='A valid e-mail here' 
            value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
          </label>
          <label><span className="span">Password</span>
            <input className="btn-form" type="password" placeholder='Your password' 
            value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
          </label>
          <label><span className="span">Password</span>
            <input className="btn-form" type="password" placeholder='Comfirm your password' 
            value={senhaConf} onChange={(e) => [setSenhaConf(e.target.value), setError("")]} />
          </label>
          <button type="submit"className="btn-button">Register Now</button>
        </form>
      </div>
      <div className="img-d">
        <img src={logo} alt="logo" id="imgm-0"/>
        <img src={imagem} alt="Imagem Principal" id="imgm-1"/>
      </div>
    </div>
  )
}

export default Sub