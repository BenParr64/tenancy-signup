import { Typography, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";

interface FormData {
  firstName: string;
  surname: string;
  email: string;
  telephone: string;
  moveInDate: string;
}

export interface TenancyFormProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TenancyForm = ({ setSubmitted }: TenancyFormProps) => {
  const initialValues: FormData = {
    firstName: "",
    surname: "",
    email: "",
    telephone: "",
    moveInDate: "",
  };

  const mockSubmit = (values: FormData) => {
    console.log("Form submitted with values:", values);
    setSubmitted(true);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Tenant Information Form
      </Typography>

      <Formik initialValues={initialValues} onSubmit={mockSubmit}>
        <Form>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <Field
              as={TextField}
              fullWidth
              label="First Name"
              name="firstName"
              required
            />

            <Field
              as={TextField}
              fullWidth
              label="Surname"
              name="surname"
              required
            />

            <Field
              as={TextField}
              fullWidth
              label="Telephone"
              name="telephone"
              type="text"
              required
            />

            <Field
              as={TextField}
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
            />

            <Field
              as={TextField}
              fullWidth
              label="Move-in Date"
              name="moveInDate"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full"
            >
              Submit
            </Button>
            <Button
              type="reset"
              variant="outlined"
              color="primary"
              className="w-full"
            >
              Clear
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
