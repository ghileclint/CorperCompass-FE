// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll to top every time the route changes. React Router
// doesn't do this automatically — it keeps the previous page's scroll
// position, which is why clicking into a new page can land you mid-page
// or at the bottom instead of the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top:0, 
      behavior:"auto",
    });
  }, [pathname]);

  return null;
}