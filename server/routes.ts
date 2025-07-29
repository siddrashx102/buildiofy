import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  project: z.string().min(1, "Project details are required"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  services: z.array(z.string()).default([]),
  hearAbout: z.string().optional(),
  newsletter: z.boolean().default(false),
});

// Email configuration
const createTransporter = () => {
  // Check if email credentials are available
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn("Email credentials not configured. Contact form will only log to console.");
    return null;
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // App password for Gmail
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Professional HTML email template for admin notification
const createAdminEmailHTML = (data: any) => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Buildiofy Inquiry</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 16px; }
            .content { padding: 30px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
            .info-item { background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
            .info-item strong { color: #667eea; display: block; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .info-item span { font-size: 16px; color: #333; }
            .project-details { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0; }
            .project-details h3 { margin: 0 0 10px 0; color: #856404; }
            .services-list { background: #d1ecf1; border: 1px solid #bee5eb; border-radius: 8px; padding: 15px; margin: 15px 0; }
            .services-list h4 { margin: 0 0 10px 0; color: #0c5460; }
            .services-tags { display: flex; flex-wrap: wrap; gap: 8px; }
            .service-tag { background: #17a2b8; color: white; padding: 5px 12px; border-radius: 20px; font-size: 13px; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #dee2e6; }
            .timestamp { color: #6c757d; font-size: 14px; margin-top: 15px; }
            .priority-high { background: #f8d7da; border-left-color: #dc3545; }
            .budget-highlight { background: #d4edda; border-left-color: #28a745; }
            @media (max-width: 600px) { .info-grid { grid-template-columns: 1fr; gap: 15px; } }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 New Project Inquiry</h1>
                <p>A potential client has submitted a project request</p>
            </div>
            
            <div class="content">
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Client Name</strong>
                        <span>${data.name}</span>
                    </div>
                    <div class="info-item">
                        <strong>Email Address</strong>
                        <span>${data.email}</span>
                    </div>
                    <div class="info-item">
                        <strong>Company</strong>
                        <span>${data.company || 'Not specified'}</span>
                    </div>
                    <div class="info-item">
                        <strong>Phone Number</strong>
                        <span>${data.phone || 'Not provided'}</span>
                    </div>
                    <div class="info-item budget-highlight">
                        <strong>Project Budget</strong>
                        <span>${data.budget || 'Not specified'}</span>
                    </div>
                    <div class="info-item ${data.timeline === 'asap' ? 'priority-high' : ''}">
                        <strong>Timeline</strong>
                        <span>${data.timeline || 'Not specified'}</span>
                    </div>
                </div>

                <div class="project-details">
                    <h3>📋 Project Details</h3>
                    <p>${data.project}</p>
                </div>

                ${data.services.length > 0 ? `
                <div class="services-list">
                    <h4>🛠️ Services Requested</h4>
                    <div class="services-tags">
                        ${data.services.map((service: string) => `<span class="service-tag">${service}</span>`).join('')}
                    </div>
                </div>
                ` : ''}

                <div class="info-grid">
                    <div class="info-item">
                        <strong>How They Found Us</strong>
                        <span>${data.hearAbout || 'Not specified'}</span>
                    </div>
                    <div class="info-item">
                        <strong>Newsletter Subscription</strong>
                        <span>${data.newsletter ? '✅ Yes' : '❌ No'}</span>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>Action Required:</strong> Please respond to this inquiry within 2-4 hours during business hours.</p>
                <p class="timestamp">Received on ${currentDate}</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Professional HTML email template for user confirmation
const createUserConfirmationHTML = (data: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry - Buildiofy</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 32px; font-weight: 700; }
            .header p { margin: 15px 0 0 0; opacity: 0.9; font-size: 18px; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 18px; margin-bottom: 25px; }
            .summary-box { background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
            .summary-box h3 { margin: 0 0 15px 0; color: #667eea; }
            .next-steps { background: #e8f5e8; border: 1px solid #d4edda; border-radius: 8px; padding: 20px; margin: 25px 0; }
            .next-steps h3 { margin: 0 0 15px 0; color: #28a745; }
            .next-steps ul { margin: 10px 0; padding-left: 20px; }
            .next-steps li { margin-bottom: 8px; }
            .contact-info { background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center; }
            .contact-info h3 { margin: 0 0 15px 0; color: #856404; }
            .footer { background: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #dee2e6; }
            .footer p { margin: 5px 0; color: #6c757d; }
            .highlight { color: #667eea; font-weight: 600; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✨ Thank You!</h1>
                <p>We've received your project inquiry</p>
            </div>
            
            <div class="content">
                <div class="greeting">
                    Hello <span class="highlight">${data.name}</span>,
                </div>
                
                <p>Thank you for reaching out to <strong>Buildiofy</strong>! We're excited about the possibility of working together on your project.</p>
                
                <div class="summary-box">
                    <h3>📋 Your Inquiry Summary</h3>
                    <p><strong>Project:</strong> ${data.project}</p>
                    <p><strong>Budget:</strong> ${data.budget || 'To be discussed'}</p>
                    <p><strong>Timeline:</strong> ${data.timeline || 'To be discussed'}</p>
                    ${data.services.length > 0 ? `<p><strong>Services:</strong> ${data.services.join(', ')}</p>` : ''}
                </div>

                <div class="next-steps">
                    <h3>🚀 What Happens Next?</h3>
                    <ul>
                        <li><strong>Review:</strong> Our team will carefully review your project requirements</li>
                        <li><strong>Analysis:</strong> We'll analyze the scope and technical approach needed</li>
                        <li><strong>Response:</strong> You'll hear back from us within <span class="highlight">24 hours</span></li>
                        <li><strong>Consultation:</strong> We'll schedule a call to discuss your project in detail</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h3>📞 Need Immediate Assistance?</h3>
                    <p>Feel free to reach out directly:</p>
                    <p><strong>Email:</strong> ${process.env.EMAIL_USER}</p>
                    <p><strong>Response Time:</strong> Within 2-4 hours during business hours</p>
                </div>

                <p>We appreciate your interest in working with Buildiofy, and we're looking forward to potentially bringing your vision to life with cutting-edge JavaScript solutions.</p>
                
                <p>Best regards,<br>
                <strong>The Buildiofy Team</strong></p>
            </div>
            
            <div class="footer">
                <p><strong>Buildiofy</strong> - Professional Web Development Services</p>
                <p>Specializing in scalable JavaScript solutions</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

const sendContactNotification = async (data: any) => {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log("Email not configured, skipping email notification");
    return false;
  }

  try {
    const fromEmail = process.env.EMAIL_USER!;
    
    // Send notification email to admin
    const adminEmailHTML = createAdminEmailHTML(data);
    await transporter.sendMail({
      from: `"Buildiofy Contact Form" <${fromEmail}>`,
      to: [fromEmail, "siddrashid1998@outlook.com"],
      subject: `🚀 New Project Inquiry from ${data.name} - ${data.budget || 'Budget TBD'}`,
      html: adminEmailHTML,
      replyTo: data.email
    });
    
    console.log("Admin notification email sent successfully");
    return true;
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
    return false;
  }
};

const sendUserConfirmation = async (data: any) => {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log("Email not configured, skipping user confirmation");
    return false;
  }

  try {
    const fromEmail = process.env.EMAIL_USER!;
    
    // Send confirmation email to user
    const userEmailHTML = createUserConfirmationHTML(data);
    await transporter.sendMail({
      from: `"Buildiofy Team" <${fromEmail}>`,
      to: data.email,
      subject: "✨ Thank you for your inquiry - We'll be in touch soon!",
      html: userEmailHTML,
      replyTo: fromEmail
    });
    
    console.log("User confirmation email sent successfully");
    return true;
  } catch (error) {
    console.error("Failed to send user confirmation email:", error);
    return false;
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      console.log("Contact form submission:", validatedData);
      
      // Send both admin notification and user confirmation emails
      console.log("Attempting to send both admin and user emails...");
      const [adminEmailSent, userEmailSent] = await Promise.all([
        sendContactNotification(validatedData),
        sendUserConfirmation(validatedData)
      ]);
      console.log(`Email results - Admin: ${adminEmailSent}, User: ${userEmailSent}`);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (adminEmailSent && userEmailSent) {
        res.json({ 
          success: true, 
          message: "Thank you! Your inquiry has been submitted successfully. You should receive a confirmation email shortly, and we'll get back to you within 24 hours."
        });
      } else if (adminEmailSent && !userEmailSent) {
        res.json({ 
          success: true, 
          message: "Your inquiry has been submitted successfully! We'll get back to you soon. (Note: Confirmation email may be delayed)"
        });
      } else if (!adminEmailSent && userEmailSent) {
        res.json({ 
          success: true, 
          message: "Thank you! Your inquiry has been submitted and you should receive a confirmation email shortly."
        });
      } else {
        res.json({ 
          success: true, 
          message: "Your inquiry has been submitted successfully! (Email notifications pending configuration)"
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !z.string().email().safeParse(email).success) {
        return res.status(400).json({ 
          success: false, 
          message: "Valid email is required" 
        });
      }
      
      // In a real application, you would integrate with email marketing services
      // like Mailchimp, ConvertKit, or SendGrid
      
      console.log("Newsletter subscription:", email);
      
      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter" 
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
