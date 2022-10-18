type StateCommentType = CommentDetail[];
type CommentDetail = { id: number; message: string};
type ContextCommentType = {
  addComment: (comment: CommentDetail) => void;
  // updateComment: (id: number, title:string) => void;
  // selectComment: (listId: number) => void;
  deleteComment:(commentId: number) => void;
};