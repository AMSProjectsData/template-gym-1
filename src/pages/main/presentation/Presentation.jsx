import style from './Presentation.module.css'
import { CgGym } from "react-icons/cg";
import { FaHeartCircleBolt } from "react-icons/fa6";



export function Presentation() {

  return (
    <div className={style.presentation_content}>
      <div className={style.header}>
        <h1>Ajudamos você a superar limites e alcançar seus objetivos mais rápido.</h1>

        <p>Conquiste resultados reais em nossa academia com o plano ideal para você, pois sua saúde e bem estar são prioridades para nós.</p>
      </div>
      <div className={style.tabs}>
        <Tab name="Musculação" icon={ <CgGym />} text="Fortaleça seu corpo e alcance novos limites na musculação conosco!" />
        <Tab name="Cardio" icon={<FaHeartCircleBolt />} text='Energize seu coração e queime calorias com nossos treinos de cardio' />
        <Tab name="Ritmos" icon={<FaHeartCircleBolt />} text='Dance, divirta-se e mantenha-se em forma com nossas aulas de ritmos!' />
      </div>
      
      <div className={style.bg_img}></div>
    </div>
  )
}

const Tab = ({name, icon, text}) => {
  return ( 
    
      <div className={style.tab}>
        <span>{icon} {name}</span> 
        <span>{text}</span> 
      </div>
    )
}
