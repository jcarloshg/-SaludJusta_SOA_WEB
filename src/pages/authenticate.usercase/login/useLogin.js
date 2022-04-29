import { USER_ROLE } from "../../../utilities/USER_ROLE";
import createAdaptedUser from "../login/adapters/user.adapter";
import { existAccount } from "./services";
import { loggin } from "./services/loggin";
import { useNavigate } from "react-router-dom"


export const useLogin = () => {

    const navigate = useNavigate();

    const iniciarSesion_proof = async () => {

        const emailExample = "richie@email.com";
        const passwordExample = "richie123";

        const resExistAccount = await existAccount(emailExample);

        // TODO - show error
        if (resExistAccount.data === null) return;

        const resLoggin = await loggin(emailExample, passwordExample);
        const employe = resExistAccount ? createAdaptedUser(resLoggin.data) : null;

        if (employe.role === USER_ROLE.RECEPTIONIST) console.log(employe.role);
        if (employe.role === USER_ROLE.LAB_TECHNICIAN) navigate('HomeExam');

    }

    return {
        iniciarSesion_proof
    }

}