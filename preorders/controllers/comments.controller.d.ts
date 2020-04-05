import { CommentService } from '../services/comment.service';
import { CreateCommentDTO } from '../input-dto';
import { Response } from 'express';
export declare class CommentsController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDTO: CreateCommentDTO, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    findById(id: string, res: Response): Promise<void>;
}
