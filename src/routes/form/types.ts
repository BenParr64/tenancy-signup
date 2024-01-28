import { FormData } from "../../types";

export interface FormProps {
  params: {
    contactId: string;
  };
}

export interface LoaderResult {
  form: FormData | null;
}
