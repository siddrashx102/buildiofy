# Buildiofy - Professional Web Development Agency

A high-conversion Next.js agency website showcasing professional web design services with enhanced user experience and comprehensive digital solutions.

## Features

- 🚀 Modern React/TypeScript architecture
- 💅 Tailwind CSS + Shadcn/UI components
- 📧 Professional email system with HTML templates
- 📱 Fully responsive design
- ⚡ Fast loading with optimized performance
- 🎨 Beautiful animations with Framer Motion
- 📋 Advanced contact form with validation
- 🔒 Secure email handling with Nodemailer

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Build Tool**: Vite
- **Email**: Nodemailer with Gmail SMTP
- **UI Components**: Shadcn/UI + Radix UI
- **Forms**: React Hook Form + Zod validation

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your Gmail credentials to .env
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
NODE_ENV=production
```

## Deployment

### Option 1: Replit (Recommended)
- Click the Deploy button in your Replit workspace
- Your environment variables are automatically configured
- SSL and custom domains included

### Option 2: Render
1. Connect your GitHub repository to Render
2. Use the provided `render.yaml` configuration
3. Add environment variables in Render dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password

### Option 3: Docker
```bash
docker build -t buildiofy .
docker run -p 5000:5000 buildiofy
```

## Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── vite.ts           # Vite integration
├── shared/               # Shared schemas
└── dist/                # Production build

```

## Email System

The contact form sends two professional emails:
- **Admin notification**: Detailed inquiry with client information
- **User confirmation**: Professional thank you with next steps

Both emails use responsive HTML templates with professional styling.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking

## Contact

For questions about this project, please use the contact form on the website.