export interface Input {
	name: string;
	label: string;
	errorMessage: string;
	validationRule: (i: string) => boolean;
	type?: string;
	disabled?: boolean;
}

export interface ChatItem {
	id: number;
	avatar?: string;
	title: string;
	created_by: number;
}

export interface ChatMessage {
	content: string;
	time: string;
    type: string;
    user_id: number;
    chat_id: number;
}
