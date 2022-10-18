export type CreateBoardMemberRequestPayload = {

	username: string,
	boardId: number,

};

export type CreateBoardMemberResponseType = {
	data: {
	username: string,
	boardId: number,
	}
};