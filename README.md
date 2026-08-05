# Corper Compass MVP

A modern web platform designed to help Nigerian corps members navigate their NYSC journey by providing essential resources, community-driven content and useful services in one place.

## Overview

Corper Compass aims to simplify the NYSC experience by offering:

- Guided onboarding
- Secure authentication
- Personalized "My Journey" dashboard
- Content creation and community posts
- Explore section with:
  - Culture Guide
  - Lodge Directory
  - Vendors marketplace
  - Map navigations
- User profiles and settings

## Tech Stack

- React
- JavaScript
- CSS
- Git & GitHub

## Project Structure

src/
├── api/
├── components/
│ ├──
│ ├── /
│ └── /
├── data/
├── features/
│ ├── onboarding/
│ ├── user dashboard/
│ ├── community & announcement/
│ ├── auth/
│ ├── myJourney/
│ ├── explore/
│ ├── budget tracker/
│ ├── cultural guide/
│ └── lodge directory/
│ └── map/
│ └── vendors/
│ ├── content post/
│ └── profile settings/
├── hooks/
├── pages/
App.jsx
index.css
main.jsx

````

## Getting Started

Clone the repository:

Navigate into the project:

Install dependencies:

```bash
npm install
````

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## Git Workflow

Do not commit directly to the `main` branch.

Create a feature branch for every task:

```bash
git checkout -b feature/feature-name
```

Examples:

- feature/onboarding
- feature/authentication
- feature/explore
- feature/profile

Commit your changes:

```bash
git add .
git commit -m "feat: implement onboarding flow"
```

Push your branch:

```bash
git push origin feature/feature-name
```

Open a Pull Request into the `develop` branch for review.

## Branch Strategy

- `main` — Production-ready code
- `develop` — Integration branch
- `feature/*` — New features
- `bugfix/*` — Bug fixes
- `hotfix/*` — Critical fixes

## Coding Standards

- Use Javascript.
- Follow the project's ESLint and Prettier configuration.
- Write reusable components.
- Keep components small and focused.
- Use meaningful commit messages.

## Contributors

Frontend Team

- Frontend Lead
- Frontend Developers

## License

This project is intended for educational and internal development purposes unless otherwise specified.
