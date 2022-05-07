import { Spacer } from '@nextui-org/react'
import { Dropdown, GoBackButton, Subtitle } from '../../../components'
import * as Input from './components'
import useCreateCustomer from './hooks/useCreateCustomer'

function CreateCustomer({ visible = false, closeHandler = () => null }) {
  const {
    user,
    onChangeName,
    onChangeLastName,
    onChangeAge,
    onChangeGender,
    onChangeEmail,
    onChangePhone,
    onPreviusStep,
    goToNextStep,
    onSaveCustomer,
    onOpenPopoverChange,
  } = useCreateCustomer(closeHandler)

  return (
    <Input.ModalCreateCustomer
      open={visible}
      onClose={closeHandler}
      labelButton={user.step === 0 ? 'Siguiente' : 'Guardar'}
      onClick={user.step === 0 ? goToNextStep : onSaveCustomer}
      openPopover={user.popover}
      onOpenChange={onOpenPopoverChange}
      loading={false}
    >
      {user.step === 0 ? (
        <>
          <Subtitle>1. Datos personales</Subtitle>
          <Spacer y={0.1} />
          <Input.InputModal label="Nombre(s)" value={user.name} onChange={onChangeName} />
          <Input.InputName value={user.lastName} onChange={onChangeLastName} />
          <Dropdown
            label="Sexo"
            options={user.options}
            value={user.gender}
            onChange={onChangeGender}
          />
          <Input.InputAge value={user.age} onChange={onChangeAge} />
        </>
      ) : (
        <>
          <GoBackButton onClick={onPreviusStep} />
          <Subtitle>2. Datos de contacto</Subtitle>
          <Spacer y={0.1} />
          <Input.InputEmail email={user.email} setEmail={onChangeEmail} />
          <Spacer y={0.1} />
          <Input.InputPhone phone={user.phoneNumber} setPhone={onChangePhone} />
          <Spacer y={0.1} />
        </>
      )}
    </Input.ModalCreateCustomer>
  )
}

export default CreateCustomer
