
import User from "../models/User.entitie";

const defaultUser = new User({});

function createAdaptedUser(endpointUser = defaultUser) {

    return new User({
        idUser: endpointUser.idUser === undefined ? null : endpointUser.idUser,
        name: endpointUser.name,
        lastName: endpointUser.lastName,
        phoneNumber: endpointUser.phoneNumber,
        gender: endpointUser.gender,
        email: endpointUser.email,
        password: endpointUser.password,
        role: endpointUser.role,
        // relations
        appointments: endpointUser.appointments
    });
}

export default createAdaptedUser;