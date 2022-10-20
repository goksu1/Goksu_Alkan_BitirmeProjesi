type StateCommentType = CommentDetail[];
type CommentDetail = { id: number; message: string};
type ContextCommentType = {
  addComment: (comment: CommentDetail) => void;
  deleteComment:(commentId: number) => void;
};