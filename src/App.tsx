import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Facility from "@/pages/Facility";
import Journals from "@/pages/Journals";
import News from "@/pages/News";
import Members from "@/pages/Members";
import Gallery from "@/pages/Gallery";
import Join from "@/pages/Join";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facility" element={<Facility />} />
      <Route path="/journals" element={<Journals />} />
      <Route path="/news" element={<News />} />
      <Route path="/members" element={<Members />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}
