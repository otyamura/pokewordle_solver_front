import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
						pb: 4,
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
						<Typography variant="h5" align="center" color="text.secondary" paragraph>
							文字をクリックすると色が黒→黄→緑に変わります
						</Typography>
						<Typography variant="h6" align="center" color="text.secondary">
							黒色:検索に含めない
							<br></br>
							黄色:どこかに含まれる
							<br></br>
							緑色:同じ位置に含まれる
						</Typography>
					</Container>
				</Box>
			</main>
		</>
	);
}

export default Readme;