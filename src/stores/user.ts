import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string>('')
    const userInfo = ref<{
      id: number
      username: string
      role: string
    } | null>(null)

    const setToken = (newToken: string) => {
      token.value = newToken
    }

    const setUserInfo = (info: { id: number; username: string; role: string }) => {
      userInfo.value = info
    }

    const clearUserInfo = () => {
      token.value = ''
      userInfo.value = null
    }

    return {
      token,
      userInfo,
      setToken,
      setUserInfo,
      clearUserInfo,
    }
  },
  {
    persist: true,
  },
)
