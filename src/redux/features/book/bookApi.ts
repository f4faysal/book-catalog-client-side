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
          deleteBook: builder.mutation({
               query: (id) => ({
                    url: `/book/${id}`,
                    method: 'DELETE',
               }),
          }),
          postReview: builder.mutation({
               query: ({ id, data }) => ({
                    url: `/book/review/${id}`,
                    method: 'POST',
                    body: data,
               }),
               invalidatesTags: ['reviews'],
          }),


          getReview: builder.query({
               query: (id) => `/book/review/${id}`,
               providesTags: ['reviews'],
          }),
     }),
});

export const {
     useGetBooksQuery,
     useSingleBookQuery,
     useGetReviewQuery,
     usePostReviewMutation,
     useGetFilterBooksQuery,
     useDeleteBookMutation

} = bookApi;
