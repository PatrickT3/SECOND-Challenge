//hook custom
import useAuth from "../../hooks/useAuth";
//import style
import "../css/Conteudo.css";
import {useEffect,useState} from "react";
// img
import nuvm from "../../img/Vector (2).svg";
import logoC from "../../img/Type=Colored positive 1.svg";
import seta from "../../img/Vector (3).svg";
// react
import {Link} from "react-router-dom";

const Conteudo = () => {
  const [horaAtual, setHoraAtual] = useState('');
  const [dayAtual,setDayAtual] = useState('');
  const [dadosTemp, setDadosTemp] = useState(null);
  const cidad = "Oriximiná";
  useEffect(() => {
    async function fetchDados() {
      const cityy = cidad;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityy)}&units=metric&appid=6c3ad536f4936801eb863a79db679f51`;
      const response = await fetch(url);
      const json = await response.json();
      setDadosTemp(json);
    }
    fetchDados();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dataAtual = new Date();
      const hora = dataAtual.getHours();
      const min = dataAtual.getMinutes();
      setHoraAtual(`${hora}:${min}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const days = setInterval(() => {
      const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December",
      ];
      const hro = new Date();
      const day_atc = hro.getDay();
      const month = hro.getMonth();
      const yaer = hro.getFullYear();
      setDayAtual(`${months[month]} ${day_atc}th, ${yaer}`);
    },1000);
    
    return () => clearInterval(days);
  }, []);

  return (
    <div className="div-princ">
      <header className="cab">
        <div className="banner">
          <h1 className="banner-tit">Weekly Planner </h1>
          <p className="sub-tit">Use this planner to organize your daily issues.</p>
        </div>
        <div className="hour">
            <span className="class-hour">{horaAtual}</span>
            <span className="class-day">{dayAtual}</span>
        </div>
        <div className="temp"> 
          <div className="class-temp">
            {/* renderizando o componente aqui com os dados obtidos da API */}
            {dadosTemp && (
              <div className="body-p">
                <p className="city-c"> {dadosTemp.name} - {dadosTemp.sys.country}</p>
                <div className="part-baixo">
                  <img src={nuvm} alt="nuvem" />
                  <p className="num-temp"> {Math.round(dadosTemp.main.temp)}°</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="logout">
          <Link className="img-logo" to="https://www.youtube.com/watch?v=ZNC-RNE0sdc" target="_blank"><img src={logoC} alt="logoCompass" /></Link>
          <img src={seta} alt="setinha" className="img-seta"/>
          <p>Logout</p>
        </div>
      </header>
    </div>
  )
}

export default Conteudo