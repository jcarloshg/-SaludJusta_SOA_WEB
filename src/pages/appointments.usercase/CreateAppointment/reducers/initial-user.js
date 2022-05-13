import { generatePassword } from '../../../../utilities'

const initialUser = {
  name: '',
  lastName: '',
  age: 18,
  phoneNumber: '',
  gender: 'MALE',
  email: '',
  password: generatePassword(12),
  role: 'CLIENT',
  // form control
  step: 0,
  popover: false,
  isLoading: false,
  options: [
    { value: 'MALE', label: 'Masculino' },
    { value: 'FEMALE', label: 'Femenino' },
  ],
  message: 'No dejes campos vacíos',
}

export default initialUser
