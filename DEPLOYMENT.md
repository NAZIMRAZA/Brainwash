# Deploying BrainTrick Game to Vercel

This guide will help you deploy your BrainTrick game to Vercel.

## Prerequisites

1. Make sure you have a Vercel account (sign up at https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Make sure your project is in a Git repository

## Environment Variables

Before deploying, you'll need to set up your environment variables. You'll need:

1. **Database URL** - Your Neon database connection string
2. **Session Secret** - A random string for session management
3. **Any other environment variables** your app uses

## Deployment Steps

### 1. Build the Project Locally

First, make sure your project builds successfully:

```bash
npm install
npm run build
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI

1. Login to Vercel:
```bash
vercel login
```

2. Deploy your project:
```bash
vercel
```

3. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No
   - Project name: braintrick-game (or your preferred name)
   - Directory: ./ (current directory)
   - Override settings: No

#### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your Git repository
4. Configure the project settings:
   - Framework Preset: Node.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: dist
   - Install Command: `npm install`

### 3. Set Environment Variables

In your Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - `DATABASE_URL`: Your Neon database connection string
   - `SESSION_SECRET`: A random string for session management
   - `NODE_ENV`: production

### 4. Configure Build Settings

Make sure your build settings are correct:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 5. Deploy

Click "Deploy" and wait for the build to complete.

## Troubleshooting

### Common Issues

1. **Build Failures**: Check that all dependencies are in `package.json`
2. **Environment Variables**: Make sure all required env vars are set in Vercel
3. **Database Connection**: Ensure your Neon database is accessible from Vercel's servers

### Debugging

1. Check the build logs in Vercel dashboard
2. Use `vercel logs` to see runtime logs
3. Test your API endpoints using the Vercel URL

## Post-Deployment

1. Test your game at the provided Vercel URL
2. Set up a custom domain if desired
3. Configure automatic deployments from your Git repository

## File Structure for Vercel

Your project structure should look like this:

```
BrainTrickTest/
├── client/           # React frontend
├── server/           # Express backend
├── shared/           # Shared types/schemas
├── package.json      # Main package.json
├── vercel.json       # Vercel configuration
├── .vercelignore     # Files to ignore
└── vite.config.ts    # Vite configuration
```

## Notes

- Vercel will automatically detect your Node.js application
- The `vercel.json` file routes all requests to your Express server
- Your Express server handles both API routes and serves the static frontend
- Make sure your database (Neon) is accessible from Vercel's servers 