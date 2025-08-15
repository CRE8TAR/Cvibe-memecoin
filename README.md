# CVIBE Token Landing Page

A modern, interactive landing page for the CVIBE meme token featuring 3D animations, community integration, and a baseball game.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd cvibe-landingpage
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

\`\`\`
cvibe-landingpage/
├── app/                    # Next.js App Router pages
│   ├── community/         # Community page
│   ├── events/           # Event pages
│   ├── game/             # Game page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── button-3d.tsx    # 3D button component
│   ├── coin-3d.tsx      # 3D coin animation
│   ├── game-3d.tsx      # Baseball game
│   └── ...              # Other components
├── public/              # Static assets
├── types/               # TypeScript type definitions
└── ...                  # Config files
\`\`\`

## 🎮 Features

### 🏠 Landing Page
- **Hero Section** with animated background
- **3D Coin Animation** that travels between sections
- **Community Integration** with social media links
- **How to Buy** section with wallet integration
- **Interactive Elements** with glassmorphism design

### 🎯 Baseball Game
- **3D Baseball Game** built with Three.js
- **CVIBE Coin Rewards** system
- **Moving Targets** at higher scores
- **Redemption System** with QR codes and wallet integration

### 👥 Community Pages
- **Social Media Integration** (Twitter, Telegram, Discord, Reddit)
- **Event Pages** for contests, AMAs, and trading discussions
- **Community Stats** and guidelines
- **Video Integration** for community content

### 🎨 Design Features
- **3D Buttons** with realistic shadows and animations
- **Glassmorphism Cards** with backdrop blur effects
- **Ocean Theme** with cyan/purple color scheme
- **Responsive Design** for all screen sizes
- **Smooth Animations** with GPU acceleration

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS Transitions + Three.js

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the server: `npm run start`
3. Deploy the `.next` folder and `package.json`

## 🎯 Key Pages

- **/** - Landing page with all sections
- **/community** - Community hub with social links
- **/game** - Interactive baseball game
- **/events/meme-contest** - Weekly meme contest
- **/events/ama** - Community AMA information
- **/events/trading** - Trading discussion details

## 🔍 Development Tips

### Running Locally
- The development server runs on `http://localhost:3000`
- Hot reload is enabled for instant updates
- TypeScript errors are shown in the terminal

### Common Issues
- **Port 3000 in use**: Use `npm run dev -- -p 3001` to use a different port
- **Node version**: Ensure you're using Node.js 18.17.0 or higher
- **Dependencies**: Run `npm install` if you encounter module errors

### Environment Variables
No environment variables are required for basic functionality. The app works out of the box.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
\`\`\`javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
\`\`\`

### 3D Elements
Modify Three.js components in:
- `components/coin-3d.tsx` - 3D coin animation
- `components/game-3d.tsx` - Baseball game
- `components/footer-coin-3d.tsx` - Footer coin

### Content
Update text content in:
- `app/page.tsx` - Landing page content
- `app/community/page.tsx` - Community page content
- Event pages in `app/events/`

## 🐛 Troubleshooting

### Build Errors
- Run `npm run type-check` to check TypeScript errors
- Run `npm run lint` to check ESLint issues

### Performance
- The app uses GPU acceleration for smooth animations
- Three.js components are optimized for performance
- Images are optimized with Next.js Image component

### Mobile Issues
- All components are responsive
- Touch events are supported for the game
- Reduced motion is respected for accessibility

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Made with ❤️ for the CVIBE community**
