import { CardBlog } from "../components"


import style from '../style/home.module.css'

export const  Blog = () => {
  return (
    <section className={style.blogs}>
        <CardBlog />
        <CardBlog />
        <CardBlog />
    </section>
)
}
