import { Link } from "react-router-dom"


export const Logo = () => {
    return (
            <Link to="/">
        <picture>
                <source media="(max-width: 600px)" srcSet="/logoMobile.webp" type="image/webp" />
                <img width={150}  loading="eager"  style={{ width: 'clamp(50px, 9vw, 150px)',margin:'10px', zIndex: '1' }} src="/logo.webp" alt="logo" />
        </picture>
            </Link>


    )
}
