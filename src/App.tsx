import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index.tsx";
import TuringTest from "./pages/TuringTest.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/turing-test" element={<TuringTest />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
