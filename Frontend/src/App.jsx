
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminRoute from "./utils/AdminRoute";

const Home = lazy(() => import("./Screen/Home"));
const Contact = lazy(() => import("./Screen/Contact"));
const Waitlist = lazy(() => import("./Screen/Waitlist"));

const AdminDashboard = lazy(() =>
  import("./Screen/Admin/admin dashboard/Dashboard")
);

const SignInSide = lazy(() =>
  import("./Screen/Admin/admin-signin-mui/signin-mui/SignInSide")
);

const NotFound = lazy(() => import("./Components/NotFound"));

import FullScreenLoader from "./Components/FullScreenLoader";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <ErrorBoundary>
        <Suspense fallback={<FullScreenLoader />}>
          <Routes>
            <Route path="/Contact-Us" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/admin/login" element={<SignInSide />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
