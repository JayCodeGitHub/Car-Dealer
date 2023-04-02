import { FormControl, Button, TextField } from "@mui/material";

export default function Form() {
  return (
    <>
      <FormControl
        component="form"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "35rem",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          sx={{
            "& label.Mui-focused": {
              color: "red",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "red",
              },
              "&.Mui-focused fieldset": {
                borderColor: "red",
              },
            },
          }}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          sx={{
            "& label.Mui-focused": {
              color: "red",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "red",
              },
              "&.Mui-focused fieldset": {
                borderColor: "red",
              },
            },
          }}
        />
        <TextField
          id="message"
          label="Your Message"
          multiline
          rows={8}
          variant="outlined"
          sx={{
            "& label.Mui-focused": {
              color: "red",
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "red",
              },
              "&.Mui-focused fieldset": {
                borderColor: "red",
              },
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            mt: 3,
            backgroundColor: "#f50057",
            border: "solid transparent 2px",
            "&:hover": {
              border: "solid #f50057 2px",
              color: "black",
              backgroundColor: "transparent",
            },
          }}
        >
          Send Message
        </Button>
      </FormControl>
    </>
  );
}
