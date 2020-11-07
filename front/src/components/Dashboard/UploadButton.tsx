import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import { uuid } from 'uuidv4';

import FileBoxButton from './Buttons/FileBoxButton';
import InputButton from './Buttons/InputButton';

dotenv.config();
const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};
const UploadButton: React.FC = () => {
	const [file, setFile] = useState('');
	const handleChange = (e: any) => {
		const file = e.target.files[0];
		setFile(file);
		const formData = new FormData();
		formData.append('file', file); // appending file
		axios
			.post('http://localhost:8080/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then(async (res) => {
				const studyData = res.data.data;
				const studyGroupId = '73a9c2a5-6954-44e9-b1c8-99c5c85c8f9e';
				const user = await axios.get(`${process.env.REACT_APP_DB_LAYER}/studydata/bystudy/${studyGroupId}`);
				const week = user.data.data.length + 1;
				const body = {
					id: uuid(),
					week,
					date: Date.now(),
					studyGroupId,
					slideInfo: studyData,
				};
				const sss = await axios.post(`${process.env.REACT_APP_DB_LAYER}/studydata`, JSON.stringify(body), config);
				console.log(sss);
			})
			.catch((err) => console.error(err));
	};
	return (
		<FileBoxButton>
			<label htmlFor='ex_file'> 자료 업로드</label>
			<InputButton type='file' id='ex_file' onChange={handleChange} />
		</FileBoxButton>
	);
};
export default UploadButton;
