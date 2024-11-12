import { CardBlog } from "../components"


import style from '../style/home.module.css'


const blogComment = [
  {
    img:'/plantasCocina.webp',
    titulo:'Plantas aromáticas para tu cocina',
    subtitulo:'Un pequeño huerto de hierbas aromáticas puede transformar tu cocina. Las plantas como albahaca, tomillo y romero no solo son fáciles de cultivar, sino que también añaden sabor fresco a tus platillos favoritos.'
  },
  {
    img:'/cespedBlog.webp',
    titulo: 'Secretos para un césped perfecto',
    subtitulo:'Mantener un césped verde y saludable no tiene que ser complicado. La clave está en la frecuencia del riego, el corte regular y la elección del momento adecuado para fertilizar'
  },
  {
    img:'/espacios.jpeg',
    titulo:'Jardinería en espacios pequeños',
    subtitulo:'¿Poco espacio? No hay problema. Con macetas verticales y plantas adecuadas, puedes crear un hermoso jardín incluso en un balcón. Las suculentas y hierbas son perfectas para comenzar.'
  }
]



export const  Blog = () => {
  return (
    <section className={style.blogs}>
    {
          blogComment.map((blog, index) => (
            <CardBlog key={index} img={blog.img} titulo={blog.titulo} subtitulo={blog.subtitulo} />
          ))
        }
    </section>
)
}
