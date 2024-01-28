import React from "react";
import { FormConfig, FormSection } from "../types";
import { TextField, Typography } from "@mui/material";
import { Formik, Field } from "formik";
import { Form } from "react-router-dom";

interface DynamicFormProps {
  formConfig: FormConfig;
  callbackUrl: string;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ formConfig }) => {
  const onSubmit = () => {};

  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
      <Typography variant="h4" gutterBottom>
        Form
      </Typography>

      <Form>
        {(formConfig?.sections || []).map(
          (section: FormSection, index: number) => (
            <div key={index}>
              <Typography variant="h5" gutterBottom>
                {section.title}
              </Typography>

              <div className="grid grid-cols-1 gap-4 mb-4">
                {section.fields.map((field, fieldIndex) => (
                  <Field
                    key={fieldIndex}
                    as={TextField}
                    fullWidth
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                  />
                ))}
              </div>
            </div>
          )
        )}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(form?.formConfig?.buttons || []).map(
            (button: FormButton, buttonIndex: number) => (
              <Button
                key={buttonIndex}
                type={button.type}
                variant={button.variant}
                color={button.color}
                className={button.className}
              >
                {button.label}
                <CircularProgress
                  color="inherit"
                  size={15}
                  className="ml-2"
                />
              </Button>
            )
          )}
        </div> */}
      </Form>
    </Formik>
  );
};
