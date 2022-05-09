import { createContext, useState } from 'react'
import { existAccount } from '../../CreateAppointment/services'

const AppointmentsContext = createContext()

const AppointmentsProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [currentScreen, setCurrentScreen] = useState('SearchCustomer')
  const [createCustomerVisible, setCreateCustomerVisible] = useState(false)
  const [infoVisible, setInfoVisible] = useState(false)
  const [infoMessage, setInfoMessage] = useState('Usuario creado correctamente')
  const [loading, setLoading] = useState(false)

  const onInfoHide = () => setInfoVisible(false)
  const onCreateCustomerHide = () => setCreateCustomerVisible(false)
  const goToSelectAppointment = () => setCurrentScreen('SelectAppointment')
  const onChangeEmail = e => setEmail(e.target.value)

  const goToSearchCustomer = () => {
    setEmail('')
    setCurrentScreen('SearchCustomer')
  }

  const onCreateCustomerShow = () => {
    setInfoVisible(false)
    setCreateCustomerVisible(true)
  }

  const onInfoShow = () => {
    setCreateCustomerVisible(false)
    setInfoVisible(true)
  }

  const onSearchCustomer = async () => {
    setLoading(true)

    if (email === '') {
      setInfoMessage('Por favor ingrese un correo electrónico')
      onInfoShow()
      setLoading(false)
      return
    }

    const res = await existAccount(email)

    if (res === null) {
      setInfoMessage('El correo electrónico no existe')
      onInfoShow()
      setEmail('')
      setLoading(false)
      return
    }

    setLoading(false)
    setCurrentScreen('SelectAppointment')
  }

  return (
    <AppointmentsContext.Provider
      value={{
        email,
        currentScreen,
        createCustomerVisible,
        infoVisible,
        infoMessage,
        loading,
        onChangeEmail,
        setInfoMessage,
        onCreateCustomerShow,
        onCreateCustomerHide,
        onInfoShow,
        onInfoHide,
        goToSearchCustomer,
        goToSelectAppointment,
        onSearchCustomer,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  )
}

export { AppointmentsContext, AppointmentsProvider }
