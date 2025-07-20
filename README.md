# Real Estate Property Listing UI

This is a modern, responsive Real Estate Property Listing UI built using **React**, **Vite**, **Tailwind CSS**, and **React Router**. It also includes a custom **Dark Mode** using React Context and mock data served from a local JSON file.

> 👨‍💻 Developed by **Ritesh Kumar Jena**

## 🚀 Features

- 🔍 Browse list of 20 real estate properties
- 🏡 Property Detail Page
- 📷 Image carousel (static for now)
- 📍 Google Maps iframe integration
- 💡 Dark mode toggle
- ❤️ Add to Favorites
- 📋 Enquiry Form (popup)
- ❌ Custom 404 Not Found Page
- ⚡ Fast loading with Vite
- 🌐 Routing with React Router

## 🛠 Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Context API

## 📁 Folder Structure

```
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Property.jsx
│   │   ├── Favorites.jsx
│   │   └── NotFound.jsx
│   ├── data.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── README.md
├── tailwind.config.js
└── package.json
```

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/Ritesh-kumar-jena/Real-Estate-Property-Listing-UI.git
cd real-estate-ui

# Install dependencies
npm install

# Run the project
npm run dev
```

## 🌑 Toggle Dark Mode

A toggle button is included in the Navbar. It uses `ThemeContext` and Tailwind's `dark:` classes.

## 🗺 Google Maps

Each property includes an embedded Google Maps iframe based on location URL.

## 💌 Enquiry Form

On the property page, clicking **"Enquire Now"** opens a popup form (no backend, purely UI).

## 📃 Data Format (data.json)

```json
{
  "id": 1,
  "title": "Modern Family House",
  "image": "https://images.unsplash.com/photo-...",
  "price": 8500000,
  "description": "A beautiful house in the city.",
  "bhk": "3 BHK",
  "area": "1800 sqft",
  "amenities": ["Parking", "Gym", "Swimming Pool"],
  "map": "https://maps.google.com/..."
}
```

## 🔗 Deployed Link

👉 [Live Demo](https://regal-selkie-922f73.netlify.app/)

