type StateCardType = Card[];
type Card = { id: number; title: string, duedate?:number, description:string };
type ContextCardType = {
  handleDragDrop:(destinationIndex:number, sourceIndex:number)=> void;
  addCard: (card: Card) => void;
  updateCard: (id: number, title:string) => void;
  selectCard: (cardId: number) => void;
  deleteCard:(cardId: number) => void;
};