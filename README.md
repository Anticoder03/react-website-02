# 🎬 Movie Search App (React)

A modern Movie Search App built using React that allows users to discover movies, view trending content, and explore top-rated films using a real-world API.

🔗 **Live Demo:** https://anticoder03-react-website-02.netlify.app/

---

## 🚀 Features

* 🔍 Search movies by name
* 📈 View trending movies (default on load)
* ⭐ Browse top-rated movies
* 🖼️ Display movie posters, titles, and release years
* ⚡ Fast and responsive UI
* 🎯 Handles missing data (like no poster)

---

## 🧠 What I Learned

This project helped me level up my React skills by working with:

* React Hooks (`useState`, `useEffect`)
* API integration using `fetch`
* Handling asynchronous data
* Managing loading and error states
* Component-based architecture
* Dynamic rendering using `.map()`

---

## 🧱 Project Structure

```id="a91k3c"
src/
 ├── components/
 │     ├── SearchBar.jsx
 │     ├── MovieList.jsx
 │     └── MovieCard.jsx
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ How It Works

* `App.jsx` manages the main state (movies, search term, loading)
* `SearchBar` takes user input and triggers search
* `MovieList` maps through movie data
* `MovieCard` displays individual movie details
* Data is fetched from an external API and rendered dynamically

---

## 🌐 API Used

This project uses the **TMDB API** to fetch movie data such as trending and top-rated films.

---

## 🛠️ Tech Stack

* React (Vite)
* JavaScript (ES6+)
* CSS

---

## ▶️ Getting Started

### 1. Clone the repository

```id="n7j2k1"
git clone https://github.com/Anticoder03/react-website-02.git
```

### 2. Navigate to the project

```id="z4l9p2"
cd react-website-02
```

### 3. Install dependencies

```id="v2x8m1"
npm install
```

### 4. Run the app

```id="k3f7r5"
npm run dev
```

---

## 🔑 Environment Setup

Create a `.env` file in the root and add your API key:

```id="d8s2k9"
VITE_TMDB_API_KEY=your_api_key_here
```

---

## 📌 Future Improvements

* 🎞️ Movie details page
* ❤️ Add to favorites
* 🔍 Advanced filtering (genre, rating)
* 🌙 Dark mode
* 📱 Better mobile responsiveness

---

## 🙌 Final Thoughts

This project is a step toward building real-world React applications. It focuses on working with APIs, managing state, and building scalable UI components.

---

## 👨‍💻 Author

Ashish Prajapati
GitHub: https://github.com/Anticoder03

---

⭐ If you like this project, consider giving it a star!
