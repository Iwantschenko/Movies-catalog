# 🎬 Movies Catalog

A single-page React + TypeScript application for managing a catalog of movies.  
You can add, delete, search, and view detailed information about movies.  
The app supports importing movie data from a `.txt` file and is fully containerized with Docker.

---

## 🚀 Features

- 📃 View list of movies with sorting and pagination  
- 🔍 Search movies by title or actor  
- ➕ Add and ❌ delete movies  
- 📁 Import movies via `.txt` file  
- 💻 Built with Vite + React + TypeScript  
- 📦 Dockerized frontend served by Nginx  

---

## 🔗 Demo

📦 DockerHub: [https://hub.docker.com/r/iwantschenko/movies](https://hub.docker.com/r/iwantschenko/movies)

📄 Example file: [`sample_movies.txt`]([https://drive.google.com/drive/u/0/home](https://drive.google.com/file/d/11MleDhIwjyIt4vc6AWN7G8oE8NIo4Nsw/view?usp=sharing))
---

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Iwantschenko/Movies-catalog.git
cd Movies-catalog
```

### 2. Run Locally (Development)

```bash
npm install
npm start
```


## 🐳 Build and Run with Docker

### 1. Build Docker Image

```bash
docker build -t movies-catalog .
```

### 2. Run from Docker Hub

```bash
docker run --rm \
  -p 8080:80 \
  -e VITE_API_URL=http://host.docker.internal:8000/api/v1 \
  iwantschenko/movies:latest
```

> The app will be available at [http://localhost:8080](http://localhost:8080)

---

## ⚙️ Environment Variables

| Variable         | Description                                          |
|------------------|------------------------------------------------------|
| `VITE_API_URL`   | Full backend URL the frontend connects to (e.g. `http://host.docker.internal:8000/api/v1`) |


## 🪪 License

[MIT](./LICENSE)
