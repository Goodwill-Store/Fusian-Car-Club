# Fusian Car Club

## How to Run the App Locally

Follow these steps to run the app on your local machine:

1. **Install dependencies for the entire project**:
   - Navigate to the root folder and run:
     ```bash
     npm install
     ```

2. **Install frontend dependencies**:
   - Navigate to the `client` folder and run:
     ```bash
     cd client
     npm install
     ```

3. **Install backend dependencies**:
   - Navigate to the `server` folder and run:
     ```bash
     cd ../server
     npm install
     ```

4. **Start both the frontend and backend servers**:
   - Go back to the root folder and run:
     ```bash
     cd ..
     npm run dev
     ```

This command will simultaneously start the backend server and the Vite frontend development server.

### Access the App

Once everything is running, open your browser and go to:

[http://localhost:5173/](http://localhost:5173/)

### API Proxy Configuration

The Vite app is configured to use a proxy for API requests to our own server.  The proxy configuration in `vite.config.js` is as follows:

```javascript
plugins: [react()],
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000', // Our backend express server
      changeOrigin: true,
      secure: false,
    },
  },
},
