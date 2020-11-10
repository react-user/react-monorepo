import { Container, Grid, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { PageImageProps } from "./page-image.interfaces";
import { ReactComponent as EmptyGlass } from "../../assets/icons/empty-glass.svg";
import { pageImageStyles } from "./page-image.styles";

export const PageImage: FunctionComponent<PageImageProps> = (
    props: PageImageProps
) => {
    const pageImageClasses = pageImageStyles();

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                direction="column"
                justify="center"
            >
                <Grid item>
                    <EmptyGlass width={100} />
                </Grid>

                <Grid item>
                    <Typography
                        className={pageImageClasses.text}
                        color="primary"
                        variant="h1"
                    >
                        {props.text}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};
