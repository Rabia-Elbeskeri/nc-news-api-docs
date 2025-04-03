# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



This project is the frontend documentation site for the NC News API, built with **React** and styled using **CSS**. It displays all 22 API endpoints grouped by section and includes a clean, mobile-first layout.

---

##  Completed Tasks (1–13)

## Setup & Structure
-  Created Vite React project
-  Planned file/folder structure 

## Navigation & Routing
-  Built `Navbar` with links to Home & API Reference
-  Implemented routing using `react-router-dom`

##  Components & Pages
- Created `EndpointCard` component with props;; method, path, description
-  Built `Home` and `API Reference` pages
-  Fetched and rendered all 22 endpoints from `endpoints.js`
-  Grouped endpoints by section using `.reduce()` logic
-  Styled each component/page with separate `.css` files

## Deployment (Task 13)
-  Ran `npm run build` to generate production files
-  Deployed frontend site to Netlify via GitHub
-  Verified live site & received “Deploy Success” confirmation



 Tech Stack
- React(Vite)
- react Router
- plain CSS
- Netlify

---

Live Site
[🔗 fabulous-choux-6677f0.netlify.app](https://fabulous-choux-6677f0.netlify.app)