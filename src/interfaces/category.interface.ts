

export interface ICategory {
    name:string,
    description?:string

}

export interface ICategoryResponse {
    name:string,
    description?:string;
    _id:string;
    createdAt:string;
    updatedAt:string
}