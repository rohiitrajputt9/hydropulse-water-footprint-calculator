const nodemailer = require("nodemailer");

// Create transport configuration
const isConfigured = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);

let transporter = null;
if (isConfigured) {
    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_PORT === "465", // true for 465, false for others
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    console.log("[EMAIL SERVICE] Active SMTP transporter configured successfully.");
} else {
    console.log("[EMAIL SERVICE] WARNING: EMAIL_USER and EMAIL_PASS not set. Operating in console fallback simulation mode.");
}

/**
 * Sends welcome email to a newly registered user.
 */
const sendWelcomeEmail = async (toEmail, fullName) => {
    const subject = "Welcome to HydroPulse! 💧";
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <div style="text-align: center; border-bottom: 2px solid #06b6d4; padding-bottom: 20px; margin-bottom: 20px;">
                <h1 style="color: #06b6d4; margin: 0; font-size: 28px;">HydroPulse</h1>
                <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Smart Water Intelligence Platform</p>
            </div>
            
            <div style="color: #334155; line-height: 1.6;">
                <h2 style="color: #1e293b; margin-top: 0;">Welcome aboard, ${fullName}!</h2>
                <p>Thank you for registering on <strong>HydroPulse</strong>. We are thrilled to have you join our community of sustainability analysts!</p>
                <p>With HydroPulse, you can now:</p>
                <ul style="padding-left: 20px; color: #475569;">
                    <li><strong>Track daily water usage</strong>: Log indoor and outdoor water activities dynamically.</li>
                    <li><strong>Monitor analytics</strong>: Get SQL-driven weekly and monthly breakdown statistics.</li>
                    <li><strong>Configure monthly goals</strong>: Set usage limits and get AI predictions on water conservation.</li>
                </ul>
                
                <p style="margin-top: 30px; text-align: center;">
                    <a href="https://hydropulse-client.vercel.app/" style="background-color: #06b6d4; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Launch Dashboard</a>
                </p>
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
                <p>© 2026 HydroPulse. All rights reserved.</p>
                <p>Intelligent water footprint tracking & conservation systems.</p>
            </div>
        </div>
    `;

    return sendMail(toEmail, subject, htmlContent);
};

/**
 * Sends confirmation email when a user exports their CSV logs.
 */
const sendCSVNotificationEmail = async (toEmail, fullName) => {
    const subject = "HydroPulse CSV Report Downloaded 📊";
    const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <div style="text-align: center; border-bottom: 2px solid #06b6d4; padding-bottom: 20px; margin-bottom: 20px;">
                <h1 style="color: #06b6d4; margin: 0; font-size: 28px;">HydroPulse</h1>
                <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Smart Water Intelligence Platform</p>
            </div>
            
            <div style="color: #334155; line-height: 1.6;">
                <h2 style="color: #1e293b; margin-top: 0;">Report Exported Successfully!</h2>
                <p>Hello ${fullName},</p>
                <p>This is a confirmation notification that your daily water usage log history has been successfully exported as a CSV spreadsheet report from your HydroPulse account.</p>
                <p>Analyzing water patterns is an excellent habit. Tracking your consumption history helps identify wastage nodes and ensures you stay well within your water conservation goals.</p>
                
                <div style="background-color: #f8fafc; border-left: 4px solid #06b6d4; padding: 15px; border-radius: 4px; margin: 20px 0;">
                    <p style="margin: 0; font-weight: bold; color: #0f172a;">File Type: CSV Document (.csv)</p>
                    <p style="margin: 5px 0 0 0; color: #475569; font-size: 14px;">Contains: Complete daily breakdown logs (shower minutes, dishwasher loads, cooking, drinking, outdoor gardening, and status flags).</p>
                </div>
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
                <p>© 2026 HydroPulse. All rights reserved.</p>
                <p>Developed with passion for sustainability.</p>
            </div>
        </div>
    `;

    return sendMail(toEmail, subject, htmlContent);
};

/**
 * Underlying helper function to deliver email or log in fallback simulation.
 */
const sendMail = async (toEmail, subject, htmlContent) => {
    if (isConfigured) {
        try {
            const mailOptions = {
                from: process.env.EMAIL_FROM || `"HydroPulse" <${process.env.EMAIL_USER}>`,
                to: toEmail,
                subject: subject,
                html: htmlContent
            };
            const info = await transporter.sendMail(mailOptions);
            console.log(`[EMAIL SERVICE] Email successfully sent to ${toEmail}. Message ID: ${info.messageId}`);
            return info;
        } catch (error) {
            console.error(`[EMAIL SERVICE] Failed to deliver email to ${toEmail}:`, error);
            throw error;
        }
    } else {
        // Fallback Simulation Logging
        console.log("=========================================");
        console.log(`[EMAIL SERVICE SIMULATION] Sending Email`);
        console.log(`To:      ${toEmail}`);
        console.log(`Subject: ${subject}`);
        console.log(`Body:    (HTML Content generated successfully)`);
        console.log("=========================================");
        return { simulated: true, to: toEmail, subject: subject };
    }
};

module.exports = {
    sendWelcomeEmail,
    sendCSVNotificationEmail
};
