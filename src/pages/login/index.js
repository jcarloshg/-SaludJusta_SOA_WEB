import { Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { MainButton, MainTitle, SecondaryButton } from '../../components';
import { InputEmail, InputPassword } from './components';
import './Login.css';
import { useLogin } from './useLogin';

function Login() {

  const {
    iniciarSesion_proof
  } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value) => {
    const newEmail = value.nativeEvent.target.value;
    setEmail(newEmail);
  };

  const onChangePassword = (value) => {
    const newPassword = value.nativeEvent.target.value;
    setPassword(newPassword);
  };

  return (
    <main className="main">
      <MainTitle text="Iniciar sesión" />
      <Spacer y={1.6} />
      <InputEmail value={email} onChange={onChangeEmail} />
      <Spacer y={1.6} />
      <InputPassword value={password} onChange={onChangePassword} />
      <Spacer y={1.6} />
      <MainButton func={iniciarSesion_proof}
        text="Iniciar sesión" />
      <Spacer y={0.8} />
      <SecondaryButton text="Olvide mi contraseña" />
    </main>
  );
}

export default Login;
