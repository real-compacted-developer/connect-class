import React, { useRef, useState } from 'react';
import axios from 'axios';
const FileUpload = () => {
  const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const el = useRef(); // accesing input element
  const handleChange = (e) => {
    setProgess(0)
    const file = e.target.files[0]; // accesing file
    console.log(file);
    setFile(file); // storing file
  }
  const uploadFile = () => {
    const formData = new FormData();
    formData.append('file', file); // appending file
    axios.post('http://localhost:8080/api/studyGroup/pdfToImage', formData, {
      headers: { 'Content-Type': "multipart/form-data" }
    }).then(res => {
      console.log(res);
      getFile({
        name: res.data.name,
        path: 'http://localhost:8080' + res.data.path
      })
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <div className="file-upload">
        <input type="file" ref={el} onChange={handleChange} />
        <button onClick={uploadFile} className="upbutton"> Upload </button>
        <hr />
        {/* displaying received image*/}
        {data.path && <img src={data.path} alt={data.name} />}
      </div>
    </div >
  );
}
export default FileUpload;