import 'animate.css'

import { Buttons, Card } from '../components';

import style from '../style/home.module.css'
import '../index.css'
import { plantas } from '../data/plantas';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
const navigation = useNavigate();
  const handleNavigation = () => {
    navigation('/products');
  };


  return (
      <section className={style.newProduct}>
          <div className={style.newProductTitle}>
              <h2 className={`animate__animated animate__fadeInLeft`}>Plantas Nuevas</h2>
              <Buttons
               onClick={handleNavigation}
                className='animate__animated animate__fadeInLeft '
                txt='Comprar'
              />
              {/* <button className={`animate__animated animate__fadeInRight`}>Comprar</button> */}
          </div>
          <div className={style.newProductGrid}>
                {
                  plantas.slice(1,5).map(item =>(
                    <Card key={item.id} item={item}/>
                  ))
                }
                
          </div>

      </section>
  )
}
