import { useLoaderData } from "react-router-dom";
import { LoaderResult } from ".";
import { DynamicForm } from "../../components/DynamicForm";
import { CircularProgress } from "@mui/material";

export const Route = () => {
  const { form } = useLoaderData() as LoaderResult;

  if (!form) return <CircularProgress />;

  return <DynamicForm formConfig={form.formConfig} callbackUrl={""} />;
};
