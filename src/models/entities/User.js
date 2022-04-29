const Appointment = require("./Appointment");

class User {

    constructor({
        idUser = null,
        name = null,
        lastName = null,
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


    /**
     * check if any property is null, NOTE this method not check [id]
     * @returns
     */
    isPropertiesNull() {
        if (!this.name || !this.lastName || !this.phoneNumber || !this.gender || !this.email || !this.password || !this.role) {
            return true;
        }
        return false;
    }


    /**
     * check if any property is null, NOTE this method not check [id]
     * @returns
     */
    isPropertiesVoid() {
        if (this.name === "") return true;
        if (this.lastName === "") return true;
        if (this.phoneNumber === "") return true;
        if (this.gender === "") return true;
        if (this.email === "") return true;
        if (this.password === "") return true;
        if (this.role === "") return true;

        return false;
    }

}

module.exports = User;