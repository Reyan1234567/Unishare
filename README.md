# UniShare - University Resource Exchange

## Project Description
UniShare is a mobile application designed to help university students share, borrow, and exchange academic resources such as books, notes, and study materials. This project follows Domain-Driven Design (DDD) principles and includes authentication, authorization, and two core business features with full CRUD operations. The backend is built using a REST API that runs locally, and the frontend is developed using both Kotlin and Flutter.

## Features

### **1. Authentication & Authorization**
**Authentication Features:**
- **Signup:** Users can create an account with email and password.
- **Login/Logout:** Secure login with JWT-based authentication.
- **Delete Account:** Users can delete their accounts along with all associated data.

**Authorization Features:**
- **Role-Based Access Control (RBAC):**
  - Admin: Full access to manage all resources and users.
  - Student: Can list, borrow, and manage their own resources.
- **Access Restriction:** Certain features/screens are only available to users with appropriate roles.

### **2. Business Features (With Full CRUD Capability)**

#### **Feature 1: Resource Management**
Students can list academic resources (books, notes, etc.) for borrowing.
- **Create:** Add new resources with details (title, category, availability status, etc.).
- **Read:** View a list of all available resources.
- **Update:** Modify resource details.
- **Delete:** Remove resources that are no longer available.

#### **Feature 2: Borrow Request System**
Users can request to borrow resources listed by others.
- **Create:** Send a borrow request for a listed resource.
- **Read:** View pending and approved borrow requests.
- **Update:** Approve or reject a borrow request (resource owner only).
- **Delete:** Cancel a borrow request before approval.

  ### **3. Dark Mode Support**

UniShare supports dark mode, allowing users to switch between light and dark themes for a better user experience.
### Contributors
- Abdulhafiz Jemal - UGR/2366/15
- Eyosyas Solomon - UGR/9247/15
- Feben Getachew - UGR/4295/15
- Merertu Philipose - UGR/4906/15
- Reyan Berhanu - UGR/1650/15
