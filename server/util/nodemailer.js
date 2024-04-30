//import * as dotenv from 'dotenv'
import { createTransport } from "nodemailer"

//dotenv.config()

const transporter = createTransport({
    service: "gmail",
    auth: {
        user:"visualvault36@gmail.com",
        pass: "kumar@36"
    }
})
export { transporter }