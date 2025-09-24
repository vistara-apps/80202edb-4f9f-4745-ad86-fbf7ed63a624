# CustomFit AI - Base Mini App

Your AI-powered home fitness companion, adapting to you.

## Features

- **AI-Adaptive Workout Generation**: Personalized bodyweight workouts that adapt based on your progress
- **Clear Exercise Guidance**: High-quality demonstrations for every exercise
- **Performance Tracking & Gamification**: Track progress with streaks, badges, and achievements
- **Micro-Sessions & Home Focus**: Short, effective workouts designed for home environments

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Blockchain**: Base network integration via MiniKit
- **Identity**: Farcaster integration for social features
- **AI**: OpenAI integration for workout generation
- **TypeScript**: Full type safety throughout

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.local` and add your API keys:
   ```bash
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your-onchainkit-api-key
   OPENAI_API_KEY=your-openai-api-key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Base App**:
   Navigate to `http://localhost:3000` in Base App or compatible Farcaster client

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard
│   ├── providers.tsx      # MiniKit & OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # App header with user info
│   ├── WorkoutCard.tsx    # Current workout display
│   ├── ProgressStats.tsx  # Progress tracking
│   └── ...
├── lib/                   # Utilities and services
│   ├── types.ts           # TypeScript definitions
│   ├── utils.ts           # Helper functions
│   ├── constants.ts       # App constants
│   └── ai-service.ts      # AI workout generation
└── public/                # Static assets
```

## Key Components

### MiniKit Integration
- Farcaster identity and social features
- Base wallet integration for payments
- Frame actions for workout interactions

### AI Workout Generation
- Personalized workout plans based on user data
- Adaptive difficulty based on feedback
- Fallback to rule-based generation

### Progress Tracking
- Workout completion tracking
- Streak counting and achievements
- Performance analytics

## Design System

The app uses a custom design system built on Tailwind CSS with:
- Primary color: `hsl(220, 86%, 52%)` (blue)
- Accent color: `hsl(140, 79%, 50%)` (green)
- Consistent spacing, typography, and component patterns
- Mobile-first responsive design

## Deployment

The app is designed to be deployed as a Base Mini App:

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Deploy to your hosting platform**

3. **Configure Base App manifest** for discovery and features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
