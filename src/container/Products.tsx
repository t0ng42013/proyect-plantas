import 'animate.css'

import { Buttons, Card } from '../components';
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

import style from '../style/home.module.css'
import '../index.css'
import { useNavigate } from 'react-router-dom';
import { llegados } from '../utils/RecLlegados';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/data/productSlice';

export const Products = () => {

  const { data } = useAppSelector(state => state.products);
  const dispath = useAppDispatch();

  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation('/products');
  };
  useEffect(() => {
    dispath(fetchProducts())
  }, [dispath])

  return (
    <section className={style.newProduct}>
      <div className={style.newProductTitle}>
        <h2 className={`animate__animated animate__fadeInLeft`}>Plantas Nuevas</h2>
        <Buttons
          onClick={handleNavigation}
          className='animate__animated animate__fadeInLeft '
          txt='Comprar'
        />
      </div>
      <div className={style.newProductGrid}>
        {

          llegados(data).map(item => (<Card key={item.id} item={item}/>))
        }

      </div>

    </section>
  )
}
