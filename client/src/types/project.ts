export interface ContactForm {
  	name: string;
  	email: string;
  	message: string;
}

export interface ApiResponse {
  	success?: boolean;
  	error?: string;
}