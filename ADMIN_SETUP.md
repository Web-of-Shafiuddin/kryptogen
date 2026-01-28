# Admin Panel Setup Guide

## Overview
The Kryptogen Technology website now includes a fully functional admin panel for managing content without touching code.

## Features
- ✅ Services Management (CRUD)
- ✅ Portfolio/Projects Management (CRUD)
- ✅ Blog Posts Management (CRUD)
- ✅ Admin Authentication
- ✅ Clean, Modern UI
- ✅ Real-time updates

## Database Schema
The admin panel uses Prisma ORM with SQLite database:
- **Users**: Admin account management
- **Services**: Website services (Mobile Apps, Web Dev, E-commerce)
- **Projects**: Portfolio projects with tags and links
- **BlogPosts**: Blog articles with categories and publishing control
- **CompanyInfo**: Company contact and social information

## Initial Setup

### 1. Create Admin User (Easy Method)

Run the helper script:
```bash
cd /home/z/my-project
bun run create-admin-user
```

**Default Credentials:**
- Email: `admin@kryptogen.com`
- Password: `admin123`

⚠️ **IMPORTANT:** Change these credentials after first login!

### 2. Create Admin User (Manual Method)

Or manually insert into the database if you prefer:

```bash
# Open Prisma Studio for GUI database access
bun run db:studio
```

Then in the User table, create a record with:
- email: `admin@kryptogen.com`
- password: [hashed password using bcrypt]
- name: `Admin User`
- role: `admin`

### 3. Access Admin Panel
Navigate to:
```
/admin/login
```

Default credentials (after creating admin user):
- Email: admin@kryptogen.com
- Password: [your set password]

## API Endpoints

### Authentication
- `POST /api/admin/auth` - Login
- Body: `{ email, password }`
- Returns: `{ user, message }`

### Services Management
- `GET /api/admin/services` - List all services
- `POST /api/admin/services` - Create service
- `PUT /api/admin/services/[id]` - Update service
- `DELETE /api/admin/services/[id]` - Delete service

### Portfolio Management
- `GET /api/admin/portfolio` - List all projects
- `POST /api/admin/portfolio` - Create project
- `PUT /api/admin/portfolio/[id]` - Update project
- `DELETE /api/admin/portfolio/[id]` - Delete project

### Blog Management
- `GET /api/admin/blog` - List all posts
- `POST /api/admin/blog` - Create post
- `PUT /api/admin/blog/[id]` - Update post
- `DELETE /api/admin/blog/[id]` - Delete post

### Public APIs (Frontend)
- `GET /api/public/services` - Get published services
- `GET /api/public/portfolio` - Get published projects
- `GET /api/public/blog` - Get published blog posts

## Admin Features

### Services Management
- Add, edit, delete services
- Configure icon, title, description
- Add multiple features per service
- Add multiple badges per service
- Reorder services
- Toggle published/unpublished status

### Portfolio Management
- Add, edit, delete projects
- Configure project details
- Assign category (Web, Mobile, E-commerce)
- Add multiple tags
- Set project URL and GitHub URL
- Reorder projects
- Toggle published/unpublished status

### Blog Management
- Create, edit, delete blog posts
- Rich text content support
- Categorize posts
- Set author and read time
- Auto-generate URL slugs
- Publish/unpublish control

## Next Steps

### Connect Frontend to Database
The frontend components (Hero, Services, Features, Portfolio, Blog) currently use hardcoded data. To connect them:

1. **Update Services Component** (`src/components/Services.tsx`):
```typescript
const [services, setServices] = useState([]);

useEffect(() => {
  fetch('/api/public/services')
    .then(res => res.json())
    .then(data => setServices(data));
}, []);
```

2. **Update Portfolio Component** (`src/components/Portfolio.tsx`):
```typescript
const [projects, setProjects] = useState([]);

useEffect(() => {
  fetch('/api/public/portfolio')
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);
```

3. **Update Blog Component** (`src/components/Blog.tsx`):
```typescript
const [posts, setPosts] = useState([]);

useEffect(() => {
  fetch('/api/public/blog')
    .then(res => res.json())
    .then(data => setPosts(data));
}, []);
```

## Security Notes

1. **Authentication**: Currently uses localStorage. Consider implementing:
   - JWT tokens with httpOnly cookies
   - Session-based auth
   - Role-based access control

2. **API Protection**: Add authentication middleware to protect admin routes

3. **Input Validation**: Add Zod schemas for form validation

4. **Rate Limiting**: Implement rate limiting for API endpoints

## UI Components Used
- shadcn/ui Dialog for forms
- shadcn/ui Table for listings
- shadcn/ui Button for actions
- shadcn/ui Input/Textarea for form fields
- Lucide React icons
- Framer Motion for animations
- Sonner for toast notifications

## File Structure
```
src/
├── app/
│   ├── admin/
│   │   ├── login/page.tsx          # Admin login page
│   │   └── dashboard/page.tsx       # Main admin dashboard
│   ├── api/
│   │   ├── admin/                  # Admin API endpoints
│   │   │   ├── auth/route.ts      # Authentication
│   │   │   ├── services/route.ts  # Services CRUD
│   │   │   ├── blog/route.ts      # Blog CRUD
│   │   │   └── portfolio/route.ts # Portfolio CRUD
│   │   └── public/                # Public API endpoints
│   │       ├── services/route.ts
│   │       ├── blog/route.ts
│   │       └── portfolio/route.ts
└── components/
    └── admin/
        ├── ServicesTable.tsx    # Services management UI
        ├── ProjectsTable.tsx    # Portfolio management UI
        └── BlogTable.tsx        # Blog management UI
```

## Development

### Run Development Server
```bash
bun run dev
```

### Database Commands
```bash
bun run db:push     # Push schema changes
bun run db:generate  # Generate Prisma client
bun run db:studio   # Open Prisma Studio (GUI)
```

## Support
For issues or questions, refer to:
- Prisma documentation: https://www.prisma.io/docs
- Next.js API routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- shadcn/ui: https://ui.shadcn.com
