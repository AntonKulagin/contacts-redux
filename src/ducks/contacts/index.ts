import { contactsSlice } from './slice'

export const { useGetContactsQuery, useGetContactByIdQuery, useUpdateContactMutation } = contactsSlice

export const contactsPath = contactsSlice.reducerPath
export const contactsReducer = contactsSlice.reducer
export const contactsMiddleware = contactsSlice.middleware
