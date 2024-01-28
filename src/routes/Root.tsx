import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Container className="mt-10">
      <Outlet />
    </Container>
  );
};
