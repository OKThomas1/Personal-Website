import { json, error } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASSWORD } from "$env/static/private";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASSWORD
	}
});

export async function POST({ request }) {
	const body = await request.json();
	if (
		!body.name ||
		!body.email ||
		!body.message ||
		body.name.length > 35 ||
		body.email.length > 50 ||
		body.message.length > 2000
	) {
		throw error(400, { error: "Bad request" });
	}
	try {
		let mailOptions = {
			from: body.email,
			to: "thomas.buchholz111@gmail.com",
			subject: `New message from ${body.name}`,
			text: `${body.message}`
		};
		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
				throw error(500, { error: "Could not send email" });
			} else {
				console.log("Email sent: " + info.response);
				return json({ success: "Successfully sent email" });
			}
		});
	} catch (err) {
		console.error(err);
		throw error(500, { error: "Error sending email" });
	}
}
