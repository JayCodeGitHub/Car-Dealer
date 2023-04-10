export const formStyles = {
    wrapper: {
        width: { xs: "100%", md: "50%" },
        height: "35rem",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    formItem: {
        "& label.Mui-focused": {
            color: "#FF055E",
        },
        "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
                borderColor: "#FF055E",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#FF055E",
            },
        },
    },
    button: {
        mt: 3,
        backgroundColor: "#FF055E",
        border: "solid transparent 2px",
        "&:hover": {
          border: "solid #FF055E 2px",
          color: "black",
          backgroundColor: "transparent",
        },
    }
};