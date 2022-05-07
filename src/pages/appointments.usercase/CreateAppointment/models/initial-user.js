import { generatePassword } from '../../../../utilities'

const initialUser = {
  name: '',
  lastName: '',
  age: 18,
  phoneNumber: '',
  gender: '',
  email: '',
  password: generatePassword(12),
  role: 'CLIENT',
  // form control
  step: 0,
  popover: false,
  options: [
    { value: 'MALE', label: 'Masculino' },
    { value: 'FEMALE', label: 'Femenino' },
  ],
}

export default initialUser
