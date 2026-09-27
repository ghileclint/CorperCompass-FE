import { Route } from 'react-router-dom';
import CultureGuidePage from './pages/CultureGuidePage';
import PhrasebookPage from './pages/PhrasebookPage';
import CustomsEtiquettePage from './pages/CustomsEtiquettePage';

/**
 * culture.routes.jsx
 * Mirrors the pattern in vendors.routes.jsx / lodges.routes.jsx.
 *
 * If your team's routes file exports an array of <Route> elements to be
 * spread inside <Routes> in App.jsx, use CultureRoutes as-is below. If
 * vendors.routes.jsx instead exports a plain array of {path, element}
 * objects, match that shape instead — open vendors.routes.jsx and copy
 * whichever pattern it actually uses.
 */
export const CultureRoutes = [
  <Route key="culture-guide" path="/culture" element={<CultureGuidePage />} />,
  <Route key="culture-phrasebook" path="/culture/phrasebook" element={<PhrasebookPage />} />,
  <Route key="culture-customs" path="/culture/customs" element={<CustomsEtiquettePage />} />,
];
