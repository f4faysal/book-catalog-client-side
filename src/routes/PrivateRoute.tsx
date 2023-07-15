import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import Loding from "../components/ui/Loding";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <Loding />;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
