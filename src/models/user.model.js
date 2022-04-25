class User {
  constructor({ idUser = null, email = null, password = null, role = null }) {
    this.idUser = idUser;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

export default User;
