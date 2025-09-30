# Personal Academic Portfolio Website

This is the source code for the personal academic homepage of Jiaxi Yu, a prospective PhD student. The site is designed to showcase research, publications, and professional experience in a clean, modern, and responsive layout. It is built with React, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed with Vercel](https://img.shields.io/badge/Deployed_with-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

---

### ✨ Features

- **Modern Tech Stack**: Built with the fast and efficient Vite + React combination.
- **Responsive Design**: Fully responsive layout styled with Tailwind CSS, ensuring a great experience on all devices.
- **Easy Customization**: All personal data is centralized in a single `data` object within each component, making it simple to update.
- **Dark/Light Mode**: Includes a theme toggler for user preference.
- **SEO Friendly**: Contains a JSON-LD script for better search engine visibility.
- **Zero-Config Deployment**: Ready to be deployed on platforms like Vercel or Netlify.

---

### 🚀 Live Demo

**https://jiaxi-yu-navigation-page.vercel.app/**

---

### 🔧 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

#### Installation & Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JX-OctoNeko/JiaxiYu-Navigation_page.git
    cd JiaxiYu-Navigation_page
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

---

### 🛠️ Customization Guide

All the content of the website is managed within the `const data = { ... };` object at the top of the component files (`src/components/NormalCV.jsx` and `src/components/AcademicCV.jsx`).

1.  **Personal Information**: Edit the `name`, `tagline`, `email`, `location`, and social media links.

2.  **Avatar and Publication Images**:
    -   Place your avatar image (e.g., `avatar.jpg`) inside the `/public/images/` folder.
    -   Update the `avatar` field in the `data` object: `avatar: "/images/avatar.jpg"`.
    -   Place your publication images (e.g., `pub1.png`) in the same `/public/images/` folder and update the `image` field for each publication.

3.  **CV PDF File**:
    -   Place your PDF file (e.g., `Jiaxi_Yu_CV.pdf`) inside the `/public/cv/` folder.
    -   Update the `cvHref` field in the `data` object: `cvHref: "/cv/Jiaxi_Yu_CV.pdf"`.

4.  **Content Sections**: Modify the arrays for `researchInterests`, `education`, `publications`, `experience`, and `awards` to reflect your own information.


### 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
*(Note: You should create a `LICENSE` file in your project root and paste the MIT License text into it.)*