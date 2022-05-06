function validatePhone(phone = '') {
  return phone.match(/^\+?\d{10,}$/g);
}

export default validatePhone;
