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
    img: {
        width: { xs: "90vw", md: "37.5vw" },
        height: { xs: "60vw", md: "25vw" },
        borderRadius: "0.5rem",
        objectFit: "contain",
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
        color: "#4B4A54" 
    },
    button: {
        mt: 3,
        backgroundColor: "#FF055E",
        border: "solid transparent 2px",
        color: "white",
        fontSize: "1rem",
        "&:hover": {
          border: "solid #FF055E 2px",
          color: "black",
          backgroundColor: "transparent",
        },
    }
};