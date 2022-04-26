import { EndpointUser, UserInfo } from '../models';

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
