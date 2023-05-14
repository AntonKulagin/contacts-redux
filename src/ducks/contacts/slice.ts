import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsSlice = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/contacts' }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query: () => '/',
      providesTags: ['contacts'],
    }),
    getContactById: builder.query<ContactDto, ContactDto['id'] | undefined>({
      query: (id) => `/${id}`,
      providesTags: ['contacts'],
    }),
    updateContact: builder.mutation<ContactDto, Partial<ContactDto>>({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
})
