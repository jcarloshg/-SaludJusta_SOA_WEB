import createAdaptedUser from "../login/adapters/user.adapter";
import { existAccount } from "./services";
import { loggin } from "./services/loggin";


export const useLogin = () => {

    const iniciarSesion_proof = async () => {

        const emailExample = "carlosj12336@gmail.com";
        const passwordExample = "jose123";

        const resExistAccount = await existAccount(emailExample);

        // * ================================
        // ! go to create new user
        // * ================================
        if (resExistAccount.data === null) {
            // TODO - show error 
            return;
        }

        const resLoggin = await loggin(emailExample, passwordExample);
        const userClient = resExistAccount ? createAdaptedUser(resLoggin.data) : null;

        console.log(`[userClient] -> `, userClient);


        // * ================================
        // ! go to the screens user
        // * ================================

    }

    return {
        iniciarSesion_proof
    }

}