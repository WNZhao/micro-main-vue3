import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionsBase<_S, _Store> {
    persist?:
      | boolean
      | {
          key?: string
          storage?: Storage
          paths?: string[]
        }
  }
}
