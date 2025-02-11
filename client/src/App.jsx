import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthProvider";
import Home from "./pages/Home";
import Layout from "./layouts/layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <AuthProvider>
      <Router>
      
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            
            <Route path="*" element={<NotFound />} /> {/* 404 Page */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
