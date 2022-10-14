import { isUserExist } from '../../src/middleware/isUserExist';
import Cookies from 'js-cookie';

describe('isUserExist', () => {
  it('should return user', async () => {
    jest.spyOn(Cookies, 'get').mockReturnValue('{"userData": "user"}');
    jest.spyOn(JSON, 'parse').mockReturnValue({ userData: 'user' });

    const user = isUserExist();

    expect(user).toEqual({ userData: 'user' });
    expect(Cookies.get).toHaveBeenCalledWith('user');
    expect(JSON.parse).toHaveBeenCalledWith(Cookies.get('user'));
  });
  it('should return undefined', async () => {
    jest.spyOn(Cookies, 'get').mockReturnValue(null);
    jest.spyOn(JSON, 'parse').mockReturnValue(null);

    const user = isUserExist();

    expect(user).toBeUndefined();
    expect(Cookies.get).toHaveBeenCalledWith('user');
    expect(JSON.parse).not.toHaveBeenCalled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
