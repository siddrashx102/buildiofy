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

const sendContactNotification = async (data: any) => {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log("Email not configured, skipping email notification");
    return false;
  }

  const emailContent = `
    Buildiofy Query Submission:
    
    Name: ${data.name}
    Email: ${data.email}
    Company: ${data.company || 'Not provided'}
    Phone: ${data.phone || 'Not provided'}
    
    Project Details:
    ${data.project}
    
    Budget: ${data.budget || 'Not specified'}
    Timeline: ${data.timeline || 'Not specified'}
    
    Services Interested In: ${data.services.length > 0 ? data.services.join(', ') : 'None specified'}
    How they heard about us: ${data.hearAbout || 'Not specified'}
    Newsletter subscription: ${data.newsletter ? 'Yes' : 'No'}
    
    Please respond to this inquiry promptly.
  `;

  try {
    const fromEmail = process.env.EMAIL_USER!;
    await transporter.sendMail({
      from: fromEmail,
      to: [fromEmail, "siddrashid1998@outlook.com"], // Send to both emails
      subject: "Buildiofy Query Submission",
      text: emailContent,
      replyTo: data.email
    });
    
    console.log("Contact notification email sent successfully");
    return true;
  } catch (error) {
    console.error("Failed to send email notification:", error);
    return false;
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      console.log("Contact form submission:", validatedData);
      
      // Send email notification
      const emailSent = await sendContactNotification(validatedData);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: emailSent 
          ? "Contact form submitted successfully! We'll get back to you soon." 
          : "Contact form submitted successfully! (Email notification pending configuration)"
      });
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
