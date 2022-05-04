import { Spacer } from '@nextui-org/react';
import { useState } from 'react';
import { Dropdown, GoBackButton, Subtitle } from '../../../../components';
import InputModal from './input-modal.component';
import ModalCreateCustomer from './modal-create-customer.component';

const sexOptions = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Femenino' },
];

function CreateCustomer({ visible, closeHandler }) {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genre, setGenre] = useState('');
  const [age, setAge] = useState(18);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const onNext = () => setActiveStep(activeStep + 1);
  const onBack = () => setActiveStep(activeStep - 1);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeLastName = (e) => setLastName(e.target.value);
  const onChangeGenre = (e) => setGenre(e.target.value);
  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  const onSaveCustomer = () => {
    console.log('save customer');
    closeHandler();
  };

  return (
    <ModalCreateCustomer
      open={visible}
      onClose={closeHandler}
      labelButton={activeStep === 0 ? 'Siguiente' : 'Guardar'}
      onClick={activeStep === 0 ? onNext : onSaveCustomer}
    >
      {activeStep === 0 ? (
        <>
          <Subtitle>1. Datos personales</Subtitle>
          <Spacer y={0.1} />
          <InputModal label="Nombre(s)" value={name} onChange={onChangeName} />
          <InputModal label="Apellido(s)" value={lastName} onChange={onChangeLastName} />
          <Dropdown
            fullWidth
            label="Sexo"
            options={sexOptions}
            value={genre}
            onChange={onChangeGenre}
          />
          <InputModal
            label="Edad"
            value={age}
            onChange={onChangeAge}
            type="number"
            clearable={false}
          />
        </>
      ) : (
        <>
          <GoBackButton onClick={onBack} />
          <Subtitle>2. Datos de contacto</Subtitle>
          <Spacer y={0.1} />
          <InputModal label="Correo electrónico" value={email} onChange={onChangeEmail} />
          <InputModal label="Teléfono" value={phone} onChange={onChangePhone} />
          <Spacer y={0.1} />
        </>
      )}
    </ModalCreateCustomer>
  );
}

export default CreateCustomer;
