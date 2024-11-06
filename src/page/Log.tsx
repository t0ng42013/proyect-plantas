import Login from "../components/account/login/Login";
import { Register } from "../components/account/register/Register";
import { useAppSelector } from "../hooks/hooks";

const Log = () => {
    const log = useAppSelector(state => state.user.log);

    return (
        log ? <Login /> : <Register />
    )
}
export default Log