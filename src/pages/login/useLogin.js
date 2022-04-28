import { existAccount } from "./services";



export const useLogin = () => {

    const iniciarSesion_proof = async () => {
        await existAccount("alejando@email.com");
    }

    return {
        iniciarSesion_proof
    }

}