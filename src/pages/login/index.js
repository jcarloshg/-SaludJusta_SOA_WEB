import { Button, Input, Link, Spacer, Text } from '@nextui-org/react';
import './Login.css';

function Login() {
  return ( 
    <main className='main'>
      <Text h1 color='#028174'>Iniciar sesión</Text>
      <Spacer y={0.8} />
      <Input label="Correo" placeholder="correo@ejemplo.com" width='250px'/>
      <Spacer y={0.8} />
      <Input.Password label="Contraseña" placeholder="xxxxxxxxxxxx" width='250px' />
      <Spacer y={1.2} />
      <Button
        css={{
          borderRadius: '8px',
          backgroundColor: '#0AB68B',
          width: '250px',
        }}
      >
        Iniciar sesión
      </Button>
      <Spacer y={0.8} />
      <Button
        bordered={false}
        css={{
          borderRadius: '8px',
          color: '#0AB68B',
          border: '1px solid #FFFFFF',
          backgroundColor: '#fff',
          width: '250px',
        }}
      >
        Olvide mi contraseña
      </Button>
    </main>
  );
}

export default Login;