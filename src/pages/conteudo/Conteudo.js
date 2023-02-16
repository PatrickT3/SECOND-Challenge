//import style
import "../css/Conteudo.css";
import {useEffect,useState} from "react";

const Conteudo = () => {
  const [horaAtual, setHoraAtual] = useState('');
  const [dayAtual,setDayAtual] = useState('');

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
        <div className="temp"></div>
        <div className="logout"></div>
      </header>
    </div>
  )
}

export default Conteudo