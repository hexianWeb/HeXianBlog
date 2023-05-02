import request from '@/service';
import { LoginInfo, UserInfo } from '@/stores/modules/login/type';
import { LogOutInfo } from './type';

enum LoginAPI {
  loginUrl = '/login',
  authUrl = '/getinfo',
  LogOutUrl = '/logout'
}

export function adminLogin(params: any) {
  return request.instance<LoginInfo>({
    url: LoginAPI.loginUrl,
    data: params,
    method: 'GET'
  });
}

export function adminAuth() {
  return request.instance<UserInfo>({
    url: LoginAPI.authUrl
  });
}

export function adminLogOut() {
  return request.post<LogOutInfo>({
    url: LoginAPI.LogOutUrl
  });
}
