# PLP Task Manager

A React application demonstrating:

- Task management (add, complete, delete, filter)
- Dark/light theme switcher using Tailwind CSS
- API data fetching with pagination and search
- Responsive design for mobile, tablet, and desktop
- Tailwind utility classes for layout, spacing, typography, and colors
- Animations and transitions for interactive elements

---

## **Demo**

![App Screenshot](./src/assets/website%20screenshot.jpeg)
![App Screenshot](./src/assets/WS.jpeg)

---

## **Technologies**

- React (v18+)
- Tailwind CSS
- JavaScript
- JSONPlaceholder API

---

## **Project Structure**
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component

---

## **Setup Instructions**

1. **Clone the repo**
git clone <repo-url>
cd <repo-folder>

2. **Install dependencies**

npm install

3. **Install Tailwind CSS**
npm install -D tailwindcss postcss autoprefixer
npm tailwindcss init -p

4. **Configure Tailwind**

In tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // enables class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
}

5. **Run the development server**
npm run dev


Open your browser at http://localhost:5173
 to view the app.

6. **Build for production**
npm run build


This generates an optimized dist/ folder for deployment.

#**Usage**

**Theme Toggle**

Click the toggle in the Navbar to switch between light and dark modes.

The theme affects the entire website.

**Task Manager**

Add tasks using the input box and "Add" button.

Mark tasks as complete/undo with the "Complete/Undo" button.

Delete tasks with the "Delete" button.

Filter tasks using "All", "Active", and "Completed" buttons.

**API Data**

Scroll through fetched data.

Use pagination and search to filter results.

**Deployment URL**
