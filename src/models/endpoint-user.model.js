class EndpointUser {
  constructor({
    idUser = null,
    name = null,
    lastName = null,
    phoneNumber = null,
    gender = null,
    email = null,
    password = null,
    role = null,
  }) {
    this.idUser = idUser;
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getRol = () => this.rol;
}

export default EndpointUser;
