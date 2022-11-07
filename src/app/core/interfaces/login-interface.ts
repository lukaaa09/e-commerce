import { IUserPayload } from "./register-interface";

export interface ILogin{
    accessToken: string
    user: IUserPayload
}