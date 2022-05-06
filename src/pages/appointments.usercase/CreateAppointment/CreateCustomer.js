import { Spacer } from '@nextui-org/react'
import { Dropdown, GoBackButton, Subtitle } from '../../../components'
import { InputEmail, InputModal, InputPhone, ModalCreateCustomer } from './components'
import useCreateCustomer from './hooks/useCreateCustomer'

function CreateCustomer({ visible = false, closeHandler = () => null }) {
  const {
    step,
    name,
    lastName,
    genre,
    age,
    email,
    phone,
    popover,
    onOpenPopoverChange,
    onBack,
    onChangeName,
    onChangeLastName,
    onChangeGenre,
    onChangeAge,
    goToNextStep,
    onSaveCustomer,
    resetEmail,
    resetPhone,
    emailBindings,
    phoneBindings,
  } = useCreateCustomer(closeHandler)

  return (
    <ModalCreateCustomer
      open={visible}
      onClose={closeHandler}
      labelButton={step === 0 ? 'Siguiente' : 'Guardar'}
      onClick={step === 0 ? goToNextStep : onSaveCustomer}
      openPopover={popover}
      onOpenChange={onOpenPopoverChange}
    >
      {step === 0 ? (
        <>
          <Subtitle>1. Datos personales</Subtitle>
          <Spacer y={0.1} />
          <InputModal label="Nombre(s)" value={name} onChange={onChangeName} />
          <InputModal label="Apellidos" value={lastName} onChange={onChangeLastName} />
          <Dropdown
            fullWidth
            label="Sexo"
            options={[
              { value: 'M', label: 'Masculino' },
              { value: 'F', label: 'Femenino' },
            ]}
            value={genre}
            onChange={onChangeGenre}
          />
          <InputModal label="Edad" value={age} onChange={onChangeAge} type="number" clearable={false} />
        </>
      ) : (
        <>
          <GoBackButton onClick={onBack} />
          <Subtitle>2. Datos de contacto</Subtitle>
          <Spacer y={0.1} />
          <InputEmail value={email} reset={resetEmail} bindings={emailBindings} />
          <Spacer y={0.1} />
          <InputPhone value={phone} reset={resetPhone} bindings={phoneBindings} />
          <Spacer y={0.1} />
        </>
      )}
    </ModalCreateCustomer>
  )
}

export default CreateCustomer
