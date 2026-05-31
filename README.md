🥗 NutriFit — Nutrition & Exercise App
A clean, responsive, mobile-first web app for tracking nutrition, logging meals, monitoring hydration, calculating BMI, and following exercise plans tailored to different fitness levels.
No frameworks. No build tools. No dependencies to install. Open index.html and it works.

✨ Features
PageWhat it does🥗 NutritionSearch 20+ foods, adjust serving size, view macros + 7 micronutrient bars📋 Meal LogLog foods from the nutrition page or add custom entries; daily calorie/protein/carb totals💧 Water8-glass hydration tracker with visual cups and motivational messages⚖️ BMIWeight + height + age + gender → BMI score, category, colour-coded scale, and advice🏃 Exercise6 profiles (Beginner, Intermediate, Advanced, Senior 60+, Kids 6–14, Prenatal) each with 7 exercises + a 7-day weekly plan

🗂️ Project Structure
nutrifit/
├── index.html          ← App shell and all page markup
├── README.md
├── css/
│   ├── tokens.css      ← Design tokens + dark mode variables
│   ├── layout.css      ← App shell, topbar, bottom nav, pages
│   ├── components.css  ← Shared: cards, buttons, inputs, pills, tips
│   ├── nutrition.css   ← Food grid, macro boxes, micro bars
│   ├── log.css         ← Meal log entries, daily summary
│   ├── water.css       ← Water cups visual, tracker
│   ├── bmi.css         ← BMI form, scale bar, result card
│   └── exercise.css    ← Profile tabs, exercise cards, weekly plan
└── js/
    ├── data.js         ← All foods, micros, profiles, exercises, weekly plans
    ├── theme.js        ← Dark / light mode toggle
    ├── nav.js          ← Bottom navigation page switching
    ├── nutrition.js    ← Food search, serving slider, nutrient panel
    ├── log.js          ← Meal log add / delete / totals
    ├── water.js        ← Water cup tracker
    ├── bmi.js          ← BMI calculation and result rendering
    ├── exercise.js     ← Profile tabs + exercise card rendering
    └── main.js         ← DOMContentLoaded initialiser

🚀 Getting Started (Local)
bash# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/nutrifit.git

# 2. Open the app — no server needed
cd nutrifit
open index.html        # macOS
# or double-click index.html in File Explorer (Windows/Linux)

Tip: For the best development experience, use the Live Server VS Code extension so the browser auto-reloads on save.


🌐 Deploy to GitHub Pages (free hosting)
Option A — GitHub UI (easiest)

Push this folder to a GitHub repository.
Go to Settings → Pages.
Under Branch, select main and folder /root.
Click Save.
Your app is live at https://YOUR_USERNAME.github.io/nutrifit/ in ~1 minute.

Option B — Command line
bash# Initialise git and push
git init
git add .
git commit -m "Initial commit — NutriFit app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nutrifit.git
git push -u origin main

# Then enable Pages in the repo Settings → Pages → Branch: main / root

🎨 Customisation
Adding a new food
Open js/data.js and add an entry to the FOODS array:
js{
  id: "mango", label: "Mango", icon: "🥭",
  cal: 60, pro: 0.8, fat: 0.4, carb: 15,
  fiber: 1.6, sugar: 13.7, sodium: 1, vit_c: 36.4, potassium: 168,
  iron: 0.2, calcium: 11
}
Changing colours
All colours are CSS custom properties in css/tokens.css. Change --green, --blue, etc. to retheme the whole app instantly.
Dark mode default
In js/theme.js, set let dark = true; and change the initial data-theme attribute on <html> in index.html to data-theme="dark".

📱 Browser Support
Works in all modern browsers: Chrome, Firefox, Safari, Edge. No polyfills needed.

📄 Licence
MIT — free to use, modify, and distribute.
