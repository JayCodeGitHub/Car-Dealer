import { FormControl, Button, TextField } from "@mui/material";
import { formStyles } from "./form.styles";

export default function Form() {
  return (
    <>
      <FormControl component="form" sx={formStyles.wrapper}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          sx={formStyles.formItem}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={formStyles.formItem}
        />
        <TextField
          id="message"
          label="Your Message"
          multiline
          rows={8}
          variant="outlined"
          sx={formStyles.formItem}
        />
        <Button variant="contained" type="submit" sx={formStyles.button}>
          Send Message
        </Button>
      </FormControl>
    </>
  );
}
