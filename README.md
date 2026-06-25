# Orchid Management System

## Project Description
This project is a Single-Page Application (SPA) developed for managing orchids. The application is built with a modern, user-friendly interface and is fully responsive across different devices (mobile, tablet, desktop).

**Key Features and Highlights:**
- Interactive user interface utilizing a Grid system and **Material UI (MUI)** components.
- Smooth navigation between pages (Home, About, Contact, etc.) using `react-router-dom`.
- UI state management with support for Dark/Light mode toggling, integrated via **React Context**.
- Excellent startup speed and performance optimization thanks to **Vite**.

**Tech Stack:**
- **Core:** React 19, Vite, JavaScript
- **Styling:** Material UI (MUI), Styled-components, CSS
- **Routing:** React Router v7

---

## Prerequisites
Ensure your machine has the following tools installed:
- [Node.js](https://nodejs.org/) (LTS version recommended).
- NPM (Usually pre-installed with Node.js) or Yarn.

---

## Installation

1. **Download the source code** or Clone this repository:
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd orchids-managing
   ```

3. **Install dependencies**:
   Open your terminal (CMD, PowerShell, or VS Code Terminal) and run:
   ```bash
   npm install
   ```

---

## Running the Project

### 1. Development Environment
After installing the dependencies, start the development server by running:
```bash
npm run dev
```
- Open your browser and go to the default URL: `http://localhost:5173` (or another port provided by Vite in the terminal).
- If there are any changes in the source code, the browser will automatically update (Hot Module Replacement).

### 2. Production Build
To build the project into static files ready for deployment on hosting platforms (like Vercel, Netlify, etc.), run:
```bash
npm run build
```
- A `dist` folder will be generated in the root directory, containing all optimized source code.

### 3. Preview Build
You can preview the application after building it by running:
```bash
npm run preview
```
