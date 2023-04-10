export const offersSectionStyles = {
    wrapper: {
        padding: { xs: "2rem ", md: "5rem 2rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
    },
    title: {
        fontSize: { xs: "1.8rem", lg: "2rem", xl: "2.5rem" },
        padding: { xs: "2rem 0", md: "0" },
        fontWeight: "700",
    },
    itemWrapper: {
        width: "100%",
        height: "35rem",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        padding: "4%",
        boxShadow: "0px 8px 16px 0px rgb(0 0 0 / 3%)",
        backgroundColor: "#f1f1f3",
    },
    img: {
        height: "40%",
        objectFit: "cover",
        borderRadius: "0.5rem",
        overflow: "hidden",
    },
    itemTitle: {
        fontSize: "2rem",
        marginLeft: "1rem"
    },
    price: {
        fontSize: "1.5rem" 
    },
    type: {
        fontSize: "1.2rem"
    },
    drive: {
        fontSize: "1.2rem"
    },
    buttonWrapper: {
        alignSelf: "center",
        width: { xs: "50%", md: "40%", lg: "20%" }
    },
    button: {
        mt: 3,
        width: "100%",
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