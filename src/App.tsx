import { Routes, Route, Navigate } from 'react-router-dom';
import { SignIn, SignUp, useAuth } from '@clerk/clerk-react';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';

function App() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/sign-in" element={
        isSignedIn ? <Navigate to="/dashboard" replace /> : (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
          </div>
        )
      } />
      <Route path="/sign-up" element={
        isSignedIn ? <Navigate to="/dashboard" replace /> : (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
          </div>
        )
      } />
      <Route path="/dashboard" element={
        !isSignedIn ? <Navigate to="/sign-in" replace /> : (
          <Layout>
            <Dashboard />
          </Layout>
        )
      } />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;