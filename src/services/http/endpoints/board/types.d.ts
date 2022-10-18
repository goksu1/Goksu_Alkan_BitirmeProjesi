export type CreateBoardRequestPayload = {
	
	title: string;
	members: [];

};

export type CreateBoardResponseType = {

	data: {
		id: number;
		title: string;
		members: [];
	  };
  
	
  
};