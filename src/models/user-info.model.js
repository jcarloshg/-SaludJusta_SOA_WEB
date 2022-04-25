class UserInfo {
  constructor({ idUser = null, name = null, lastName = null, phoneNumber = null, gender = null }) {
    this.idUser = idUser;
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
  }

  getRole() {
    return this.role;
  }
}

export default UserInfo;
