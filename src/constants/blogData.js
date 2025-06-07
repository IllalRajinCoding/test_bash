export const blogData = {
    'vite': {
        title: "Fixing 'vite' Command Not Found",
        content: `# Solving Vite Command Not Found Error

When starting with Vite, you might encounter this error:
> 'vite' is not recognized as an internal or external command

## Solution Steps

### **1. Install Dependencies**
First, make sure all dependencies are installed:

\`\`\`bash
# Using npm
npm install

# Using yarn
yarn install
\`\`\`

### **2. Install Vite Globally**
If the error persists, install Vite globally:

\`\`\`bash
npm install -g vite
\`\`\`
### Happy Coding with Vite! 🚀`,
        author: "Robbanie Hillaly",
        date: "June 7, 2024",
        readTime: "5 min read",
        tags: ["Vite", "JavaScript", "Web Development"]
    },
    'javascript': {
        title: "Getting Started with JavaScript",
        content: `
        

# Let's Learn JavaScript and create a simple project
## Introduction
JavaScript powers the modern web. Let's learn how to get started with this powerful language.

## Setting Up Your Environment

### **1. Installing Node.js**
First, install Node.js from [nodejs.org](https://nodejs.org/). Download the LTS version for better stability.

### **2. Verifying Installation**
Check if Node.js is installed correctly:

\`\`\`bash
node --version
npm --version
\`\`\`

## Creating Your First Project

### **1. Project Setup**
Create a new project directory:

\`\`\`bash
mkdir my-js-project
cd my-js-project
\`\`\`

### **2. Initialize Project**
Create your first JavaScript file:

\`\`\`bash
echo. > index.js
\`\`\`

### **3. Writing Code**
Add this to your \`index.js\`:

\`\`\`javascript
// Your first JavaScript program
console.log("Hello, World!");

// Variables
const name = "Developer";
console.log(\`Hello, \${name}!\`);

// Functions
function greet(name) {
  return \`Welcome, \${name}!\`;
}
\`\`\`

### **4. Running Your Code**
Execute your JavaScript file:

\`\`\`bash
node index.js
\`\`\`

## **Next Steps**
- |- Learn about variables and data types
- |- Explore functions and objects
- |- keep Learning...

Happy coding!
`,
        author: "Robbanie Hillaly Kurniadien",
        date: "June 7, 2024",
        readTime: "8 min read",
        tags: ["JavaScript", "ES6", "Web Development"]
    },
    'new': {
        title: "First Post in My Blog - Welcome!",
        content: `

# Welcome to My Blog!
This is my first post. Stay tuned for more updates!`,
        author: "Robbanie Hillaly Kurniadien",
        date: "June 7, 2024",
        readTime: "1 min read",
        tags: ["Introduction", "Blog", "Welcome"]
    }
};