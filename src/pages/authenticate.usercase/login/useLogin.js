import { USER_ROLE } from "../../../utilities/USER_ROLE";
import createAdaptedUser from "../login/adapters/user.adapter";
import { existAccount } from "./services";
import { loggin } from "./services/loggin";
import { useNavigate } from "react-router-dom"
import { useState } from "react";


export const useLogin = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('sdf');
    const [password, setPassword] = useState('sdf');

    const onChangeEmail = (value) => {
        const newEmail = value.nativeEvent.target.value;
        setEmail(newEmail);
    };

    const onChangePassword = (value) => {
        const newPassword = value.nativeEvent.target.value;
        setPassword(newPassword);
    };

    const iniciarSesion_proof = async () => {
        const emailExample = "richie@email.com";
        const passwordExample = "richie123";

        const resExistAccount = await existAccount(emailExample);

        if (resExistAccount.isOk === false) {
            console.log("resExistAccount - show error");
            return;
        }

        const resLoggin = await loggin(emailExample, passwordExample);

        console.log(resLoggin);
        if (resLoggin.isOk === false) {
            console.log("resLoggin - show error");
            return;
        }

        const employe = resExistAccount ? createAdaptedUser(resLoggin.data) : null;

        if (employe.role === USER_ROLE.RECEPTIONIST) navigate('HomeAppointments');
        if (employe.role === USER_ROLE.LAB_TECHNICIAN) navigate('HomeExam');

    }

    return {
        iniciarSesion_proof,
        email, onChangeEmail,
        password, onChangePassword,
    }

}