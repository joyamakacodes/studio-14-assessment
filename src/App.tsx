import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter
import Home from './pages/home/Home';

function App() {
  return (
    <ChakraProvider>
      <Router>  {/* Wrap your components with Router */}
        <Home/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
