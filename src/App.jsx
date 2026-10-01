import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

import AdminLayout from './components/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-[#111111] font-sans selection:bg-[#111111] selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
