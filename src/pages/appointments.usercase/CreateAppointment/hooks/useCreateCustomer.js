import { useInput } from '@nextui-org/react'
import { useState } from 'react'

function useCreateCustomer(closeHandler = () => null) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [genre, setGenre] = useState('')
  const [age, setAge] = useState(18)
  const [popover, setPopover] = useState(false)
  const { value: email, reset: resetEmail, bindings: emailBindings } = useInput('')
  const { value: phone, reset: resetPhone, bindings: phoneBindings } = useInput('')

  const onNext = () => setStep(step + 1)
  const onBack = () => setStep(step - 1)
  const onChangeName = (e) => setName(e.target.value)
  const onChangeLastName = (e) => setLastName(e.target.value)
  const onChangeGenre = (e) => setGenre(e.target.value)
  const onChangeAge = (e) => setAge(e.target.value)

  const goToNextStep = () => {
    if (name === '' || lastName === '' || age < 18) {
      setPopover(true)
      return
    }
    onNext()
  }

  const onSaveCustomer = () => {
    console.log('save customer', email)
    closeHandler()
  }

  const onOpenPopoverChange = () => {
    if (popover) setPopover(false)
  }

  return {
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
  }
}

export default useCreateCustomer
