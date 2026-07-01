# Installation process

## Step 1: Create a React + Vite Project
```
npm create vite@latest my-app
```

## Step 2: Install Tailwind CSS

```
npm install tailwindcss @tailwindcss/vite
```

## Step 3: Configure Vite
```
vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

```

## Step 4: Import Tailwind
css
```
@import "tailwindcss";
```

## Step 6: Test Tailwind
```
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <h1 className="text-5xl font-bold text-cyan-400">
        React + Vite + Tailwind CSS v4
      </h1>
    </div>
  )
}

export default App

```

## Step 7: Run the Project
```
npm run dev
```

Local: http://localhost:5173


# Recommended Folder Structure
```
src/
│
├── assets/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│
├── layouts/
│   └── MainLayout.jsx
│
├── hooks/
│
├── context/
│
├── services/
│
├── utils/
│
├── App.jsx
├── main.jsx
└── index.css

```

## Install Common Packages
For most React projects, you'll often add:
<b>React Router</b> 

```
npm install react-router-dom
npm install axios
npm install react-icons
npm install framer-motion
npm install react-hook-form
npm install react-hot-toast
npm install @tanstack/react-query

```
