import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<div>skdjfhkdjshf</div>} />
          <Route path="keyboard" element={<div>keyboard</div>} />
          <Route path="keyboardset" element={<div>keyboardset</div>} />
          <Route path="hat" element={<div>hat</div>} />
          <Route path="switch" element={<div>switch</div>} />
          <Route path="tools" element={<div>tools</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
