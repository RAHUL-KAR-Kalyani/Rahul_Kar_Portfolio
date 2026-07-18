# Rahul Kar — Portfolio Website

Professional personal portfolio built with React and Vite (JavaScript). This repository contains the source code for a responsive, accessible, and theme-aware portfolio showcasing projects, skills, experience, education, and contact information.

## Features
- Responsive layout optimized for desktop and mobile
- Dark / light theme toggle
- Animated hero section
- Projects with GitHub and live-demo links
- Contact form (email integration ready)

## Tech Stack
- React
- Vite
- JavaScript (ESNext)
- CSS (custom variables and utility styles)

## Quick Start
Prerequisites: Node.js (>=14) and npm.

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
```

The optimized build will be placed in the `dist/` directory.

## Project Structure

```
src/
  App.jsx              # Root app with ThemeProvider
  main.jsx             # Entry point
  index.css            # Global styles + CSS variables
  components/
    Navbar.jsx         # Fixed navbar with dark/light toggle
    Hero.jsx           # Hero section with animated title
    About.jsx          # About section
    Skills.jsx         # Skills grid
    Experience.jsx     # Work experience timeline
    Education.jsx      # Education section
    Projects.jsx       # Projects with GitHub/Live links
    Contact.jsx         # Contact form
    Footer.jsx         # Footer
public/
  Rahul_Kar_Resume.pdf # Resume (replace with your latest resume)
```

## Customization
- Update project links in `src/components/Projects.jsx` (fields: `github`, `live`).
- Replace `public/Rahul_Kar_Resume.pdf` with your current resume.

## Contributing
Contributions are welcome. Please open an issue or submit a pull request for bug fixes and improvements.

## License
This project is provided under the MIT License. See LICENSE for details.

## Contact
Rahul Kar — (update with your preferred contact details)

For portfolio or project updates, modify the source files under `src/components` and rebuild.
  