import createAdaptedUser from "../login/adapters/user.adapter";
import { existAccount } from "./services";


export const useLogin = () => {

    const iniciarSesion_proof = async () => {

        const emailExample = "alejando@email.com";

        const resExistAccount = await existAccount(emailExample);
        const userClient = resExistAccount
            ? createAdaptedUser(resExistAccount.data)
            : null;

        console.log(`[userClient] -> `, userClient);

        // * ================================
        // ! go to create new user
        // * ================================
        if (userClient === null) {
            // TODO - show error 
            return;
        }

        // * ================================
        // ! go to the screens user
        // * ================================

    }

    return {
        iniciarSesion_proof
    }

}