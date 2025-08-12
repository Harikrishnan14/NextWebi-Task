# Getting Started
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   <img width="221" height="100" alt="Image" src="https://github.com/user-attachments/assets/66bf7a95-33df-4520-b7c6-f9045e4b243d" />

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Clone or Download the Code :**

   Clone the repository using the following command:
   ### `git clone https://github.com/Harikrishnan14/dummy-website.git`

   Then, navigate into the project folder:
   ### `cd dummy-website`

   Or alternatively, download the ZIP file from GitHub and extract it.

5. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) from the root folder and run the following command to install all the dependencies needed to run the application [ Don't close this terminal we will be using this later] :
      ### `npm i`
      
# Starting the Application:

1. On the terminal which you used to install the dependencies for the application, run the following command to start the application :
   ### `npm run dev`
   
2. After this, Go to 'http://localhost:5173'

# Packages Used:

1. **Vite :** A fast build tool and development server for modern web projects. It provides instant server start, lightning-fast hot module replacement (HMR), and optimized production builds.
2. **@radix-ui/react-accordion :** An accessible and unstyled accordion primitive built with Radix UI. Great for custom-styled dropdowns or collapsible content.
3. **react-fast-marquee :** A performant React component to create smooth and customizable scrolling marquees.
4. **react-multi-carousel :** A responsive and customizable carousel/slider component for React that supports swipe and drag features.