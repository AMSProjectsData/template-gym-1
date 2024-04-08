import { useState } from 'react'
import style from './FAC.module.css'
import { MdExpandMore } from "react-icons/md";


export function FAQ() {
  return (
    <div className={style.FAQ_content}> 
        <div className={style.line}>
            <span className={style.span_styled}>FAQ</span>
        </div>
        <h1>PERGUNTAS FREQUENTES</h1>

        <Ask ask='Como funionam os planos?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
        <Ask ask='Quantos dias devo ir na semana?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
        <Ask ask='A academia abre as sabados?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
        <Ask ask='qual os horários?' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere porro pariatur nostrum, a veniam exercitationem consequuntur numquam fuga' />
    </div>
  )
}


const Ask = ({ask, content}) => {
    const [arrow, setArrow] = useState(false);

    const handlerAskMore = () => {
        console.log("foi");
        setArrow(!arrow);
    }
    return (
        <div className={style.FAQ_ask} onClick={handlerAskMore}>
            <span>{ask}</span>
            <MdExpandMore className={arrow ? style.rotateSvg : ''}/>
        
            <div className={style.FAQ_response}>
                {arrow ? 
                    <span>{content}</span> 
                    : ''    
                }
            </div>
            
        </div>

    )
}