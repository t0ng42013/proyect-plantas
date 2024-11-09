import { PiPottedPlantFill } from "react-icons/pi"
import { Link } from "react-router-dom"


export const Logo = () => {
    return (
        <div >
            <h1 className={''}>
                <Link to="/">
                    <img style={{ width: 'clamp(120px, 4vw, 150px)', position:'absolute',translate:'-20% -20%',zIndex:'1'}} src="/logo3.webp" alt="logo" />
                    <PiPottedPlantFill size={62} />
                </Link>
            </h1>
        </div>
    )
}
