import axios from 'axios';
import { useState, useRef, useReducer } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


function API() {
	const [data, setData] = useState({ names: [] });
	const [name, setName] = useState("ピカチュウ");
	const [genLess, setGenLess] = useState("1");
	const [genGreater, setGenGreater] = useState("8");
	const [split, setSplit] = useState(name.split(''));
	const bgcolors = ['#757575', '#cab458', '#4baf4f'];
	const inputRef = useRef(null);
	const [inputError, setInputError] = useState(false);
	const [states, setStates] = useState([0, 0, 0, 0, 0]);
	function buttonClick(e) {
		const h = ['.', 'x', 'o'];
		let tmp = "";
		states.map((v, i) => {
			tmp += h[v];
		});
		axios.get(
			`https://pokewordle-solver-xwt3k7t6mq-uc.a.run.app/poke?name=${name}&hits=${tmp}&less=${genLess}&greater=${genGreater}`,
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
	const [any, forceUpdate] = useReducer(num => num + 1, 0);
	function handleChange(){
			forceUpdate();
	}
	const changeName = (e) => {
		if (inputRef.current) {
			const ref = inputRef.current;
			if (!ref.validity.valid) {
				setInputError(true);
			} else {
				setInputError(false);
			}
		}
		setName(e.target.value);
		setSplit(e.target.value.split(''));
	};

	const changeColor = (i) => {
		let new_states = states;
		if (states[i] === 0) {
			new_states[i] = 1;
		} else if (states[i] === 1) {
			new_states[i] = 2;
		} else {
			new_states[i] = 0;
		}
		setStates(new_states);
		handleChange();
	}

	const commonStyles = {
		bgcolor: 'background.paper',
		borderColor: 'text.primary',
		m: 1,
		width: '5rem',
		height: '5rem',
	};
	return (
		<>
			<Stack direction="row" justifyContent="center">
			{split.map((v, i) => (
					<Box sx={{ ...commonStyles, borderRadius: 3, bgcolor: bgcolors[states[i]] }} key={v} onClick={() => changeColor(i)}>
						<Typography variant="h2" align="center" color="#ffffff" >
							{v}
						</Typography>
					</Box>
				))}
			</Stack>
			<Stack
				sx={{ pt: 2, ml: 1, mr: 1 }}
				direction={{ xs: 'column', sm: 'row' }}
				spacing={{ xs: 2, sm: 2, md: 4 }}
				justifyContent="center"
			>
				<TextField type="text" focused error={inputError} inputRef={inputRef} inputProps={{ minLength: 5, maxLength: 5 }} label="Pokemon name" defaultValue={name} onChange={changeName} />
				<FormControl focused sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-label">から</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={genLess}
						label="genLess"
						onChange={e => setGenLess(e.target.value)}
					>
						<MenuItem value={1}>赤緑</MenuItem>
						<MenuItem value={2}>金銀</MenuItem>
						<MenuItem value={3}>ルビサファ</MenuItem>
						<MenuItem value={4}>ダイパ</MenuItem>
						<MenuItem value={5}>BW</MenuItem>
						<MenuItem value={6}>X・Y</MenuItem>
						<MenuItem value={7}>サン・ムーン</MenuItem>
						<MenuItem value={8}>剣盾</MenuItem>
					</Select>
				</FormControl>
				<FormControl focused sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-label">まで</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={genGreater}
						label="genGreater"
						onChange={e => setGenGreater(e.target.value)}
					>
						<MenuItem value={1}>赤緑</MenuItem>
						<MenuItem value={2}>金銀</MenuItem>
						<MenuItem value={3}>ルビサファ</MenuItem>
						<MenuItem value={4}>ダイパ</MenuItem>
						<MenuItem value={5}>BW</MenuItem>
						<MenuItem value={6}>X・Y</MenuItem>
						<MenuItem value={7}>サン・ムーン</MenuItem>
						<MenuItem value={8}>剣盾</MenuItem>
					</Select>
				</FormControl>
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
				<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} elevation={4}>
					<Typography component="h2" variant="h6" color="primary" gutterBottom>
						Search Results
					</Typography>
					<Stack
						sx={{ pt: 1 }}
						direction="row"
						justifyContent="center"
					>
						<List>
							<Divider />
							{data.names.map(item => (
								<>
									<ListItem key={item}>
										<ListItemText primary={item} />
									</ListItem>
									<Divider />
								</>
							))}
						</List>
					</Stack>
				</Paper>
			</Grid>
		</>
	);
}

export default API;
