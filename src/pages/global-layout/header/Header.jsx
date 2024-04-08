import { useState } from 'react';
import style from './Header.module.css'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



export function Header() {

   const [sandwichStyleToogle, setSandwichStyleToogle] = useState(null);

   const handlerToogleDisplay = () => {
    setSandwichStyleToogle(!sandwichStyleToogle)
    console.log("rodou");
   }


  return (
    <div className={style.header_out}>
        <div className={style.header_blur}></div>
        <header className={style.header_content}>

            <div className={style.header_logo}>
                <h1>Logo</h1>
            </div>


            <nav className={ sandwichStyleToogle ? `${style.nav_content} ${style.nav_content_in}`  : `${style.nav_content} ${style.nav_content_out}`}
            >
                <div>
                    <h1>HOME</h1>
                </div>
                <div>
                    <h1>SHOP</h1>
                </div>
                <div>
                    <h1>BLOG</h1>
                </div>
                <div>
                    <h1>
                        PLANOS
                    </h1>
                </div>
            </nav>

            <div  className={style.nav_sandwich}>
                <FaBars className={sandwichStyleToogle ? style.display_none :  style.sandwich_svg} onClick={handlerToogleDisplay} />
                <IoClose className={sandwichStyleToogle ?  style.close_svg : style.display_none}  onClick={handlerToogleDisplay}/>
            </div>
        </header>
    </div>
  )
}
