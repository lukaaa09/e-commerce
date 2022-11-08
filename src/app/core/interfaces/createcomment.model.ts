import { IloggedUser } from "./logged-user-interface";

export interface ICreateComment{
    body: string,
    username: string,
    id: number,
    userId: number,
}