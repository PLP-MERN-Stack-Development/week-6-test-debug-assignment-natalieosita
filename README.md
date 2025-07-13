## 📄 `README.md`

```markdown
# 🐞 MERN Bug Tracker

A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js), designed to demonstrate unit, integration, and end-to-end testing along with robust debugging techniques.

---

## 🚀 Features

- Report new bugs via a form
- View a list of all reported bugs
- Update bug statuses: `open`, `in-progress`, or `resolved`
- Delete bugs from the list
- Client-side and server-side error handling
- Real-time UI updates upon API interactions

---

## 🧰 Tech Stack

| Layer      | Tools Used                                    |
|------------|-----------------------------------------------|
| Frontend   | React, Axios, React Testing Library, Cypress  |
| Backend    | Express.js, MongoDB, Jest, Supertest          |
| Testing    | Jest, RTL, Cypress, MongoDB Memory Server     |
| Deployment | Vercel (frontend), Render (backend)           |

---

## 🛠 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-bug-tracker.git
cd mern-bug-tracker
```

### 2. Start the backend

```bash
cd server
npm install
touch .env
# Add your MongoDB URI
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-bug-tracker
npm run dev
```

### 3. Start the frontend

```bash
cd ../client
npm install
npm start
```

---

## 🧪 Testing Guide

### ✅ Run Unit + Integration Tests

#### Backend (Jest + Supertest):

```bash
cd server
npm test
```

#### Frontend (Jest + React Testing Library):

```bash
cd client
npm test
```

#### Cypress End-to-End Tests:

```bash
cd client
npx cypress open
```

Tests include:

- Unit tests for components and helper functions
- Integration tests for API endpoints and UI updates
- E2E flow: create, update, and delete bug

---

## 🐞 Debugging Techniques

- `console.log()` and breakpoint inspection (DevTools + Node.js Inspector)
- Error boundaries in React for graceful UI recovery
- Centralized Express error-handling middleware
- UI state tracing during bug report and edit cycles

---

## 📊 Test Coverage

- Frontend: Form validation, conditional rendering, user interactions
- Backend: API routes, validation logic, error states
- End-to-End: Full bug lifecycle (report ➝ update ➝ delete)

Coverage thresholds are enforced via `jest.config.js`.

---

## 🛡️ Error Handling

- Express middleware captures and formats server errors
- React `ErrorBoundary` component wraps major UI branches
- Clear user feedback for API or rendering failures

---

## 📦 Deployment

- **Frontend**: Vercel (`client/`)
- **Backend**: Render (`server/`)
- CORS configured to allow cross-origin requests

---
