export const navbarStyles = {
    outerWrapper: {
        padding: { xs: "0 1rem", md: "0 5rem" },
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: "20",
    },
    logo: {
        mr: 2,
        display: { xs: "flex", md: "flex" },
        fontWeight: 700,
        letterSpacing: ".3rem",
        fontSize: "1.5rem",
        color: "#f50057",
        textDecoration: "none",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    wrapper: {
        display: { xs: "none", md: "flex" }
    },
    navLink: {
        padding: "0 1rem"
    },
    navButtonActive: {
        my: 2,
        color: "#f50057",
        display: "block" 
    },
    navButton: {
        my: 2,
        color: "black",
        display: "block"
    },
    navButtonSecondary: {
        my: 2,
        color: "white",
        display: "block"
    },
    hamburger: {
        color: "black",
        display: { xs: "flex", md: "none" }
    },
    hamburgerSecondary: {
        color: "white",
        display: { xs: "flex", md: "none" }
    },
    drawer: {
        width: "60%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20vh 0 35vh 0",
    },
    navButtonActiveMobile: {
        my: 2,
        color: "#f50057",
        display: "block" 
    },
    navButtonMobile: {
        my: 2,
        color: "black",
        display: "block"
    }
};