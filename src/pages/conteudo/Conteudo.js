//hook custom
//import useAuth from "../../hooks/useAuth";
//import style
import "../css/Conteudo.css";
import {useEffect,useState} from "react";
// img
import bolona from "../../img/Group 5 1.svg"
import nuvm from "../../img/Vector (2).svg";
import logoC from "../../img/Type=Colored positive 1.svg";
import seta from "../../img/Vector (3).svg";
// react
import {Link} from "react-router-dom";

const Conteudo = () => {
  //const { user } = useAuth();
  //codigo a revisar
  //console.log(user); -> objeto exibido no console mas tem esse erro
  //Uncaught TypeError: Cannot read properties of undefined (reading 'city')
  //const cidad = user['city'].toString();
  const [horaAtual, setHoraAtual] = useState('');
  const [dayAtual,setDayAtual] = useState('');
  const [dadosTemp, setDadosTemp] = useState(null);
  const [chenge, setChange] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [listMonday, setListMonday] = useState([]);
  const [listTuesday, setListTuesday] = useState([]);
  const [listWednesday, setListWednesday] = useState([]);
  const [listThursday, setListThursday] = useState([]);
  const [listFriday, setListFriday] = useState([]);
  const [listSaturday, setListSaturday] = useState([]);
  const [listSunday, setListSunday] = useState([]);


  // API TEMP
  useEffect(() => {
    async function fetchDados() {
      const cityy = "Belém";
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
    e.preventDefault();
    const formData = new FormData(e.target);
    const pHor = formData.get('horario');
    const task = formData.get('tesk');
    addNewUser(pHor, task);
    e.target.reset();
  };
  function isDuplicatedEntry(list, newUser) {
    return list.some((entry) => entry.h === newUser.h);
  }
  const addNewUser = (horario, tesk) => {
    const newUser = { id: Date.now(), h: horario, t: tesk };
    switch (chenge) {
      case "Monday":
        if (isDuplicatedEntry(listMonday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListMonday([...listMonday, newUser]);
        break;
      case "Tuesday":
        if (isDuplicatedEntry(listTuesday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListTuesday([...listTuesday, newUser]);
        break;
      case "Wednesday":
        if (isDuplicatedEntry(listWednesday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListWednesday([...listWednesday, newUser]);
        break;
      case "Thursday":
        if (isDuplicatedEntry(listThursday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListThursday([...listThursday, newUser]);
        break;
      case "Friday":
        if (isDuplicatedEntry(listFriday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListFriday([...listFriday, newUser]);
        break;
      case "Saturday":
        if (isDuplicatedEntry(listSaturday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListSaturday([...listSaturday, newUser]);
        break;
      case "Sunday":
        if (isDuplicatedEntry(listSunday, newUser)) {
          return alert('Horário já ocupado');
        }
        setListSunday([...listSunday, newUser]);
        break;
      default:
        break;
    }
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
    setChange(event.target.value);
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
  const clearList = (day) => {
    switch (day) {
      case "Monday":
        setListMonday([]);
        break;
      case "Tuesday":
        setListTuesday([]);
        break;
      case "Wednesday":
        setListWednesday([]);
        break;
      case "Thursday":
        setListThursday([]);
        break;
      case "Friday":
        setListFriday([]);
        break;
      case "Saturday":
        setListSaturday([]);
        break;
      case "Sunday":
        setListSunday([]);
        break;
      default:
        break;
    }
  }
  return (
    <div className="div-princ">
      <img src={bolona} alt="bola da logo" className="bolaLogo"/>
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
            <input type="text" name="tesk" className="input-tesk" placeholder="Task or issue" maxLength="35" required></input>
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
              <button type="button" className="btn-del" onClick={() => clearList(chenge)}>- Delet all</button>
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
        <section>
          <p className="caixa" style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>Time</p>
        </section>
        <section className="classDash">
            {chenge === "Monday" && (
              <ul>
                {listMonday.map((item) => (
                  <li key={item.id}><p className="caixa" style={{backgroundColor: 'red'}}> {item.h}</p>  <p className="caixa-2" style={{background: 'linear-gradient(to right, #FF4B2B 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            {chenge === "Tuesday" && (
              <ul>
                {listTuesday.map((item) => (
                  <li key={item.id}><p className="caixa" style={{backgroundColor: 'rgba(255, 128, 0, 1)'}}> {item.h}</p>  <p className="caixa-2" style={{background: 'linear-gradient(to right, rgba(255, 128, 0, 1) 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            {chenge === "Wednesday" && (
              <ul>
                {listWednesday.map((item) => (
                  <li key={item.id}><p className="caixa" style={{backgroundColor: 'rgba(255, 206, 0, 1)'}}> {item.h}</p>  <p className="caixa-2" style={{background: 'linear-gradient(to right, rgba(255, 206, 0, 1) 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            {chenge === "Thursday" && (
              <ul>
                {listThursday.map((item) => (
                  <li key={item.id}>
                    <p className="caixa" style={{backgroundColor: 'rgba(255, 0, 36, 0.7)'}}> {item.h}</p>  
                    <p className="caixa-2" 
                    style={{background: 'linear-gradient(to right, rgba(255, 0, 36, 0.7) 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            {chenge === "Friday" && (
              <ul>
                {listFriday.map((item) => (
                  <li key={item.id}><p className="caixa" style={{backgroundColor: 'rgba(255, 128, 0, 0.7)'}}> {item.h}</p>  <p className="caixa-2" style={{background: 'linear-gradient(to right, rgba(255, 128, 0, 0.7) 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            {chenge === "Saturday" && (
              <ul>
                {listSaturday.map((item) => (
                  <li key={item.id}><p className="caixa" style={{backgroundColor: 'rgba(255, 206, 0, 0.7)'}}> {item.h}</p>  <p className="caixa-2" style={{background: 'linear-gradient(to right, rgba(255, 206, 0, 0.7) 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            {chenge === "Sunday" && (
              <ul>
                {listSunday.map((item) => (
                  <li key={item.id}><p className="caixa" style={{backgroundColor: 'rgba(255, 0, 36, 0.5)'}}> {item.h}</p>  <p className="caixa-2" style={{background: 'linear-gradient(to right, rgba(255, 0, 36, 0.5) 5%, rgba(228, 240, 248, 0.42) 5%)'}}>{item.t}</p></li>
                ))}
              </ul>
            )}
            
        </section>
      </main>
    </div>
  )
}

export default Conteudo