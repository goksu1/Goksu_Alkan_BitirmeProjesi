import React, { useEffect, useState } from "react";
import AddCardForm from "../../components/forms/AddCardForm";
import  List  from "../../components/lists/Card/List";
import { useKanbanContext } from "../../contexts/KanbanContext/KanbanContext";
import { card } from "../../services/http/endpoints/card";


const Card = () => {
  const { setCardId, state } = useKanbanContext();
  const [cards, setCards] = useState<StateCardType>([]);
  const dispatches: ContextCardType = {
    addCard: (card: any) => {
      setCards((prev) => (
         [...prev, card]
      ));
    },

    handleDragDrop: (destinationIndex:number, sourceIndex:number)=>{
      const cloneList=[...cards]
      const dragElement= cloneList[sourceIndex]
      cloneList.splice(sourceIndex,1)
      const newList=[...cloneList.slice(0,destinationIndex),dragElement, ...cloneList.splice(destinationIndex)]

setCards(newList)
    },
    updateCard: (id: number, title: string) => {
      setCards((prev) => (
         prev.map((crd) => ({
          ...crd,
          title: id === crd.id ? title : crd.title,
        }))
      ));
    },
    selectCard: (CardId: number) => {
      setCardId(CardId)
    },
    deleteCard: (cardId: number) => {
      setCards((prev) => prev.filter((card:Card)=>{
        return card.id !== cardId 
      }))
    }
  };
 
  useEffect(() => {
   card.get().then(({ data }) => {
      setCards((prev) => (data ));
    });
  }, []);

  return (
    <div style={{ marginTop: "10vh" }}>
      <AddCardForm dispatches={dispatches} listId={state.listId} />
      <List dispatches={dispatches} cards={cards}  />
     
    </div>
  );
};

export default Card;
