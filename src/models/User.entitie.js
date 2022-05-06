const Appointment = require("./Appointment.entitie");
class User {

    constructor({
        idUser = null,
        name = null,
        lastName = null,
        age = null,
        phoneNumber = null,
        gender = null,
        email = null,
        password = null,
        role = null,
        // relations
        appointments = [],
    }) {
        this.idUser = idUser;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.role = role;
        this.appointments = (appointments.length > 0)
            ? appointments.map(appointment => new Appointment(appointment))
            : appointments;
    }

    getRol = () => this.rol;

}

module.exports = User;