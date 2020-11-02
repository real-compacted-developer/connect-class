import React, { useState, useRef } from 'react';
import Header from "../components/MainPage/Header";
import dotenv from 'dotenv';
import styled from 'styled-components';
import axios from 'axios';

dotenv.config();
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StudyDataRoomPage: React.FC = () => {
    const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
    const handleChange = (e : any) => {
      const file = e.target.files[0]; // accesing file
      setFile(file); // storing file
    }
    const uploadFile = () => {
      const formData = new FormData();
      formData.append('file', file); // appending file
      axios.post('http://localhost:8080/upload', formData, { headers: { 'Content-Type': "multipart/form-data" } }).
      then(res => {
      }).catch(err => console.error(err))
    }
	return (
		<Wrapper>
			<h1>스터디 자료방 Page</h1>
      <div>
      <div className="file-upload">
        <input type='file' onChange={handleChange} />
        <button onClick={uploadFile} className="upbutton"> Upload </button>
      </div>
    </div >
		</Wrapper>
	);
};

export default StudyDataRoomPage;
