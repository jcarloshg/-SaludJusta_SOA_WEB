import { USER_ROLE } from "../../../utilities/USER_ROLE";
import createAdaptedUser from "../login/adapters/user.adapter";
import { existAccount } from "./services";
import { loggin } from "./services/loggin";


export const useLogin = () => {

    const iniciarSesion_proof = async () => {

        const emailExample = "richie@email.com";
        const passwordExample = "richie123";

        const resExistAccount = await existAccount(emailExample);

        // * ================================
        // ! go to create new user
        // * ================================
        if (resExistAccount.data === null) {
            // TODO - show error 
            return;
        }

        const resLoggin = await loggin(emailExample, passwordExample);
        const employe = resExistAccount ? createAdaptedUser(resLoggin.data) : null;

        if (employe.role === USER_ROLE.RECEPTIONIST) console.log(employe.role);
        if (employe.role === USER_ROLE.LAB_TECHNICIAN) console.log(employe.role);

    }

    return {
        iniciarSesion_proof
    }

}