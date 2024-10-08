import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;  // Token should be your Mailtrap API token
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;  // Endpoint should be your Mailtrap API endpoint URL

export const mailtrapClient = new MailtrapClient({
  endpoint: ENDPOINT,  // The endpoint should go here
  token: TOKEN,  // The token should go here
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Dan",
};
