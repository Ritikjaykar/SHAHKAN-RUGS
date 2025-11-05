import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CustomRugForm from './pages/CustomRugForm';
import Contact from './pages/Contact';
import About from './pages/About';
import SizeGuide from './pages/SizeGuide';
import HowWeWork from './pages/HowWeWork';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import HandKnotted from './pages/collections/HandKnotted';
import HandTufted from './pages/collections/HandTufted';
import Handloom from './pages/collections/Handloom';
import { PatchedWork, LeatherCarpet, JuteRugs, FlatWeave, DesignersEdition, CoirMats } from './pages/collections/OtherCollections';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collection/hand-knotted" element={<HandKnotted />} />
            <Route path="/collection/hand-tufted" element={<HandTufted />} />
            <Route path="/collection/handloom" element={<Handloom />} />
            <Route path="/collection/patched-work" element={<PatchedWork />} />
            <Route path="/collection/leather-carpet" element={<LeatherCarpet />} />
            <Route path="/collection/jute-rugs" element={<JuteRugs />} />
            <Route path="/collection/flat-weave" element={<FlatWeave />} />
            <Route path="/collection/designers-edition" element={<DesignersEdition />} />
            <Route path="/collection/coir-mats" element={<CoirMats />} />
            <Route path="/custom-rug-form" element={<CustomRugForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;