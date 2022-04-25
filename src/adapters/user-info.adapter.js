import EndpointUser from '../models/endpoint-user.model';
import UserInfo from '../models/user-info.model';

const defaultUser = new EndpointUser();

function createAdaptedUserInfo(endpointUser = defaultUser) {
  return new UserInfo(
    endpointUser.idUser,
    endpointUser.name,
    endpointUser.lastName,
    endpointUser.phoneNumber,
    endpointUser.gender
  );
}

export default createAdaptedUserInfo;
