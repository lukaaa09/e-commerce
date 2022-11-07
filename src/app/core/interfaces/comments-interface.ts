export interface IComment {
    id: number,
    body: string
    username: string,
    userId: number
    paerentId: string | null,
    createdAt: string,
}