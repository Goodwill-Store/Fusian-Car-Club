# Fusian Car Club

## Links
[CAP4102_UXTeamAssignments](https://docs.google.com/document/d/1ZVZk1RfiqPzSQsEQQ5x_vV8q3UlE2n_T/edit?usp=sharing&ouid=115397654471199893888&rtpof=true&sd=true)

[Environment Setup Notes](https://docs.google.com/document/d/1pr3JQfd1dp6hwQ7NQNPhRJFPy-I8D3ZZvA5_jo24Z8A/edit?usp=sharing)

[Fusian_club_sketch Slides](https://docs.google.com/presentation/d/1w6dbG9HJ0xVxpDDdSy5v9kBXm6s9jn6V/edit?usp=sharing&ouid=115397654471199893888&rtpof=true&sd=true)

[https://styled-components.com/](https://styled-components.com/)

[MUI Theme Creator](https://zenoo.github.io/mui-theme-creator/#Alert)


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
