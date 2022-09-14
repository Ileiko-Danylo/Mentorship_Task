import Cookies from 'js-cookie';

export const isUserExist = () => {
  if (Cookies.get('user')) {
    return JSON.parse(Cookies.get('user'));
  }
};
