import { useState } from "react";
import { Documents } from "./Documents";
import { TenancyForm } from "./TenancyForm";
import { Container } from "@mui/material";

export const ContractsContainer = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container className="pt-4">
      {submitted ? <Documents /> : <TenancyForm setSubmitted={setSubmitted} />}
    </Container>
  );
};
