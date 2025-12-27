<<<<<<< HEAD
# GearGuard – Intelligent Maintenance & Operations Tracker

GearGuard is a full-stack, ML-powered maintenance and operations tracking platform designed with a **data-first engineering mindset**.  
The project emphasizes **strong database design, secure backend architecture, dynamic data flow, and intelligent machine learning integration** in a production-ready system.

---

##  Project Overview

GearGuard demonstrates how a real-world system should be built — starting from a **well-structured relational database**, progressing through **robust backend APIs**, and enhanced with **machine learning models** to support intelligent decision-making.

The application is not limited to basic CRUD functionality; instead, it showcases **engineering discipline, scalability, and system reliability**.

---

##  Engineering Priorities (Core Focus)

###  Database Design & Setup
- Fully normalized relational database schema
- Clearly defined entities with **primary keys and foreign keys**
- Designed for **scalability, integrity, and long-term maintenance**
- Prevents redundancy and enforces structured relationships

###  SQL & Query Optimization
- Efficient SQL queries using:
  - `JOIN`s
  - constraints
  - indexing
- Accurate and fast data retrieval
- Direct support for dynamic frontend rendering

###  Backend Development
- API-driven backend architecture
- Clear separation between:
  - database layer
  - business logic
  - API routes
- Backend acts as the **central engine** connecting database, frontend, and ML models

###  Dynamic Data Flow
- Frontend is fully data-driven
- Database updates are reflected instantly through APIs
- Enables real-time dashboards and responsive UI behavior

###  Error Handling & Validation
- Structured server-side validation
- Consistent and meaningful error responses
- Proper HTTP status codes
- Improves system stability and user feedback

### 6️ Clean & Clear UI
- Minimal, intuitive interface
- Focused on usability and clarity
- Optimized data presentation for non-technical users

###  Security
- Authentication and authorization mechanisms
- Protected routes for sensitive operations
- Secure access to backend APIs and data

###  Machine Learning Models
- ML models integrated at the backend layer
- Models loaded using `state_dict` for safety and flexibility
- Predictions served via APIs
- Converts the system into an **intelligent, decision-support platform**

---

##   System Architecture (High-Level)

```text
Frontend (UI)
     ↓
Secure Backend APIs
     ↓
Relational Database (SQL)
     ↓
Machine Learning Models
=======
# GearGuard - Enterprise Maintenance Management System

A modern, full-featured maintenance management system built with Next.js 15, TypeScript, and Tailwind CSS. Designed with a dark, professional UI inspired by Vercel and Linear.

## Features

### Core Functionality
- **Dashboard** - Real-time KPIs, recent requests, and efficiency metrics
- **Equipment Management** - Track all equipment with detailed profiles, utilization rates, and maintenance history
- **Maintenance Requests** - Drag-and-drop Kanban board with status tracking (Backlog → To Do → In Progress → Review → Completed)
- **Team Management** - Manage technicians, admins, and managers with role-based views
- **Calendar Scheduling** - Monthly calendar view with preventive and corrective maintenance scheduling
- **Authentication** - Login and signup pages with form validation

### Equipment Features
- Equipment detail pages with full specifications
- Maintenance request filtering by equipment
- Assigned team and employee tracking
- Utilization rate monitoring
- Next maintenance scheduling

### Maintenance Request Features
- Corrective vs Preventive maintenance types
- Priority levels (Low, Medium, High, Urgent)
- Auto-populated equipment details (category, team)
- Status workflow management
- Due date tracking

### Team Features
- Team detail pages with member profiles
- Specialty tracking
- Active/completed task counts
- Contact information management
- Role-based badges (Admin, Manager, Technician)

### Calendar Features
- Monthly view with navigation
- Click date to create new request
- Click event to view details
- Visual indicators for scheduled tasks
- Upcoming tasks overview

## Design System

### Colors
- **Primary**: Purple (oklch(0.65 0.25 264)) - Main brand color
- **Chart Colors**: Various accent colors for data visualization
- **Status Colors**: 
  - Success/Operational: Green
  - Warning/In Progress: Blue
  - Error/Urgent: Red
  - Neutral: Gray

### Typography
- **Font Family**: Geist (sans-serif), Geist Mono (monospace)
- **Headings**: Semibold weight
- **Body**: Regular weight with relaxed line-height

### Components
- Rounded cards with soft shadows
- Smooth hover effects and transitions (200ms duration)
- Micro-animations on interactions
- Consistent spacing using Tailwind scale
- Responsive grid layouts

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Project Structure

```
app/
├── (auth)/
│   ├── login/page.tsx          # Login page
│   └── signup/page.tsx         # Signup page
├── equipment/
│   ├── [id]/page.tsx           # Equipment detail page
│   └── page.tsx                # Equipment list
├── maintenance/
│   ├── new/page.tsx            # New maintenance request form
│   └── page.tsx                # Kanban board
├── teams/
│   ├── [id]/page.tsx           # Team detail page
│   └── page.tsx                # Team list
├── calendar/page.tsx           # Calendar scheduling
├── settings/page.tsx           # Settings page
├── page.tsx                    # Dashboard
├── layout.tsx                  # Root layout
└── globals.css                 # Global styles

components/
├── ui/                         # shadcn/ui components
├── sidebar.tsx                 # Navigation sidebar
├── header.tsx                  # Top header with search
├── stat-card.tsx               # Dashboard stat cards
├── toast-notification.tsx      # Toast component
├── empty-state.tsx             # Empty state component
└── skeleton-loader.tsx         # Loading skeletons
```

## Key Interactions

### Navigation
- All sidebar links are functional with active state indicators
- Dashboard stat cards link to relevant pages
- Equipment cards link to detail pages
- Team member cards link to detail pages
- All "New Request" buttons route to `/maintenance/new`

### Forms
- Auto-populated fields based on equipment selection
- Real-time form validation
- Password strength indicators on signup
- Corrective vs Preventive maintenance toggle

### Kanban Board
- Drag-and-drop cards between columns
- Visual feedback during drag
- Priority badges with color coding
- Equipment and assignee information on cards

### Calendar
- Click any date to select it
- View scheduled tasks for selected date
- Click "Add Task" button to create new request
- Visual indicators show dates with scheduled tasks

## Performance Features

- Skeleton loading states for all pages
- Smooth page transitions (300ms fade-in)
- Optimized hover states and animations
- Custom scrollbar styling
- Responsive design (mobile, tablet, desktop)

## Future Enhancements

- Backend integration with database
- Real drag-and-drop functionality with state management
- File upload for equipment documentation
- Advanced filtering and search
- Export to PDF/CSV
- Email notifications
- Real-time collaboration
- Mobile app

## Development

This is a frontend-only application with dummy data. All interactions are simulated for demonstration purposes.

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## License

This project is for demonstration purposes.
>>>>>>> 528776c (Initial commit)
