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

// const mailOptions = {
//     from: "graphicalpassauth@gmail.com",
//     to: "autipratham1671@gmail.com",
//     subject: "Test Email",
//     text: "test"
// }

export { transporter }