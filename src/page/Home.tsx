
import { Blog, Comments, Products, Story } from '../container';
import { Hero } from '../components/Hero';
import { useScrollTo } from '../hooks/useScroll';




export const Home = () => {
   
useScrollTo();
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
