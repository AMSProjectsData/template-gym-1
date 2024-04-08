import style from './Actions.module.css'

export function Actions() {
  return (
    <div className={style.action_content}>
        <div className={style.lines}>
            <span className={style.span_styled}>ESTILO DE VIDA</span>
        </div>

        <h1>QUALIDADE DE VIDA PARA O SEU DIA A DIA</h1>

        <div className={style.benefits}>
            <Benefit
                name='BEM ESTAR' 
                content='orem ipsum dolor sit amet, consectetur adipisicing elit. '
                icon=''
            />

            <Line/>

            <Benefit
                name='ANTI ESTRESSE' 
                content='orem ipsum dolor sit amet, consectetur adipisicing elit. ' 
                icon=''
            />
            <Line/>

            <Benefit
                name='ALTA INTENSIDADE' 
                content='orem ipsum dolor sit amet, consectetur adipisicing elit. '
                icon=''
            />
            <Line/>

            <Benefit
                name='CARDIO & DANÇA' 
                content='orem ipsum dolor sit amet, consectetur adipisicing elit. '
                icon=''
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
const Benefit = ({icon, name, content}) => {
    return(
        <div className={style.benefit}>
            {icon}
            <h4>{name}</h4>
            <span>{content}</span>
        </div>

    )
}
