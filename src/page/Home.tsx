
import { Blog, Comments, Products, Story } from '../container';
import { Hero } from '../components/Hero';




export const Home = () => {
   

    return (
        <>                   
                <Hero />
                <Products />
                <Story />
                <Comments />
                <Blog />
           
        </>

    )
}
