# 🚀 Node.js Boilerplate with TypeScript, Clustering, and PM2

This **Node.js boilerplate** is a **production-ready** setup designed for **high-performance backend development** with **TypeScript**, **PM2 clustering**, **MongoDB (Mongoose)**, and **essential middleware**. It follows **best practices** for building scalable REST APIs and microservices.

---

## ✨ Features & Technologies

✅ **TypeScript** → Strong typing, better maintainability  
✅ **Express.js** → Fast and minimalist backend framework  
✅ **MongoDB with Mongoose** → Schema-based database modeling  
✅ **Clustering with PM2** → Multi-core utilization for high performance  
✅ **ESLint & Prettier** → Code linting & formatting for consistency  
✅ **Environment Variables** → `dotenv` support for config management  
✅ **Security Enhancements** → `helmet` & `express-rate-limit`  
✅ **JWT Authentication** → Secure user authentication  
✅ **Bcrypt for Password Hashing** → Secure password storage  
✅ **Morgan Logger** → Request logging for debugging  
✅ **Zod for Validation** → Type-safe API request validation  

---

## 🛠 Included NPM Scripts

| Command                | Purpose                                                 |
|------------------------|---------------------------------------------------------|
| **`npm run build`**    | Compiles TypeScript to JavaScript (`dist/` folder)     |
| **`npm run start`**    | Starts the server with **PM2 clustering**              |
| **`npm run watch`**    | Auto-builds TypeScript & restarts server on changes    |
| **`npm run dev`**      | Runs the server using `ts-node` (for development)      |
| **`npm run restart`**  | Rebuilds & restarts PM2 processes                      |
| **`npm run stop`**     | Stops all PM2 processes                                |
| **`npm run delete`**   | Deletes PM2 processes                                 |
| **`npm run clean`**    | Removes `dist/` folder                                 |
| **`npm run lint`**     | Runs ESLint to check for errors                        |
| **`npm run lint:fix`** | Auto-fixes ESLint errors                               |
| **`npm run format`**   | Formats code using Prettier                           |

---

## Install Dependencies

```

npm install

```

## Set Up Environment Variables (.env)

#### Change .envExampe to .env file and change values of vaiables:

```
PORT=9000

MONGODB_URI=your-mongo-database-uri

JWT_SECRET=your_secret_key`
```

## Start the Server

```

npm run build (first time)

```

```

npm run watch ( auto build with changes on server)

```

## Authentication & Security

- JWT Authentication for secure API access

- Bcrypt for password hashing

- Helmet & Rate Limiting for enhanced security

- Zod for request validation (Safer than Joi, works well with TypeScript)

## Why Use This Boilerplate?

🏗 Fast Setup → Just clone & start building

💪 Scalable → Handles high traffic with clustering

🔒 Secure → Pre-configured with best security practices

⚡ Optimized → TypeScript + PM2 + Express for max performance

## 💡 Contribution

If you have suggestions or improvements, feel free to submit a Pull Request!

## 📜 License
This project is licensed under ISC.
