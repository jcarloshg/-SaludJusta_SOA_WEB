import { EndpointUser, User } from '../models';

const defaultUser = new EndpointUser();

function createAdaptedUser(endpointUser = defaultUser) {
  return new User(
    endpointUser.idUser,
    endpointUser.email,
    endpointUser.password,
    endpointUser.role
  );
}

export default createAdaptedUser;
