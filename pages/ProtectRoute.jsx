import { useAuth } from "../contexts/AuthContext";

export default function ProtectRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : null;
}
