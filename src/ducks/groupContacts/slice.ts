import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupContactsSlice = createApi({
  reducerPath: 'groupContacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/groupContacts' }),
  endpoints: (builder) => ({
    getGroupContacts: builder.query<GroupContactsDto[], void>({
      query: () => '/',
    }),
  }),
})
