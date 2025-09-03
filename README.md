# AI vs Human: Murder Mystery Challenge

A bilingual (English/Spanish) murder mystery game where you test your detective skills against AI-generated stories.

## 🕵️ Game Description

This interactive web application challenges users to solve murder mysteries created by artificial intelligence. Each mystery includes:

- A detailed 200-word story with clues and red herrings
- Multiple suspects, weapons, and locations to choose from
- Dropdown selection interface for making accusations
- Instant solution reveal with AI explanation
- Fresh mysteries generated on each refresh

## 🎮 How to Play

1. Read the murder mystery story carefully
2. Look for clues about the perpetrator, weapon, and location
3. Select your answers from the dropdown menus
4. Submit your solution to see if you're correct
5. Review the AI's explanation of the solution
6. Try a new mystery for another challenge

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd murder-mystery-ai
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) in your browser

## 🌐 Features

- **Bilingual Support**: Switch between English and Spanish
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Random Story Generation**: Multiple murder mystery templates
- **Interactive UI**: Smooth animations and modern design
- **Instant Feedback**: Immediate solution reveal and scoring

## 🔧 Optional: Claude API Integration

For dynamic story generation using Claude API:

1. Copy `.env.example` to `.env.local`
2. Add your Claude API key to the environment file
3. Uncomment the Claude API code in `src/app/api/generate-mystery/route.ts`

Currently, the app uses pre-built mystery templates for demonstration.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/generate-mystery/    # API endpoint for mystery generation
│   ├── game/                    # Game page with mystery interface
│   ├── page.tsx                 # Bilingual home page
│   └── globals.css              # Global styles
└── components/                  # Reusable React components (if any)
```

## 🎨 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Claude API**: (Optional) For dynamic story generation

## 🌟 Game Features

- **Multiple Mystery Templates**: Victorian manor, modern art gallery, mountain lodge, and more
- **Randomized Elements**: Suspects, weapons, and locations are shuffled each game
- **Scoring System**: Instant feedback on correct/incorrect answers
- **Red Herrings**: False clues to increase difficulty
- **Detailed Explanations**: AI provides reasoning for the solution

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations
