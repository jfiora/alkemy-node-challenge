import sgMail from "@sendgrid/mail";

export const mailService = async (email, subject, text) => {
    try {
        sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
        const message = {
            to: email,
            from: process.env.SEND_GRID_EMAIL_FROM,
            subject: subject,
            text: text,
        };
        await sgMail.send(message);
    } catch (error) {
        throw new Error(error);
    }
}