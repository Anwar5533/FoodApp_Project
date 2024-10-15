const punycode = require('punycode/');

# Redux
    - when we click button it will perform dispatch action.
    - which calls reducer function
    - which will update the store in redux
    - cart is subscribed to the store through selector so automatically it will update cart will be updated.
    
#Types of testing that developer can do
    - Unit Testing.
            - Test a specific component or one unit. you test your app in isolation. 
    - Integration testing.
            - Testing a multiple components flow while working together.
    - End to End testing.(e2e)
            - Testing App will start user landing the page until user leaving the page. (What user doing).


# How to add testing libraries to vite

-Here's a detailed step-by-step guide to setting up Vitest in your Vite project. Since you're using React with Vite, Vitest will integrate seamlessly and allow you to write and run tests without any extra hassle.
 
Step-by-Step Vitest Setup
 
1. Install Vitest and Testing Libraries
 
First, you need to install Vitest along with the necessary testing libraries like React Testing Library and Jest DOM for assertions:
 
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
 
This installs:
 
Vitest: Testing framework built for Vite.
 
@testing-library/react: React Testing Library for testing components.
 
@testing-library/jest-dom: Provides custom DOM element matchers for Jest (works with Vitest too).
 
 
2. Configure Vitest in vite.config.js
 
Next, configure Vitest within your Vite setup. This tells Vite to use Vitest for testing.
 
In your root directory, locate or create the vite.config.js file and add the following configuration for Vitest:
 
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // Enables Vitest's global API
    environment: 'jsdom',   // Simulate browser environment
    setupFiles: './src/setupTests.js', // Run setup files before each test
  },
});
 
3. Create a Setup File (setupTests.js)
 
You’ll need a setup file to configure Testing Library and Jest DOM. This file ensures that you can use custom matchers like toBeInTheDocument in your tests.
 
Create a setupTests.js file in your src/ directory:
 
// src/setupTests.js
import '@testing-library/jest-dom';
 
This line imports Jest DOM matchers so you can use them in your tests.
 
4. Write a Test Example
 
Now, let’s create an example test to ensure everything works properly.
 
sum.js: Create a simple sum function in sum.js:
 
export const sum = (a, b) => a + b;
 
sum.test.js: Now, write a test for the sum function in sum.test.js:
 
import { sum } from './sum';
import { test, expect } from 'vitest';
 
test('sum function calculates the sum of two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
 
 
If you’re testing React components, here's an example:
 
ExampleComponent.jsx: Create a React component:
 
const ExampleComponent = () => {
  return <div>Hello, Vitest!</div>;
};
 
export default ExampleComponent;
 
ExampleComponent.test.jsx: Write a test for the component:
 
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';
import { test, expect } from 'vitest';
 
test('renders ExampleComponent correctly', () => {
  render(<ExampleComponent />);
  expect(screen.getByText('Hello, Vitest!')).toBeInTheDocument();
});
 
 
5. Update package.json Scripts
 
In your package.json, replace the Jest test script with Vitest:
 
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch"
  }
}
 
Now, you can run your tests using:
 
npm run test
 
To continuously watch your tests while coding:
 
npm run test:watch
 
6. Run Your Tests
 
Once you’ve written your tests and updated your configuration, you can run all your tests with the following command:
 
npm run test
 
If you want to run Vitest in watch mode (re-running tests on file changes):
 
npm run test:watch
 
 
---
 
Summary of the Steps:
 
1. Install Vitest and testing libraries using npm.
 
 
2. Configure vite.config.js to set up Vitest with a browser-like jsdom environment and setup files.
 
 
3. Create setupTests.js for importing @testing-library/jest-dom to use custom matchers in your tests.
 
 
4. Write your tests for components or utility functions.
 
 
5. Update the package.json scripts to run Vitest.
 
 
6. Run the tests with npm run test or npm run test:watch.
 
 
 
With this setup, Vitest will handle all your testing needs in a Vite-powered React app. Let me know if you need further help!