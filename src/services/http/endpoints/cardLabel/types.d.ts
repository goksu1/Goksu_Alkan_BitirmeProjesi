export type CreateCardLabelRequestPayload = {
	cardId: number;
	labelId: number;
};

export type CreateCardLabelResponseType = {
  data: {
  cardId: number;
  labelId: number;
  }
};
