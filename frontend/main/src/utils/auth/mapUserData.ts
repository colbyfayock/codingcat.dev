import firebase from 'firebase/app';
import { getUserFromCookie, setUserCookie } from './userCookies';

interface ZaUser extends firebase.User {
  za?: string;
}

export const mapUserData = async (user: ZaUser): Promise<firebase.User> => {
  const { uid, email, za } = user;

  const userFromCookie = getUserFromCookie();

  if (userFromCookie && za === userFromCookie.token) {
    //Skip token call, already valid
    return ({
      uid,
      email,
      token: za,
    } as unknown) as firebase.User;
  }

  const token = await user.getIdToken(true);
  const cookie = ({
    uid,
    email,
    token,
  } as unknown) as firebase.User;
  setUserCookie(cookie);
  return cookie;
};
