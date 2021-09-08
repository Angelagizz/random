import './App.css';
import React, {useState, useEffect} from "react"
import { getData } from './Service';

function App() {
  const [detail, setDetail] = useState("")
  const [email, setEmail] = useState("")

  const handleClick = (e) => {
    e.preventDefault();
    getData()
      .then(response => {
        console.log(response);
        setDetail(response.results)
    
      })
      .catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
        getData()
        .then((response) => {
          setDetail(response.results)})
        .catch((error) => {console.log(error)})
    }, [])
    console.log(detail)


  return (
    <div className="App">
      {[detail].map((item, id) => (
      <div key="{item.id}">
      <div className="container">
        <div className="box-user">
          <img 
            src={item[0].picture.large} 
            alt="photo"
            width="100"
            height="100"></img>
          <p>{item[0].name.first}</p>
        </div>
        <div className="contact-list">
          <div className="list">
            <img 
            src="https://screenshots.imgix.net/mui-org/material-ui-icons/email-outlined/~v=3.9.2/8b0aab47-c3e8-4973-b845-d98e13ded482.png?ixlib=js-1.2.0&s=c18e4f4e8e37eb84cc81aa85a3ff53e8"
            width="55"
            height="55"
            ></img>
            <p>{item[0].email}</p>
          </div>
          <div className="list">
            <img 
            src="https://www.nicepng.com/png/detail/11-118602_phone-logo-square-png.png"
            width="50"
            height="50"
            ></img>
            <p>{item[0].phone}</p>
          </div>
        </div> 
        <div className="button" onClick={(e) => handleClick(e)}>Next</div>
      </div>  
      </div>
     ))}
    </div>
  );
}

export default App;
