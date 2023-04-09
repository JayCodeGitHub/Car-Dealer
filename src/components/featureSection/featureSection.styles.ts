export const featureSectionStyles = {
    wrapper: {
        display: "flex",
        margin: { xs: "0 0 4rem 0", lg: "8rem 0" },
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: { xs: "2rem", lg: "4rem" },
        padding: "0",
    },
    title: {
        fontSize: { xs: "1.8rem", lg: "2rem", xl: "2.5rem" },
        padding: { xs: "2rem 0", md: "0" },
        fontWeight: "700",
    },
    stepsWrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "5rem", md: "0" },
    },
    step: {
        width: { xs: "90%", md: "25%" },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "1rem",
    },
    iconWrapper: {
        color: "#f50057",
        fontSize: "6rem"
    },
    description: {
        color: "#706f7b" 
    }
};