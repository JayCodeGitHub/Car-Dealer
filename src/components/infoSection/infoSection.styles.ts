export const infoSectionStyles = {
    wrapper: {
        display: "flex",
        alignItems: "center",
        padding: { xs: "4rem 0", md: "0" },
        justifyContent: "center",
        height: { xs: "auto", md: "35rem" },
        flexDirection: { xs: "column", md: "row" },
        margin: { xs: "0", md: "2rem 0" },
    },
    wrapperSecondary: {
        display: "flex",
        alignItems: "center",
        padding: { xs: "4rem 0", md: "0" },
        justifyContent: "center",
        height: { xs: "auto", md: "35rem" },
        flexDirection: { xs: "column", md: "row-reverse" },
        margin: { xs: "0", md: "2rem 0" },
    },
    imgWrapper: {
        width: { xs: "100%", md: "50%" },
        borderRadius: "0.5rem",
        overflow: "hidden",
    },
    textWrapper: {
        width: { xs: "100%", md: "50%" },
        height: { xs: "auto", md: "100%" },
        padding: { xs: "4rem 2rem", md: "3rem 5rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    },
    title: {
        marginLeft: "1rem",
        fontSize: { xs: "1.8rem", lg: "1.8rem", xl: "2.5rem" },
        padding: { xs: "2rem 0", md: "0" },
        fontWeight: "700",
    },
    description: {
        fontSize: { xs: "1.2rem", lg: "1.1rem", xl: "1.4rem" },
        color: "#706f7b",
    },
    button: {
        mt: 3,
        backgroundColor: "#f50057",
        border: "solid transparent 2px",
        color: "white",
        fontSize: "1rem",
        "&:hover": {
          border: "solid #f50057 2px",
          color: "black",
          backgroundColor: "transparent",
        },
    }
};