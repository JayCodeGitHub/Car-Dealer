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
    },
    button: {
        mt: 3,
        backgroundColor: "#f50057",
        border: "solid transparent 2px",
        "&:hover": {
          border: "solid #f50057 2px",
          color: "black",
          backgroundColor: "transparent",
        },
    }
};