import { Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { MainButton, MainTitle } from '../../../components';
import { InputEmail, InputPassword } from './components';
import './Login.css';
import { useLogin } from './useLogin';

function Login() {

	const {
		iniciarSesion_proof,
		email, onChangeEmail,
		password, onChangePassword
	} = useLogin();

	return (
		<>
			{/* <Card css={{ width: 'fit-content' }}>
        <Card.Body >
          <Title>Iniciar sesión</Title>
          <Spacer y={2} />
          <InputEmail value={email} onChange={onChangeEmail} width={330} />
          <Spacer y={1} x={1} />
          <InputPassword value={password} onChange={onChangePassword} width={330} />
          <Spacer y={2} />
          <MainButton func={() => iniciarSesion_proof()} width={330} >Iniciar sesión</MainButton>
        </Card.Body>
      </Card> */}
			{/* <Topbar /> */}
			<main className="main">
				<div className="login-container">
					<MainTitle text="Iniciar sesión" />
					<Spacer y={1} />
					<InputEmail value={email} onChange={onChangeEmail} width={330} />
					<Spacer y={1} />
					<InputPassword value={password} onChange={onChangePassword} width={330} />
					<Spacer y={2} />
					<MainButton func={() => iniciarSesion_proof()} width={330}>Iniciar sesión</MainButton>
					{/* <Spacer y={0.8} />
          <SecondaryButton text="Olvide mi contraseña" /> */}
				</div>
			</main>
		</>
	);
}

export default Login;
