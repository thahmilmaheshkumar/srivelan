import transporter from "../config/nodemailer.js";

function generateEmailTemplate({ name, email, contact, phone }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Enquiry - Sri Velan Surveying</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0a1628; font-family: 'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a1628; min-height: 100vh;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #0d1b2e, #1a2d4a); border-radius: 16px 16px 0 0; padding: 40px 30px; text-align: center; border-bottom: 3px solid #d4a843;">
                  <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                    <tr>
                      <td style="background: linear-gradient(135deg, #d4a843, #c41e3a); width: 60px; height: 60px; border-radius: 12px; text-align: center; vertical-align: middle; font-size: 24px; font-weight: bold; color: #0a1628;">
                        SV
                      </td>
                    </tr>
                  </table>
                  <h1 style="color: #ffffff; font-size: 24px; font-weight: 700; margin: 15px 0 5px; letter-spacing: 1px;">
                    SRI VELAN
                  </h1>
                  <p style="color: #d4a843; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 10px;">
                    DGPS &amp; Digital Land Surveying
                  </p>
                  <div style="width: 80px; height: 2px; background: linear-gradient(90deg, transparent, #d4a843, transparent); margin: 0 auto;"></div>
                </td>
              </tr>

              <!-- New Enquiry Badge -->
              <tr>
                <td style="background-color: #1a2d4a; padding: 20px 30px; text-align: center;">
                  <span style="display: inline-block; background-color: #c41e3a; color: #ffffff; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; padding: 6px 20px; border-radius: 20px;">
                    New Enquiry Received
                  </span>
                </td>
              </tr>

              <!-- Enquiry Details -->
              <tr>
                <td style="background-color: #0d1b2e; padding: 30px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden;">

                    <tr>
                      <td style="padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.05); width: 40%;">
                        <span style="color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</span>
                      </td>
                      <td style="padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${name}</span>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <span style="color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                      </td>
                      <td style="padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <a href="mailto:${email}" style="color: #d4a843; font-size: 15px; text-decoration: none;">${email}</a>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <span style="color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Contact</span>
                      </td>
                      <td style="padding: 20px 25px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                        <a href="tel:${contact}" style="color: #ffffff; font-size: 15px; text-decoration: none;">${contact}</a>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 20px 25px;">
                        <span style="color: rgba(255,255,255,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</span>
                      </td>
                      <td style="padding: 20px 25px;">
                        <a href="tel:${phone}" style="color: #ffffff; font-size: 15px; text-decoration: none;">${phone}</a>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>

              <!-- Call to Action -->
              <tr>
                <td style="background-color: #0d1b2e; padding: 10px 30px 30px; text-align: center;">
                  <a href="tel:${contact}" style="display: inline-block; background: linear-gradient(135deg, #d4a843, #e8c468); color: #0a1628; text-decoration: none; font-weight: 600; font-size: 14px; padding: 12px 32px; border-radius: 8px;">
                    Call Client Now
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: linear-gradient(135deg, #1a2d4a, #0d1b2e); border-radius: 0 0 16px 16px; padding: 25px 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
                  <p style="color: #d4a843; font-size: 12px; font-weight: 600; margin: 0 0 5px; letter-spacing: 1px;">
                    SRI VELAN CONSULTANCY
                  </p>
                  <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin: 0 0 3px;">
                    Satellite (DGPS) &amp; Digital Land Surveying
                  </p>
                  <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0 0 3px;">
                    23A KM Complex, Near Sub Registrar Office, Aval Poondurai - 638115
                  </p>
                  <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">
                    Phone: 9095520640 | 9488382277 | srivelanconsultancy@gmail.com
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

export async function handleEnquiry(req, res) {
  try {
    const { name, email, contact, phone } = req.body;

    if (!name || !email || !contact || !phone) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const mailOptions = {
      from: `"Sri Velan Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Enquiry from ${name} - Sri Velan Surveying`,
      html: generateEmailTemplate({ name, email, contact, phone }),
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Enquiry sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    return res
      .status(500)
      .json({ error: "Failed to send enquiry. Please try again." });
  }
}
