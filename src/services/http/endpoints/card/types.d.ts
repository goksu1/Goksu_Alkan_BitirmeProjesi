export type CreateCardRequestPayload = {

	title: string,
	listId: number,
	duedate?:number | Dayjs,
	
	// description: string,
	// duedate: string,
	

};

export type CreateCardResponseType = {
	data: {
	title: string,
	listId: number,
	description: string,
	duedate: string,
	cardId: number;
	
	}
};