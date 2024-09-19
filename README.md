# DevSpace app - Task

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [How to Test](#test)
  - [Running the Application](#running-the-application)
- [Online Demo](#online-demo)

## Technologies Used

- **React**
- **TS**
- **styled-component**
- **Vite**
- **framer-motion**
- **lottie-react**
- **react-paginate**
- **react-responsive**
- **supabase/supabase-js**
- **react-slick**

## Project Structure

- `public`: Static assets and public files, accessible directly in the browser (e.g., logos, JSON data).
- `src/assets`: Static resources like images, icons, and SVGs.
- `src/components`: All the UI components organized by feature, like `AboutContent`, `Header`, `Footer`, etc.
- `src/hooks`: Contains reusable React hooks.
- `src/pages`: Page-level components that correspond to different routes.
- `src/services`: Handles API calls or services, such as `supabaseClient.ts` for database interaction.
- `src/styles`: Global and theme-related styles.
- `src/utils`: General utility functions used across the app.

## How to Test

### Running the Application

To test the application, you can start the development server and explore the functionality manually. Here are the steps:

1. **Setting Up the Environment:**

   - Ensure you have Node.js and npm installed on your machine.

   ```bash
   git clone https://github.com/TeonaZav/allpayway-task.git>
   ```

2. **Starting the Development Server:**
   - Install the necessary dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

### Online Demo

You can also visit the deployed version of the application on Vercel:

- [Concept Homepage on Vercel](https://allpayway-task.vercel.app/)
