import { useState } from "react";
import "./App.css";
import { TenancyForm } from "./components/TenancyForm";
import { Submitted } from "./components/Submitted";
import { Container } from "@mui/material";

export const App = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container className="pt-4">
      {submitted ? <Submitted /> : <TenancyForm setSubmitted={setSubmitted} />}
    </Container>
  );
};
