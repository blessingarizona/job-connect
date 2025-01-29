import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from "./components/ui/button";
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobPage from './pages/job';
import JobListing from './pages/job-listing';
import MyJobs from './pages/my-job';
import PostJob from './pages/post-job';
import SavedJob from './pages/saved-job';
import { ThemeProvider } from './components/ui/theme-provider';
import ProtectedRoute from './components/protected-route';


const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
    },
    {
      path:'/onboarding',
      element: (
        <ProtectedRoute>
      <Onboarding />
      </ProtectedRoute>
      ),
  },{
    path:'/job/:id',
    element: (
      <ProtectedRoute>
    <JobPage />
    </ProtectedRoute>
    ),
},{
  path:'/job-listing',
  element: (
    <ProtectedRoute>
  <JobListing />
  </ProtectedRoute>
  ),
},{
  path:'/my-job',
  element: (
    <ProtectedRoute>
  <MyJobs />
  </ProtectedRoute>
  ),
},
{
  path:'/post-job',
  element: (
    <ProtectedRoute>
  <PostJob />
  </ProtectedRoute>
  ),
},
{
  path:'/saved-job',
  element: (
    <ProtectedRoute>
  <SavedJob />
  </ProtectedRoute>
  ),
},
  ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
