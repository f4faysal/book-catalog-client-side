export type IBook = {
     user?: string;
     title: string;
     author: string;
     genre?: string;
     publicationDate: string;
     reviews: Array<string>;
};

export interface LoginFormInputs {
     email: string;
     password: string;
}
