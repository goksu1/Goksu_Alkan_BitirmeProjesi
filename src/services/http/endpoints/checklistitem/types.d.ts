export type CreateChecklistitemRequestPayload = {

	checklistId?:number,
	isChecked:boolean,
	title:string,
	items?:any,
	


};

export type CreateChecklistitemResponseType = {
	data: {
	checklistId:number,
	isChecked:boolean,
	title:string,
	items?:any,
	}
};