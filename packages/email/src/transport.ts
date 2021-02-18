import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
	port: 1025,
	ignoreTLS: true,
});
