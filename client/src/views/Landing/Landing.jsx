import React from "react";
import style from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import imgDog from "../img/Dog.png";




const landing = () => {


return (
<section>
  <div className={style.circle}></div>
    <div className={style.content}>
         <div className={style.textBox}>
            <h1>Best APP <span>Dogs</span> </h1>
            <h2>Meet your new <span>Best Friend</span> </h2> 
                    <Link to="/home"><button>Entrar</button></Link>
</div>
         <div className={style.imgBook}>
         <img src={imgDog} className={style.imgDogsLanding} alt='dogs' />
    </div>
 
     </div>
     </section>
 );

}


export default landing;