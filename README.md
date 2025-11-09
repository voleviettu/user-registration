# User Registration Application

A full-stack user registration application built with React (Frontend) and NestJS (Backend).

## 🚀 Tech Stack

### Frontend
- **React** with TypeScript
- **Vite** - Build tool
- **TanStack Query** - API state management
- **Shadcn/UI** - UI components
- **Tailwind CSS** - Styling

### Backend
- **NestJS** - Node.js framework
- **TypeORM** - ORM for database operations
- **PostgreSQL** - Database
- **Bcrypt** - Password hashing
- **Class Validator** - Input validation

## 📁 Project Structure

```
user-registration/
├── frontend/          # React frontend application
├── backend/           # NestJS backend API
└── README.md          # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/download/)
- **npm** (comes with Node.js)

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/user-registration.git
cd user-registration
```

### Step 2: Database Setup

1. **Install PostgreSQL** if you haven't already

2. **Create the database**:
   - Open PostgreSQL command line or pgAdmin
   - Run the following command:
   ```sql
   CREATE DATABASE "user-registration";
   ```

3. **Configure database credentials**:
   - Navigate to `backend/.env`
   - Update the credentials (default password is `postgres123`):
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres123
   DB_NAME=user-registration
   PORT=3000
   ```

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the development server
npm run start:dev
```

✅ Backend will run on `http://localhost:3000`

You should see:
```
Application is running on: http://localhost:3000
```

### Step 4: Frontend Setup

Open a **new terminal window** and run:

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

✅ Frontend will run on `http://localhost:8080`

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:8080/
```

### Step 5: Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000

## 🎯 Quick Start (After Initial Setup)

After the first setup, you only need to run:

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## 🔑 Environment Variables

### Backend

#### Local Development (`backend/.env`)
```env
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_NAME=user-registration
PORT=3000
FRONTEND_URL=http://localhost:8080
```

#### Production (Render)
```env
NODE_ENV=production
DATABASE_URL=postgresql://user:password@host:5432/database
FRONTEND_URL=https://awad-ia03-22127435.vercel.app
PORT=3000
```

### Frontend

#### Local Development (`frontend/.env.development`)
```env
VITE_API_URL=http://localhost:3000
```

#### Production (`frontend/.env.production`)
```env
VITE_API_URL=https://user-registration-r1o2.onrender.com
```

## 📝 API Endpoints

### POST `/user/register`
Register a new user

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "John Doe"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "fullName": "John Doe",
    "createdAt": "2025-11-09T00:00:00.000Z"
  }
}
```

## 🚀 Deployment

### Backend (Render)

1. Create a PostgreSQL database on Render
2. Create a new Web Service on Render
3. Connect to your GitHub repository
4. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
5. Add environment variables (see Production env vars above)

### Frontend (Vercel)

1. Import project from GitHub to Vercel
2. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add environment variable `VITE_API_URL` with your Render backend URL
4. Deploy!