# Buildiofy Agency Website

## Overview

This is a modern agency website for Buildiofy, a full-stack JavaScript development agency. The project is built with React/TypeScript on the frontend and Express.js on the backend, designed to showcase services, portfolio, and capture client inquiries through a contact form.

## User Preferences

Preferred communication style: Simple, everyday language.
Target Market: Indian businesses and customers
Focus: Ready-made templates alongside custom development
Navigation: Home section added, clickable logo
Calendly: Integrated for appointment scheduling

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, professional UI components
- **Animation**: Framer Motion for smooth micro-interactions and page animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the application
- **API**: RESTful API design with form submission endpoint
- **Validation**: Zod schemas for request validation
- **Development**: Hot reloading with Vite integration

## Key Components

### UI Components (shadcn/ui)
The application uses a comprehensive set of pre-built UI components including:
- Navigation, buttons, cards, forms
- Toast notifications for user feedback
- Modal dialogs and responsive layouts
- Accordion, tabs, and interactive elements

### Page Sections
- **Hero Section**: Indian business-focused messaging with animated gradient background and floating tech icons
- **Services Section**: Four-column layout featuring Custom Development, Ready-Made Templates, Backend Services, and Digital Marketing
- **Portfolio Showcase**: Indian city-based projects (Mumbai, Bangalore, Delhi, Chennai, Pune, Hyderabad) with local market success stories
- **Testimonials**: Indian business owner testimonials with local market focus and trust badges
- **Blog Section**: Indian market-specific articles covering payment integration, multilingual support, and local SEO
- **Contact Form**: INR pricing, IST timing, and Indian contact details with Calendly integration

### Database Schema (Prepared for Future Use)
- User table with authentication fields (currently uses in-memory storage)
- Drizzle ORM configured for PostgreSQL with proper schema definitions

## Data Flow

1. **Client Interaction**: Users navigate through sections via smooth scrolling and form interactions
2. **Form Submission**: Contact forms are validated client-side with Zod schemas
3. **API Processing**: Express backend validates and processes contact submissions
4. **User Feedback**: Toast notifications provide immediate feedback to users
5. **State Management**: React Query handles API state and caching

## External Dependencies

### Core Libraries
- **UI Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI primitives
- **Animation**: Framer Motion for smooth transitions
- **Forms**: React Hook Form, Zod validation
- **HTTP Client**: Native fetch API with React Query

### Database & ORM
- **Database**: PostgreSQL (via Neon Database serverless)
- **ORM**: Drizzle ORM with TypeScript support
- **Migration**: Drizzle Kit for schema management

### Development Tools
- **Build Tool**: Vite with React plugin
- **Runtime**: tsx for TypeScript execution
- **Linting**: TypeScript compiler for type checking
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Assets**: Static files served from the build output

### Environment Configuration
- Development mode with hot reloading and error overlay
- Production build with optimized assets and bundling
- Environment variable support for database connections

### Hosting Considerations
- Designed for Node.js hosting platforms
- Static asset serving capability required
- PostgreSQL database connection needed for full functionality
- CORS and security headers configured for production use

### Performance Optimizations
- Lazy loading for images and components
- Code splitting with Vite
- Optimized bundle sizes
- Lighthouse score optimization target >90

The architecture prioritizes developer experience, performance, and maintainability while providing a professional agency website specifically designed for the Indian market, featuring local payment integrations, multilingual support, and culturally relevant content that effectively converts Indian visitors into clients.

## Recent Changes (January 2025)

### Indian Market Localization
✓ Updated hero section with "Digital Solutions for Indian Businesses" messaging
✓ Added "Home" navigation section with clickable logo
✓ Introduced Ready-Made Templates service for quick deployment
✓ Updated services to include Indian payment gateway integration (Razorpay, Paytm, UPI)
✓ Localized portfolio with Indian city-based success stories
✓ Updated testimonials with Indian business owners and local market references
✓ Modified pricing from USD to INR with template pricing options
✓ Added Indian contact details (+91 phone, .in domain, IST timing)
✓ Integrated Calendly scheduling with Hindi/English support availability
✓ Updated blog content to focus on Indian market needs (payment integration, multilingual support)
✓ Added WhatsApp integration for direct customer communication