// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={setInterval(() => {
//           setCount(count = count + 1);
//         }, 500)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import { useState, useEffect } from 'react';

// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);  

//   useEffect(() => {
//     let interval;
    
//     if (isRunning) {
//       interval = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 500);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);  
//   }, [isRunning]);

//   const handleClick = () => {
//     setIsRunning(!isRunning);  
//   };

//   return (
//     <>
      
//       <h1>Count App</h1>
//       <div className="card">
//         <button onClick={handleClick}>
//           {isRunning ? "Stop" : "Start"} counting (count is {count})
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   // Change the body color every time the count updates
//   useEffect(() => {
//     // Generate a random color
//     const randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    
//     // Change the body background color to the random color
//     document.body.style.backgroundColor = randomColor;
//   }, [count]); // Runs whenever count changes

//   useEffect(() => {
//     let interval;
    
//     if (isRunning) {
//       interval = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 500);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval); // Clean up on unmount or when `isRunning` changes
//   }, [isRunning]);

//   const handleClick = () => {
//     setIsRunning(!isRunning); // Toggle the interval state
//   };

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={handleClick}>
//           {isRunning ? "Stop" : "Start"} counting (count is {count})
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;



// import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   // Change the body background to a gradient color every time the count updates
//   useEffect(() => {
//     // Generate two random hues for the gradient
//     const hue1 = Math.random() * 360;
//     const hue2 = Math.random() * 360;

//     // Define the gradient CSS using hsl
//     const gradient = `linear-gradient(to right, hsl(${hue1}, 100%, 75%), hsl(${hue2}, 100%, 75%))`;

//     // Set the background to the gradient
//     document.body.style.background = gradient;
//   }, [count]); // Runs whenever count changes

//   useEffect(() => {
//     let interval;
    
//     if (isRunning) {
//       interval = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 500);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval); // Clean up on unmount or when `isRunning` changes
//   }, [isRunning]);

//   const handleClick = () => {
//     setIsRunning(!isRunning); // Toggle the interval state
//   };

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={handleClick}>
//           {isRunning ? "Stop" : "Start"} counting (count is {count})
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

 
  useEffect(() => {
   
    const hue1 = Math.random() * 360;
    const hue2 = Math.random() * 360;

   
    const gradient = `linear-gradient(to right, hsl(${hue1}, 100%, 75%), hsl(${hue2}, 100%, 75%))`;

    // Set the background and trigger the animation
    document.body.style.background = gradient;
    document.body.style.transition = 'background 1s ease-in-out'; // Smooth transition

  }, [count]); // Runs whenever count changes

  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isRunning]);

  const handleClick = () => {
    setIsRunning(!isRunning); 
  };

  return (
    <>
      <div>

      <h1>Count App</h1>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={handleClick}>
          {isRunning ? "Stop" : "Start"} counting (count is {count})
        </button>
        <p>
          Page is loading...
        </p>
      </div>
      
    </>
  );
}

export default App;
