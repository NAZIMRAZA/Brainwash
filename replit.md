# Replit.md

## Overview

This is a full-stack TypeScript web application built with React frontend, Express backend, and PostgreSQL database using Drizzle ORM. The application appears to be an IQ test game with a sophisticated scoring system and modern UI components. The architecture follows a monorepo structure with shared code between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and custom Vite integration

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Migration System**: Drizzle Kit for schema migrations
- **Type Safety**: Full TypeScript integration with Drizzle's type inference

## Key Components

### Game System
- **Multi-screen Flow**: Loading → Start → Game → Results
- **Question Management**: 100-question dataset with hidden scoring patterns
- **Scoring Algorithm**: Complex validation system with "backdoor" logic for specific answer patterns
- **Performance Analytics**: Real-time IQ calculation and percentile ranking

### Authentication & Storage
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: CRUD operations for user accounts
- **Session Handling**: PostgreSQL-backed session management

### UI Components
- **Design System**: Comprehensive component library with dark/light theme support
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure ARIA compliance
- **Interactive Elements**: Progress bars, cards, buttons, dialogs, and form controls

## Data Flow

### Game Flow
1. **Initialization**: Loading screen with game setup
2. **User Interaction**: Question presentation with multiple choice options
3. **Answer Processing**: Complex scoring logic with pattern recognition
4. **Results Calculation**: IQ score computation and performance analysis
5. **Data Persistence**: User progress and scores stored in database

### API Communication
- **RESTful Design**: Express routes prefixed with `/api`
- **Type Safety**: Shared TypeScript types between client and server
- **Error Handling**: Centralized error middleware with proper status codes
- **Request Logging**: Custom middleware for API request/response logging

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL for production data storage
- **UI Framework**: Radix UI for accessible component primitives
- **Validation**: Zod for runtime type validation and schema definition
- **Build Tools**: Vite for fast development and optimized production builds

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **Type Checking**: TypeScript with strict mode enabled
- **Code Quality**: ESM modules with modern JavaScript features

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with Express API proxy
- **File Watching**: tsx for server-side TypeScript execution
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Static assets built to `dist/public` directory
- **Backend**: Server bundle created with esbuild for Node.js execution
- **Static Serving**: Express serves built frontend assets in production

### Database Management
- **Migrations**: Drizzle Kit push/pull commands for schema updates
- **Connection Pooling**: Neon serverless for automatic scaling
- **Type Generation**: Automatic TypeScript types from database schema

The application demonstrates a well-structured full-stack TypeScript application with modern tooling, comprehensive UI components, and a sophisticated game logic system. The codebase is organized for maintainability with clear separation of concerns between frontend, backend, and shared code.