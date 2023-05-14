import { groupContactsSlice } from './slice'

export const { useGetGroupContactsQuery } = groupContactsSlice

export const groupContactsPath = groupContactsSlice.reducerPath
export const groupContactsReducer = groupContactsSlice.reducer
export const groupContactsMiddleware = groupContactsSlice.middleware
