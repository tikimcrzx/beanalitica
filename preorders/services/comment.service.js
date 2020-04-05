"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CommentService = class CommentService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async create(createCommentDTO) {
        const comment = new this.commentModel(createCommentDTO);
        const commentSaved = await comment.save();
        return commentSaved;
    }
    async update(id, updateCommentDTO) {
        const commentUpdated = await this.commentModel.findById(id);
        commentUpdated.comment = updateCommentDTO.comment;
        commentUpdated.save();
        return commentUpdated;
    }
    async findAll() {
        const comments = await this.commentModel.find();
        return comments;
    }
    async findById(id) {
        const comment = await this.commentModel.findById(id);
        return comment;
    }
    async delete(id) {
        const commentDeleted = await this.commentModel.findById(id);
        commentDeleted.remove();
        return commentDeleted;
    }
};
CommentService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Comments')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map