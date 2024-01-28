export interface FormField {
  label: string;
  name: string;
  type: string;
  required: boolean;
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

export interface FormButton {
  type: string;
  label: string;
  variant: string;
  color: string;
  className: string;
}

export interface FormConfig {
  sections: FormSection[];
  buttons: FormButton[];
}

export interface FormData {
  id: string;
  formConfig: FormConfig;
  url: string;
  callbackUrl: string;
  expiryDate: string;
}
