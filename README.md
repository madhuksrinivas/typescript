# TypeScript Tutorial

TypeScript is an open-source language from Microsoft. It is JavaScript with optional static typing, and it compiles to plain JavaScript.

Why use TypeScript?

- Catches many errors before running code
- Improves autocomplete and editor support
- Works well with JavaScript, React, Angular, and Node.js

## Install

1. install node
2. npm install -g typescript
3. tsc -v -> gives typescript version

## Running

Create a file with a `.ts` extension and compile it with `tsc main.ts`. 
This creates a JavaScript file such as `main.js`. Then run the js file using node as `node main`

`tsc main --watch` - watches the ts file and auto compiles whenever changes are made

Beginner Lessons:

1. Variables - `basics/variables.ts`
   - `let` and `const`
   - string, number, and boolean types
   - type inference
   - arrays and objects
   - union types
   - `any` vs `unknown`

   Run it:
   `cd basics`
   `tsc variables.ts`
   `node variables.js`

2. Functions - `basics/functions.ts`
   - typed parameters
   - typed return values
   - `void` functions
   - optional parameters
   - default parameters
   - arrow functions
   - function type aliases

   Run it:
   `cd basics`
   `tsc functions.ts`
   `node functions.js`

Advanced Lessons:

1. Advanced Types - `advanced/advanced-types.ts`
   - generics
   - generic arrays
   - generic constraints
   - type narrowing
   - `keyof`
   - utility types like `Partial` and `Pick`
   - mapped types
   - discriminated unions

   Run it:
   `cd advanced`
   `tsc advanced-types.ts`
   `node advanced-types.js`

React With TypeScript:

1. React Basics - `with-react/src/App.tsx`
   - typed components
   - props
   - `children` with `ReactNode`
   - `useState`
   - event types
   - forms
   - lists
   - conditional rendering
   - `useEffect`
   - union types for loading states

   Run it:
   `cd with-react`
   `npm install`
   `npm run dev`

   Build check:
   `npm run build`
