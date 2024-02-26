# React Tailwind Starter

This starter template is designed to kickstart your React projects using Tailwind CSS for styling. Built with ViteJS for an incredibly fast development experience, it integrates essential libraries and configurations to help you build scalable and maintainable web applications efficiently.

## Features

- **React 18 & Tailwind CSS**: Leverage the power of React 18 along with the utility-first CSS framework Tailwind CSS for rapid UI development.
- **ViteJS**: Enjoy the blazing-fast development experience with ViteJS, optimized for modern web development.
- **Pre-configured Axios**: Axios is pre-configured for making HTTP requests, including response interceptors for handling global errors like authentication failures.
- **React Router Dom**: Setup with React Router v6 for SPA routing.
- **React Hook Form & Yup**: Utilize React Hook Form for form handling and Yup for schema validation to manage forms efficiently.
- **Context API**: State management setup using React's Context API for global state management.
- **Modals and Toast Notifications**: React Modal and React Toastify are integrated for modals and toast notifications, enhancing the user interface.
- **Customizable Theme**: Tailwind's configuration extends to include custom colors, fonts, and breakpoints, making theming your application straightforward.

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Humza1011/React-Tailwind-Starter.git
   cd react-tailwind-starter
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

   Your application should now be running on [http://localhost:5173](http://localhost:5173).

## Project Structure

- `src/`: Contains all your source files.
  - `components/`: Reusable React components (e.g., Header, Footer).
  - `config/`: Configuration files (e.g., Axios instance setup).
  - `context/`: React context for global state management.
  - `pages/`: Page components used by the router.
  - `schema/`: Yup schemas for form validation.
  - `utils/`: Utility functions (e.g., auth helper functions).
- `index.css`: Global stylesheet.
- `main.jsx`: The entry point of your React application.
- `routes.jsx`: Routing setup using React Router.

## Usage

This starter template is structured to support large-scale applications by providing a solid foundation with essential libraries and configurations. Feel free to customize and extend it according to your project's needs.

## Acknowledgments

- This starter template was designed to simplify and accelerate the development of React applications with Tailwind CSS.
