import { createStyles, makeStyles } from "@material-ui/core";

export const pageContainerStyles = makeStyles(
    createStyles({
        innerContainer: {
            marginBottom: "12px",
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "24px",
        },
        outerContainer: {
            flexGrow: 1,
            border: "1px solid #000000",
        },
    })
);
