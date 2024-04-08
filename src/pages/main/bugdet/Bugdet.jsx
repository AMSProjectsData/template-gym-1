import style from './Bugdet.module.css'
import { FaCheck } from "react-icons/fa";


//diario, semanal, mensal 3x sem, mensal todos dias, trimestral, universitario

export function Bugdet() {
  return (
    <div className={style.bugdet_content}>

        <div className={style.lines}>
            <span className={style.span_styled}>PLANOS</span>
        </div>

        <h1>PLANOS QUE SE ENCAIXAM NOS SEUS OBJETIVOS E ORÇAMENTO</h1>

        <div className={style.plans}>
            <BugDet 
                name="Plano semanal"
                details='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
                price='49,99'
                period='mês'
                feature={(
                    <>
                        <Feature feat="caracteristica 1" />
                        <Feature feat="caracteristica 2" />
                        <Feature feat="caracteristica 3" />
                        <Feature feat="caracteristica 4" />
                    </>
                )}
            />
            <BugDet 
                name="Plano semanal"
                details='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
                price='49,99'
                period='mês'
                feature={(
                    <>
                        <Feature feat="caracteristica 1" />
                        <Feature feat="caracteristica 2" />
                        <Feature feat="caracteristica 3" />
                        <Feature feat="caracteristica 4" />
                    </>
                )}
            />
            <BugDet 
                name="Plano semanal"
                details='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
                price='49,99'
                period='mês'
                feature={(
                    <>
                        <Feature feat="caracteristica 1" />
                        <Feature feat="caracteristica 2" />
                        <Feature feat="caracteristica 3" />
                        <Feature feat="caracteristica 4" />
                    </>
                )}
            />
        </div>

        
    </div>

  )
}

const Line = () => {
    return(
        <div className={style.line}>
            <span></span>

        </div>
    )
}
const BugDet = ({name, details, price, period, feature}) => {
    return(
        <div className={style.bugdet_price}>
            <h2>{name}</h2>
            <span>{details}</span>

            <Line/>

            <h1>R${price}<span className={style.details_month}>/{period}</span></h1>
            
            <Line/>

            <div className={style.feature}>
                {feature}
            </div>
        </div>
    )
}

const Feature = ({feat}) => {
    return <span><FaCheck />   {feat}</span>
}
