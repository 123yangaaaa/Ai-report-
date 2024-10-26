import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing Clerk Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ClerkProvider 
        publishableKey={publishableKey}
        navigate={(to) => window.location.href = to}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </ErrorBoundary>
  </StrictMode>
);