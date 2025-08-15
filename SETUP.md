# Development Setup Guide

## 🚀 Quick Setup (5 minutes)

### 1. Prerequisites Check
\`\`\`bash
node --version  # Should be 18.17.0+
npm --version   # Should be 9.0.0+
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Start Development
\`\`\`bash
npm run dev
\`\`\`

### 4. Open Browser
Go to: http://localhost:3000

## 🔧 IDE Setup

### VS Code (Recommended)
The project includes VS Code settings for optimal development:

- **Extensions**: Auto-installed recommendations
- **Formatting**: Auto-format on save
- **TypeScript**: Enhanced IntelliSense
- **Tailwind**: CSS class suggestions

### WebStorm/IntelliJ
1. Open project folder
2. Enable TypeScript service
3. Install Tailwind CSS plugin
4. Configure Prettier for formatting

### Other IDEs
- Ensure TypeScript support is enabled
- Install Tailwind CSS language server
- Configure ESLint integration

## 📦 Package Manager Options

### npm (Default)
\`\`\`bash
npm install
npm run dev
\`\`\`

### Yarn
\`\`\`bash
yarn install
yarn dev
\`\`\`

### pnpm (Fastest)
\`\`\`bash
pnpm install
pnpm dev
\`\`\`

## 🐛 Common Setup Issues

### Port Already in Use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Node Version Issues
\`\`\`bash
# Using nvm
nvm install 18.17.0
nvm use 18.17.0

# Using n
n 18.17.0
\`\`\`

### Permission Errors (macOS/Linux)
\`\`\`bash
sudo chown -R $(whoami) ~/.npm
\`\`\`

### Windows Path Issues
\`\`\`bash
# Run as Administrator
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
\`\`\`

## 🎯 Development Workflow

### 1. Start Development Server
\`\`\`bash
npm run dev
\`\`\`

### 2. Make Changes
- Edit files in `app/` or `components/`
- Changes auto-reload in browser

### 3. Check Types
\`\`\`bash
npm run type-check
\`\`\`

### 4. Lint Code
\`\`\`bash
npm run lint
\`\`\`

### 5. Build for Production
\`\`\`bash
npm run build
npm run start
\`\`\`

## 🔍 Project Structure Explained

\`\`\`
cvibe-landingpage/
├── app/                 # Next.js 14 App Router
│   ├── page.tsx        # Homepage (/)
│   ├── layout.tsx      # Root layout
│   ├── globals.css     # Global styles
│   ├── community/      # Community pages
│   ├── events/         # Event pages
│   └── game/           # Game page
├── components/         # React components
│   ├── ui/            # shadcn/ui components
│   ├── button-3d.tsx  # Custom 3D button
│   ├── coin-3d.tsx    # 3D coin animation
│   └── game-3d.tsx    # Baseball game
├── public/            # Static files
├── types/             # TypeScript definitions
└── config files       # Next.js, Tailwind, etc.
\`\`\`

## 🎨 Styling System

### Tailwind CSS
- **Utility-first** CSS framework
- **Custom colors** for ocean theme
- **Responsive design** built-in
- **Dark mode** support ready

### Component Library
- **shadcn/ui** for base components
- **Radix UI** for accessibility
- **Custom components** for 3D effects

### Animations
- **CSS transitions** for smooth effects
- **Three.js** for 3D animations
- **GPU acceleration** for performance

## 🎮 Game Development

### Three.js Setup
- **Scene management** in game-3d.tsx
- **Physics simulation** for baseball
- **Collision detection** for scoring
- **Responsive canvas** sizing

### Game Features
- **3D characters** with animations
- **Coin rewards** system
- **Progressive difficulty**
- **Mobile touch** support

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Auto-deploy on push

### Netlify
1. Build: `npm run build`
2. Publish: `.next` folder
3. Configure redirects

### Self-hosted
1. Build: `npm run build`
2. Start: `npm run start`
3. Use PM2 for production

## 📱 Testing

### Local Testing
\`\`\`bash
# Development
npm run dev

# Production build
npm run build
npm run start
\`\`\`

### Browser Testing
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Responsive**: Test all breakpoints

### Performance Testing
- **Lighthouse** for performance scores
- **WebPageTest** for loading times
- **Chrome DevTools** for debugging

## 🔒 Security

### Environment Variables
- No sensitive data in client code
- Use `.env.local` for secrets
- Never commit API keys

### Content Security Policy
- Configured in next.config.mjs
- Prevents XSS attacks
- Allows necessary resources

## 📊 Monitoring

### Development
- **Console logs** for debugging
- **React DevTools** for component inspection
- **Network tab** for API calls

### Production
- **Vercel Analytics** for usage stats
- **Error boundaries** for crash handling
- **Performance monitoring** built-in

---

**Need help? Check the main README.md or create an issue!**
