import { Route, Routes, useNavigate } from 'react-router-dom';
import { useUserContext } from './context/AuthContext';
import { useEffect } from 'react';
import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import { Home, KnowledgeHub, News, SelfAssessment } from './_root/pages';
import { Toaster } from './components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { isAuthenticated } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        {isAuthenticated && (
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/self-assessment" element={<SelfAssessment />} />
            <Route path="/news" element={<News />} />
            <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          </Route>
        )}
      </Routes>

      <Analytics />
      <SpeedInsights />
      <Toaster />
    </main>
  );
}

export default App;