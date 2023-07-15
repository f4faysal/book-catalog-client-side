import { api } from "../../api/apiSlice";


const bookApi = api.injectEndpoints({
     endpoints: (builder) => ({
          getBooks: builder.query({
               query: ({ pag, limit, searchTerm }) => `/book/?pag=${pag}&limit=${limit}&searchTerm=${searchTerm}`,
          }),
          getFilterBooks: builder.query({
               query: ({ genre, publicationDate }) => `/book/?genre=${genre}&publicationDate=${publicationDate}`,
          }),
          singleBook: builder.query({
               query: (id) => `/book/${id}`,
          }),
          postComment: builder.mutation({
               query: ({ id, data }) => ({
                    url: `/comment/${id}`,
                    method: 'POST',
                    body: data,
               }),
               invalidatesTags: ['comments'],
          }),
          getComment: builder.query({
               query: (id) => `/comment/${id}`,
               providesTags: ['comments'],
          }),
     }),
});

export const {
     useGetBooksQuery,
     useSingleBookQuery,
     usePostCommentMutation,
     useGetCommentQuery,
     useGetFilterBooksQuery,
} = bookApi;
