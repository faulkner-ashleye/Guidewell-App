# Guidewell App

An AI-powered product design guide application built with Next.js and Supabase.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project credentials from Settings > API
3. Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 3. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `database/schema.sql`
4. Run the SQL to create the database schema

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
├── lib/
│   ├── supabase.ts          # Supabase client configuration
│   └── supabase-client.ts   # Browser client for SSR
├── types/
│   └── database.ts          # TypeScript types for database
├── database/
│   └── schema.sql           # Database schema and migrations
└── supabase-config.md       # Detailed Supabase configuration guide
```

## Features

- User authentication and profiles
- Project management
- Step-by-step design guidance
- Progress tracking
- Resource library
- Row Level Security (RLS) policies

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Styling**: (To be added)
- **Deployment**: (To be added)

## Development

The project uses TypeScript for type safety and includes comprehensive database types in `types/database.ts`. The Supabase client is configured for both client-side and server-side operations with proper authentication handling.
