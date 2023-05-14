import { configureStore } from '@reduxjs/toolkit'
import { contactsPath, contactsReducer, contactsMiddleware } from './contacts'
import { groupContactsPath, groupContactsReducer, groupContactsMiddleware } from './groupContacts'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  [contactsPath]: contactsReducer,
  [groupContactsPath]: groupContactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([contactsMiddleware, groupContactsMiddleware])
  },
})

export type RootState = ReturnType<typeof rootReducer>
