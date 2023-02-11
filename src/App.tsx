import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import OCRPage from './pages/LatexOCR';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route path='ocr' element={<OCRPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
