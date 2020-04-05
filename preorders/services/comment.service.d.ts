import { Model } from 'mongoose';
import { Comment } from '../models/comment.model';
import { CreateCommentDTO } from '../input-dto';
export declare class CommentService {
    private readonly commentModel;
    constructor(commentModel: Model<Comment>);
    create(createCommentDTO: CreateCommentDTO): Promise<Comment>;
    update(id: string, updateCommentDTO: CreateCommentDTO): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findById(id: string): Promise<Comment>;
    delete(id: string): Promise<Comment>;
}
