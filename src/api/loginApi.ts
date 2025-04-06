/*
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-06 11:28:45
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-06 15:12:47
 * @FilePath: /micro-main-vue3/src/api/loginApi.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/http'

// 登录 接口
// api/ucenter/login/accountLogin
// 登出接口
// api/ucenter/login/logout

interface LoginParams {
  account: string
  password: string
}

interface LoginResponse {
  code: number
  message: string
  data: {
    token: string
    user: {
      id: number
      username: string
      role: string
    }
  }
}

interface LogoutResponse {
  code: number
  message: string
}

export const accountLogin = (data: LoginParams): Promise<LoginResponse> => {
  return request({
    url: '/api/ucenter/login/accountLogin',
    method: 'post',
    data,
  })
}

export const logout = (): Promise<LogoutResponse> => {
  return request({
    url: '/api/ucenter/login/logout',
    method: 'post',
  })
}
