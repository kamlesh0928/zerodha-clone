# Zerodha Clone

This project is a Zerodha Clone, a simulation of a stock trading platform that provides users with a realistic trading experience. However, **please note that this project is for learning purposes only, and users cannot actually invest or trade real stocks.** It is built using React.js and follows a modular structure, separating the backend, dashboard, and frontend for better scalability and maintainability.

---

## Live Demo
You can access the live version of the project here: [**Zerodha Clone Live Demo**](https://zerodha-clone-front.onrender.com/)

---

## Project Structure
```
Zerodha-Clone/
  ├── backend/      # Handles User, holdings, stocks data
  ├── dashboard/    # User specific dashboard interface
  └── frontend/     # Client-side user interface
```
### Technologies Used
- **React.js** for building the user interface
- **Node.js** for backend services
- **Express** for server-side logic
- **MongoDB** for data storage
- **Chart.js** for making charts

---

## Installation Guide

### Step-by-step Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Install Dependencies for Each Folder**
   Navigate to each folder and install dependencies:
   
   **Backend**
   ```sh
   cd backend
   npm install
   ```
   
   **Dashboard**
   ```sh
   cd ../dashboard
   npm install
   ```
   
   **Frontend**
   ```sh
   cd ../frontend
   npm install
   ```

3. **Environment Variables**
   Configure environment variables for the backend. Create a `.env` file in the `backend` directory with necessary variables like:
   ```env
   MONGO_URL=your-mongodb-connection-string
   PORT=5000
   TOKEN_KEY=your-token-key-or-any-randow-string
   ```

4. **Start the Applications**
   - **Backend**
     ```sh
     cd backend
     npm start
     ```
   - **Dashboard**
     ```sh
     cd ../dashboard
     npm start
     ```
   - **Frontend**
     ```sh
     cd ../frontend
     npm start
     ```

5. **Access the Application**
   Open your browser and go to:
   - Frontend: `http://localhost:3000`
   - Dashboard: `http://localhost:3001` (or whichever port it's set to)
   
---

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## License
This project is licensed under the MIT License. Please see the [LICENSE](LICENSE) file for more information.

---

