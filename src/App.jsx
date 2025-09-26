// src/App.jsx
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppContent from './component/AppContent.jsx';
import ErrorBoundary from "./component/ErrorBoundary.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<NotFound />}>
        <AppContent />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
