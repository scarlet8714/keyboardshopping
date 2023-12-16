import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Category from "../pages/Category";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="keyboard" element={<Category />} />
            <Route path="keyboardset" element={<Category />} />
            <Route path="hat" element={<Category />} />
            <Route path="switch" element={<Category />} />
            <Route path="tools" element={<Category />} />
            <Route path="product/:pid" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
