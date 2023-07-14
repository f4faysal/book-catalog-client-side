import { api } from "../../api/apiSlice";


const bookApi = api.injectEndpoints({
     endpoints: (builder) => ({
          getBooks: builder.query({
               query: ({ pag, limit }) => `/book?pag=${pag}&limit=${limit}`,
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
     useGetCommentQuery,
     useGetBooksQuery,
     usePostCommentMutation,
     useSingleBookQuery,
} = bookApi;
