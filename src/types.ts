export interface Input {
	name: string;
	label: string;
	errorMessage: string;
	validationRule: (i: string) => boolean;
	type?: string;
	disabled?: boolean;
}

export interface ChatItem {
	userName: string;
	avatar?: string;
	content: string;
	dateTime: string;
	unreadCounter: number;
}

export interface ChatMessage {
	content: string;
	image?: string;
	dateTime: string;
	type: string;
}
