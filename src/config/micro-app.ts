interface MicroAppConfig {
  name: string
  url: string
  iframe?: boolean
  disableRouter?: boolean
  ssr?: boolean
  scriptType?: string
  inline?: boolean
  destroy?: boolean
}

// 子应用配置
export const microAppConfig: Record<string, MicroAppConfig> = {
  home: {
    name: import.meta.env.VITE_CHILD_APP_HOME_NAME,
    url: import.meta.env.VITE_CHILD_APP_HOME_URL,
    iframe: true,
    disableRouter: true,
    ssr: true,
    scriptType: 'module',
    inline: true,
    destroy: true,
  },
  job: {
    name: import.meta.env.VITE_CHILD_APP_JOB_NAME,
    url: import.meta.env.VITE_CHILD_APP_JOB_URL,
    iframe: true,
    disableRouter: true,
  },
  enterprise: {
    name: import.meta.env.VITE_CHILD_APP_ENTERPRISE_NAME,
    url: import.meta.env.VITE_CHILD_APP_ENTERPRISE_URL,
    iframe: true,
    disableRouter: true,
  },
  about: {
    name: import.meta.env.VITE_CHILD_APP_ABOUT_NAME,
    url: import.meta.env.VITE_CHILD_APP_ABOUT_URL,
    iframe: true,
    disableRouter: true,
  },
}
