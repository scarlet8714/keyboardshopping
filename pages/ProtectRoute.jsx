import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(function () {
    alert("請先登入");
    if (!isAuthenticated) navigate(-1);
  });
  return isAuthenticated ? children : null;
}
