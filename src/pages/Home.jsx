import React, { useEffect, useState } from "react";
import Data from "../Data";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userExist = JSON.parse(localStorage.getItem("users"));
    if (userExist) {
      setUsers(userExist);
    } else {
      localStorage.setItem("users", JSON.stringify(Data));
      setUsers(Data);
    }
  }, []);

  const handleSubmit = () => {
    const foundUser = users.find((user) => user.email === email);
    if (foundUser) {
      setUserRole(foundUser.role);
      localStorage.setItem("userInfo", JSON.stringify(foundUser));

      if (userRole === "user") {
        navigate("/user");
      } else if (userRole === "admin") {
        navigate("/admin");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <Stack
      spacing={2}
      sx={{
        width: "30%",
        backgroundColor: "#F0F8FF",
        height: "150px",
        marginTop: "100px",
        borderRadius: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        label="Enter Email"
        type="email"
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "5px",
        }}
        onChange={(event) => setEmail(event.target.value)}
      />
      {/* <Typography>{userRole}</Typography> */}

      <Button variant="contained" type="button" onClick={handleSubmit}>
        Find
      </Button>
    </Stack>
  );
};

export default Home;
