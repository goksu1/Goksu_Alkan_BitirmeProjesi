export type CreateChecklistRequestPayload = {
	cardId:number,
	title: string,
	items?:any,
	
	
	

};

export type CreateChecklistResponseType = {
	data: {
	cardId:number,
	title: string,
	items:any,

	}
	
};