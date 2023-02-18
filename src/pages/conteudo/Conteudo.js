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
  const [chenge, setChange] = useState('');
  const cidad = "Oriximiná";
  const [activeButton, setActiveButton] = useState(null);

  // API TEMP
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
  
  // Relogio 
  useEffect(() => {
    const intervalId = setInterval(() => {
      const dataAtual = new Date();
      const hora = dataAtual.getHours();
      const min = dataAtual.getMinutes();
      setHoraAtual(`${hora}:${min}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  //  Format mes/dia/ano
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

  // Funções do form
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    
    const pHor = formData.get('horario');
    console.log(pHor);
    alert("enviado");
  }
  function handleChange(event) {
    setChange(event.target.value);
  }
  // form dos botões
  const handleSubmitBtn = (e) => {
    e.preventDefault()
  }

  const handleClick = (event) => {
    const clickedButton = event.target;
    setActiveButton(clickedButton);
  };

  const getButtonStyle = (buttonValue) => {
    if (activeButton && activeButton.value === buttonValue) {
      return {
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.3)',
        width: '290px'
      };
    }
    return {};
  };
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
          <Link to="/login" className="link-login">
            <img src={seta} alt="setinha" className="img-seta"/>
            <p>Logout</p>
          </Link>          
        </div>
      </header>
      <main>
        <section className="sessao-form">
          <form onSubmit={handleSubmit} className="flex-form">
            <input type="text" name="tesk" className="input-tesk" placeholder="Task or issue"></input>
            <select id="daysOfWeek" onChange={handleChange} className="input-sel" defaultValue="">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            <input type="text" name="horario" className="input-hora" placeholder="01h 32m"></input>
            <div className="class-btns">
              <button type="submit" className="btn-add">+ Add to calendar</button>
              <button type="button" className="btn-del">- Delet all</button>
            </div>
          </form>
        </section>
        <section className="days-week">
          <form onSubmit={handleSubmitBtn}>
            <button value="Monday" onClick={handleClick} style={{ ...getButtonStyle('Monday'), backgroundColor: 'red' }}>
              Monday
            </button>
            <button value="Tuesday" onClick={handleClick} style={{...getButtonStyle('Tuesday'), backgroundColor: 'rgba(255, 128, 0, 1)'}}>
              Tuesday
            </button>
            <button value="Wednesday" onClick={handleClick} style={{...getButtonStyle('Wednesday'), backgroundColor: 'rgba(255, 206, 0, 1)' }}>
              Wednesday
            </button>
            <button value="Thursday" onClick={handleClick} style={{...getButtonStyle('Thursday'), backgroundColor: 'rgba(255, 0, 36, 0.7)' }}>
              Thursday
            </button>
            <button value="Friday" onClick={handleClick} style={{...getButtonStyle('Friday'), backgroundColor: 'rgba(255, 128, 0, 0.7)' }}>
              Friday
            </button>
            <button value="Saturday" onClick={handleClick} style={{...getButtonStyle('Saturday'), backgroundColor: 'rgba(255, 206, 0, 0.7)' }}>
              Saturday
            </button>
            <button value="Sunday" onClick={handleClick} style={{...getButtonStyle('Sunday'), backgroundColor: 'rgba(255, 0, 36, 0.5)' }}>
              Sunday
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Conteudo