import React, { useEffect, useState } from "react";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { card } from "../../services/http/endpoints/card";
import AddCommentForm from "../forms/AddCommentForm";
import CommentDetailList from "../lists/CommentDetailList/List/List"


const Comment = () => {
  const { state } = useKanbanContext();
  const [comments, setComments] = useState<StateCommentType>([]);
  const dispatches: ContextCommentType = {
    addComment: (comment: any) => {
      setComments((prev) => (
         [...prev, comment]
      ));
    },
   
    deleteComment: (commentId: number) => {
      setComments((prev) => prev.filter((comment:CommentDetail)=>{
        return comment.id !== commentId 
      }))
    }
  };
 
  useEffect(() => {
    card.getById(state.cardId).then((data) => {
        console.log('data', data)
    setComments(data.data.comments);
    });
  }, [state.cardId]);
  return (
    <div style={{ marginTop: "10vh" }}>
      <AddCommentForm dispatches={dispatches} cardId={state.cardId}/>
      <CommentDetailList dispatches={dispatches} commentdetails={comments}  />
      
    </div>
  );
};

export default Comment;
