export type IBook = {
     _id?: string;
     user?: string;
     title: string;
     author: string;
     genre?: string;
     publicationDate: string;
     reviews: Array<string>;
};

export interface LoginFormInputs {
     search: string;
     email: string;
     password: string;
}
