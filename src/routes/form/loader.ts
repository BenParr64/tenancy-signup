import { LoaderFunctionArgs } from "react-router-dom";
import { FormProps, LoaderResult } from "./types";
import axios from "axios";
import { FormData } from "../../types";

const getForm = async (
  formId: string | undefined
): Promise<FormData | null> => {
  if (!formId) return null;

  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/forms/${formId}`
  );
  return res.data;
};

export async function loader({
  params,
}: LoaderFunctionArgs<FormProps>): Promise<LoaderResult> {
  const form = await getForm(params.formId);
  return { form };
}
