import EndpointUser from '../models/endpoint-user.model';
import User from '../models/user.model';

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
