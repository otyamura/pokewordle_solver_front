import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import API from './API.js';

const Readme = () => {
	return (
		<>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Pokemon wordle solver
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Pokemon wordle solver
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
							これはPokemon wordleで出てきた情報を頼りに候補のポケモンを出力するサイトです。
            </Typography>
          </Container>
        </Box>
				</main>
		</>
	);
}

export default Readme;