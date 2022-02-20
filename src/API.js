import axios from 'axios';
import { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function API() {
	const [data, setData] = useState({ names: [] });
	const [name, setName] = useState("ピカチュウ");
	const [hits, setHits] = useState("..o..");
	const [genLess, setGenLess] = useState("1");
	const [genGreater, setGenGreater] = useState("8");
	function buttonClick(e) {
		axios.get(
			`https://pokewordle-solver-xwt3k7t6mq-uc.a.run.app/poke?name=${name}&hits=${hits}&less=${genLess}&greater=${genGreater}`,
			// 'http://hn.algolia.com/api/v1/search?query=redux',
			// 'http://localhost:8080/poke?name=%E3%82%AB%E3%82%A4%E3%83%AA%E3%83%A5%E3%83%BC&hits=o.x..',
		)
			.then((result) => {
				console.log(result.data.response.names);
				setData(result.data.response);
			})
			.catch((err) => {
				const errorMessage = err.response.data.response.error || err.message;
				console.log(errorMessage);
				alert(errorMessage);
			})
			;
	}

	return (
		<>
			<Stack
				sx={{ pt: 2, ml: 1, mr: 1 }}
				direction={{ xs: 'column', sm: 'row'}}
				spacing={{ xs: 2, sm: 2, md: 4}}
				justifyContent="center"
			>
				<TextField type="text" focused label="Pokemon name" defaultValue={name} onChange={e => setName(e.target.value)} />
				<TextField type="text" focused label="Hits" defaultValue={hits} onChange={e => setHits(e.target.value)} />
				<TextField type="text" focused label="Generation less than" defaultValue={genLess} onChange={e => setGenLess(e.target.value)} />
				<TextField type="text" focused label="Generation greater than" defaultValue={genGreater} onChange={e => setGenGreater(e.target.value)} />
			</Stack>
			<Stack
				sx={{ pt: 4, mb: 5 }}
				direction="row"
				spacing={2}
				justifyContent="center"
			>
				<Button variant="contained" onClick={buttonClick}>Search</Button>
			</Stack>

			<Grid item xs={12} ml={4} mr={4} mb={4}>
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}} elevation={4}>
					<Typography component="h2" variant="h6" color="primary" gutterBottom>
						Search Results
					</Typography>
					<Stack
						sx={{ pt: 1 }}
						direction="row"
						justifyContent="center"
					>
						<List>
							{data.names.map(item => (
								<ListItem key={item}>
									<ListItemText primary={item} />
								</ListItem>
							))}
						</List>
					</Stack>
				</Paper>
			</Grid>
		</>
	);
}

export default API;
