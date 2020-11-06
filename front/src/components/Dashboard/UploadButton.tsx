import React, { useState } from 'react';
import dotenv from 'dotenv';
import axios from 'axios';

import FileBoxButton from './Buttons/FileBoxButton';
import InputButton from './Buttons/InputButton';

dotenv.config();

const UploadButton: React.FC = () => {
	const [file, setFile] = useState('');
	const handleChange = (e: any) => {
		const file = e.target.files[0];
		setFile(file);
		const formData = new FormData();
		formData.append('file', file); // appending file
		axios
			.post('http://localhost:8080/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
			.then((res) => {})
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
