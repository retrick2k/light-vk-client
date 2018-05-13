export interface IWallPost {
    id: number;
    date: string;
    post_type: string;
    owner_id: number;
    from_id: number;
    created_by: number;
    text: string;
    comments: IComment;
    likes: ILike;
    reposts: IRepost;
    views: IView;
}

export enum PostTypes {
    Post = 'post',
    Copy = 'copy',
    Reply = 'reply',
    Postpone = 'postpone',
    Suggest = 'suggest'
}

export interface IComment {
    count: number;
}

export interface ILike {
    count: number;
    user_likes: number;    
}

export interface IRepost {
    count: number;
}

export interface IView {
    count: number;
}