# In-Browser Markdown Editor

A fullstack Markdown editor built with the **MERN** stack and styled using **Tailwind CSS**.  
Create, edit, preview, and manage your Markdown documents directly in your browser, with a beautiful, responsive, and modern UI.

---

## 🚀 Features

- **Live Markdown Editing & Preview**  
  Write Markdown and instantly see the rendered output side-by-side.

- **Document Management**  
  Create, rename, update, and delete documents. All documents are stored in MongoDB.

- **Dark/Light Mode**  
  Toggle between dark and light themes for comfortable editing.

- **Responsive Design**  
  Fully functional on both desktop and mobile devices.

- **Syntax Highlighting**  
  Code blocks are automatically highlighted for better readability.

- **Keyboard & Mouse Friendly**  
  Optimized for fast navigation and editing.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Markdown
- Remark GFM
- Rehype Highlight

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- Zod (for validation)

### API

- RESTful API for full CRUD operations on documents

---

## ⚙️ Getting Started

### Prerequisites

- Node.js **v18** or higher
- A MongoDB instance (local or cloud)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd in-browser-markdown-editor
```

```bash
cd server
npm install
```

```bash
MONGO_URI=<your-mongodb-uri>
PORT=3000
```

```bash
npm run dev
```

```bash
cd ../client
npm install
npm run dev
```

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | `/api/v1/documents`     | List all documents    |
| POST   | `/api/v1/documents`     | Create a new document |
| PATCH  | `/api/v1/documents/:id` | Update a document     |
| DELETE | `/api/v1/documents/:id` | Delete a document     |

in-browser-markdown-editor/
├── client/ # React frontend (Vite, Tailwind, Markdown preview)
└── server/ # Express backend (API routes, MongoDB, validation)
