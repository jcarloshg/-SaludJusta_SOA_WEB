import { existAccount } from "./services";



export const useLogin = () => {

    const iniciarSesion_proof = () => {
        existAccount();
    }

    return {
        iniciarSesion_proof
    }

}