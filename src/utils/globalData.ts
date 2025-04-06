/*
 * @Author: Walker zw37520@gmail.com
 * @Date: 2025-04-06 16:20:18
 * @LastEditors: Walker zw37520@gmail.com
 * @LastEditTime: 2025-04-06 16:29:53
 * @FilePath: /micro-main-vue3/src/utils/globalData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import microApp from '@micro-zoe/micro-app'

export interface GlobalData {
  token: string | null
  username: {
    username: string
  } | null
}

const STORAGE_KEY = 'user'

// 获取 globalData
export const getGlobalData = (): GlobalData | null => {
  // 优先从 localStorage 获取
  const storedData = localStorage.getItem(STORAGE_KEY)
  if (storedData) {
    return JSON.parse(storedData)
  }
  // 从 microApp 获取
  return microApp.getGlobalData() as GlobalData | null
}

// 设置 globalData
export const setGlobalData = (data: GlobalData | null) => {
  if (data) {
    // 保存到 localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    // 设置到 microApp
    microApp.setGlobalData(data)
  } else {
    // 清除数据
    localStorage.removeItem(STORAGE_KEY)
    microApp.setGlobalData(null)
  }
}

// 清除 globalData
export const clearGlobalData = () => {
  setGlobalData(null)
}
