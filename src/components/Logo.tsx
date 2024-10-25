import { PiPottedPlantFill } from "react-icons/pi"
import { Link } from "react-router-dom"


export const Logo = () => {
    return (
        <div >
            <h1 className={''}>
                <Link to="/admin">
                    {/* <img className={``} src="./LogoVerde.png" alt="logo" /> */}
                    <PiPottedPlantFill size={62} />
                </Link>
            </h1>
        </div>
    )
}
