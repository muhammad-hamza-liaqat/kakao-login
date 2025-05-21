# ![Create NodeJS Project Logo](https://raw.githubusercontent.com/nmicht/create-nodejs-project/master/assets/create-nodejs-project.png) Node.js Project Initializer

<!-- A boilerplate to kickstart your Node.js project with best practices. -->

---

## 🧰 Requirements

- **Node.js** >= 10.12.0  
- **npm** >= 6.5.0

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/muhammad-hamza-liaqat/kakao-login
cd kakao-login
```

### 2. Install Dependencies

```bash
npm install
```

> This will install all the required packages listed in `package.json`.

---

## ⚙️ Available Scripts

### Start the Server

```bash
npm start
```

Runs the application in production mode. Make sure environment variables are set before running.

### Run in Development Mode

```bash
npm run dev
```

Runs the server with hot-reloading using `nodemon`.

### Run Tests

```bash
npm test
```

Runs all unit and integration tests using your configured testing framework (e.g., Jest or Mocha).

---

## 🛠️ Project Structure

```text
.
├── node_modules/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/  
│   ├── middlewares/
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── README.md
```

- `src/` – Main application source code  
- `tests/` – Unit and integration tests  
- `.env` – Environment-specific variables  

---

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add your variables:

```
PORT=3000
KAKAO_CLIENT_ID=your_kakao_rest_api_key_here
KAKAO_REDIRECT_URI=your_kakao_redirect_uri_here

```

---

## 💡 Tips

- Use `npm run dev` during development to enable auto-restart with changes.
- Use `.env` for sensitive information.
- Follow the structure to keep the project clean and maintainable.

---

## 🧼 Linting and Formatting

You can add ESLint and Prettier for code quality. Example:

```bash
npm install eslint prettier --save-dev
```

Then configure `.eslintrc` and `.prettierrc`.

---

## 📦 Build for Production

If using TypeScript or bundling:

```bash
npm run build
```

Then run:

```bash
npm start
```

---

## 📄 License

This project is licensed under the MIT License.