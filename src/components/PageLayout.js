import React, { useEffect } from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { useMedia } from 'react-media';

import { GLOBAL_MEDIA_QUERIES } from '../constants';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-170790955-1');

const baseGridStyle = {
  templateAreas: `
  "header"
  "main"
  "footer"
`,
  templateRows: 'auto 1fr auto',
  templateColumns: '1fr',
};

const getGridStyles = (sidebar, smallOrMedium) => {
  if (sidebar) {
    if (smallOrMedium) {
      return baseGridStyle;
    }
    return {
      templateAreas: `
      "header header"
      "sidebar main"
      "footer footer"`,
      templateRows: 'auto 1fr auto',
      templateColumns: smallOrMedium ? '1fr' : '200px 1fr',
    };
  } else {
    return baseGridStyle;
  }
};

export const PageLayout = ({ header, main, footer, sidebar }) => {
  const { small, medium } = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const smallOrMedium = small || medium;

  const gridStyles = getGridStyles(sidebar, smallOrMedium);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Grid h="100%" {...gridStyles}>
      {header && (
        <Grid area="header" position="sticky" top={0} zIndex={10}>
          {header}
        </Grid>
      )}
      {sidebar && !smallOrMedium && <Grid area="sidebar">{sidebar}</Grid>}
      <Grid area="main">
        <Box>{main}</Box>
      </Grid>
      {footer && <Grid area="footer">{footer}</Grid>}
    </Grid>
  );
};
