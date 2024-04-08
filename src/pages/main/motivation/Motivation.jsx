import style from './Motivation.module.css'

import img1 from '../../../img/trieno.jpg'
import img2 from '../../../img/menastetich.jpg'

export function Motivation() {
  return (
    <div className={style.motivation_content}>
        <div className={style.content_into}>
            <img src={img2} alt="" className={style.img} />

            <div  className={style.text}>
                <span >SEJA TODOS BEM VINDOS AO NOSSO ESPAÇO</span>
                <h1>DEDICADO A INICIAR SUA PAIXÃO PELA SAÚDE</h1>
                <span>Investir em sua saúde é o primeiro passo para uma vida plena. Dedique-se conosco a iniciar essa jornada apaixonante rumo ao bem-estar completo.</span>
            </div>
        </div>

        <div className={style.content_into}>
            <div  className={style.text2}>
                <span>ESPAÇO FITNESS</span>
                <h1>PEGUE DICAS IMPORTANTES NO ESPAÇO E SE TORNE UM EXPERT</h1>
                <span>Desbrave os caminhos da academia e transforme-se em um verdadeiro especialista, absorvendo os conhecimentos essenciais que impulsionarão sua jornada de fitness e superação pessoal</span>
            </div>

            <img src={img1} alt="" className={style.img2} />

        </div>
    </div>
  )
}
