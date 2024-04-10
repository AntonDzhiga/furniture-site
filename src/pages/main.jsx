import React from 'react';
import style from "../style/main.module.css";
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import DataForm from '../components/DataForm';


const Main = () => {
  return (
    <>
      <div className={style.home_page_container}>
        <div className={style.main_banner_background}>
          <div className={style.main_banner}>
            <div className={style.main}>
              
                <span>Lorem ipsum dolor sit.</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                sed pharetra dictum neque massa congue
              </p>
              <div className={style.linkBtn}>
              <Link className={style.linkOn} to="/portfolio" >Галерея</Link>
              </div>
            </div>
            <div>
            <Carousel/>  
            </div>
            
          </div>
          
        </div>
        <div className={style.container_info}>
            <div className={style.first_container_info}>
              <div className={style.text_left}>За роки роботи в галузі ми обрали найкращі матеріали, фурнітуру та опорні конструкції, щоб ваші меблі були красивими, довговічними та функціональними.
              </div>
              <div className={style.image_right}>
                <img src="https://green-mebel.com.ua/wp-content/uploads/2022/01/izobrazhenie_viber_2022-01-20_19-31-42-668-768x1024.jpg" alt="" />  
              </div>
            </div>
            <div className={style.second_container_info}>
              <div className={style.image_left}>
                <img src="https://green-mebel.com.ua/wp-content/uploads/2021/08/1629119818372.jpg" alt="" />  
              </div>
              <div className={style.text_right}>Нестандартні проекти, складні механізми - наша таємна пристрасть. Ми не боїмося викликів. Просто розкажіть нам про свої побажання та очікування і ми в справі.
              </div>
            </div>
            <div className={style.third_container_info}>
              <div className={style.text_left}>Наша команда всіма силами намагається вкластися у зазначені в договорі терміни. Для нас це, як кодекс честі. Форс-мажорні обставини для нас - рідкісне явище.
              </div>
              <div className={style.image_right}> 
              <img src="https://green-mebel.com.ua/wp-content/uploads/2022/11/yzobrazhenye_viber_2022-10-12_20-45-07-329.jpg" alt="" /> 
              </div>
            </div>
          </div>

            <div>
              <DataForm/>
            </div>     

      </div>
    </>
  )
}

export default Main;
