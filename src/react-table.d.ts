/* eslint-disable @typescript-eslint/no-unused-vars */
import '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    alignColumn?: 'center' | 'left' | 'right'
    classNameCell?: string
    classNameHeader?: string
  }
}
