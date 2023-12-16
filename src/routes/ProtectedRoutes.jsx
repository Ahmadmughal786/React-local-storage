import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const userExist = JSON.parse(localStorage.getItem("userInfo"));
  console.log("user data ", userExist);

  if (userExist) {
    const userRole = userExist.role;
    if (userRole === "admin") {
      return <Navigate to="/403" replace={true} />;
    }
  } else if (userRole === "user") {
    return <Navigate to="user" replace={true} />;
  }
  return children;
};

export const ProtectedRoute = ({ children }) => {
  const userExist = JSON.parse(localStorage.getItem("userInfo"));
  console.log("admindata", userExist);

  if (userExist) {
    const userRole = userExist.role;
    if (userRole === "user") {
      return <Navigate to="/403" replace={true} />;
    }
  } else if (userRole === "admin") {
    return <Navigate to="admin" replace={true} />;
  }
  return children;
};
