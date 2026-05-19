# ANTIFRAUD — Enterprise Fraud Management Dashboard

A high-performance, responsive Single Page Application (SPA) built for fraud analysts to monitor, investigate, and manage fraudulent transactions. This project was developed as a task for the Frontend Internship, focusing on modern tools like React, Redux Toolkit, and custom Webpack builds.

🚀 **Live Demo:** [Netlify](http://task5-antifraud.netlify.app)

---

## 📖 Functionality

The application provides a comprehensive toolkit for fraud management:
- **Fraudulent Activity Reports:** A Master-Detail view with infinite scrolling to monitor incoming alerts, risk scores, and transaction metadata.
- **Client Management:** A dynamic, sortable, and paginated table of customers integrated with the DummyJSON API.
- **Interactive Map:** ATM location tracking using Google Maps integration for transaction verification.
- **Responsive Navigation:** A multi-state sidebar (expanded/collapsed/mobile drawer) and responsive tab navigation for seamless use across desktop, tablet, and mobile devices.
- **Enterprise UI:** Built entirely with native SCSS (no UI libraries) to demonstrate deep CSS mastery, including complex flexbox/grid layouts and priority-shrink responsive logic.

---

## 🛠️ Tech Stack

### Core
- **React 19:** Functional components and hooks.
- **React Router 7:** Declarative routing for Login, Reports, and Transactions views.

### State Management & API
- **Redux Toolkit:** Global state management for UI states (sidebar, active alerts).
- **RTK Query:** Data fetching, automated caching, and response transformation from the **DummyJSON API**.

### Build Tooling
- **Webpack 5:** Custom configuration (no CRA) including:
  - `babel-loader` for JS/JSX.
  - `sass-loader`, `css-loader`, `style-loader`.
  - `file-loader` for SVG and image assets.
  - `webpack-dev-server` for optimized development.

### Styling
- **SASS (SCSS):** Structured using the **7-1 Pattern** (Variables, Mixins, Layouts).
- **Native CSS Grid & Flexbox:** Used for all layouts.

---

## 🏗️ Architecture

The project follows the **Feature-Sliced Design (FSD)** architectural methodology:
- `app/`: Global providers, styles, and store configuration.
- `pages/`: Composition of widgets to form full views (Login, Reports, Transactions).
- `widgets/`: Complex UI blocks (e.g., `AlertsList`, `ReportDetails`, `Sidebar`).
- `features/`: Interactive logic (e.g., `CustomerControls`).
- `entities/`: Business logic and data models (e.g., `AlertCard`, `CustomerTable`).
- `shared/`: Reusable UI components (buttons, inputs) and API definitions.

---

## 📦 Installation & Startup

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/sevasmith/antifraud.git

cd antifraud
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```


## 👥 Contact

Developer: Seva Kavalenka

Mentor: Nikita Mihnevich

Deadline: 2 weeks (Completed May 2026)