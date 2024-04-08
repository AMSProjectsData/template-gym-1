import style from './Localization.module.css'
import { Map } from './Map'
 
export function Localization() {
  return (
    <div className={style.localization_content}>
        <Map/>
        <div className={style.localization_data}>
            <span className={style.span_styled}>LOCALIZAÇÃO</span>
            <h1>ONDE NOS ENCONTRAR</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>

            <div className={style.localization_info}>
                <h3>Academia SPARTA</h3>
                <span>1234, Tv Minervina Afonso de Barros, Jaderlândia</span>
                <span>Castanhal, 68740-970</span>
                <span>(xx) 9xxxx-xxxx</span>
            </div>
        </div>
    </div>
  )
}


