# Real Estate Property Listing UI

This is a modern, responsive Real Estate Property Listing UI built using **React**, **Vite**, **Tailwind CSS**, and **React Router**. It also includes a custom **Dark Mode** using React Context and mock data served from a local JSON file.

## 🔗 Deployed Link

👉 [Live Demo](https://monumental-cobbler-1a76b5.netlify.app/)

## 📸 Screenshots

### Home Page Variations

| Default | Dark Mode |
|---------|-----------|
| ![Home](https://res.cloudinary.com/dy9gltg7s/image/upload/v1760206658/Screenshot_2025-10-11_234140_xnacfm.png) | ![Home Dark](https://res.cloudinary.com/dy9gltg7s/image/upload/v1760206729/Screenshot_2025-10-11_234226_qantaw.png) |

### Property Page

| Property |
|--------|
| ![Property](https://res.cloudinary.com/dy9gltg7s/image/upload/v1760206790/Screenshot_2025-10-11_234340_jz3mhn.png) |


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

---

## 💼 Author

**Ritesh Kumar Jena**  
Frontend Developer & MERN Stack Enthusiast 
- Email: jenariteshkumar85@gmail.com  
[GitHub](https://github.com/Ritesh-kumar-jena) | [LinkedIn](http://www.linkedin.com/in/ritesh-kumar-jena-aa6407270)

