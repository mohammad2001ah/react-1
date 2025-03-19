import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import { useState } from 'react';

export default function CardComponent() {
  const [cardData, setCardData] = useState([
    { title: "jjjjj", descreption: "lkmmimii" }
  ]);
  const [formData, setFormData] = useState({ title: '', descreption: '' });

  const handelChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handelAddCard = (event) => {
    event.preventDefault();
    setCardData([...cardData, formData]);
  };

  return (
    <>
      <form onSubmit={handelAddCard}>
        <input type='text' name='title' onChange={handelChange} placeholder='text' />
        <input type='text' name='descreption' onChange={handelChange} placeholder='descreption' />
        <button type='submit'>Add</button>
      </form>

      <div className='cards-container'>
        {cardData.map((cardData, index) => (
          <div className="card" key={index}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{cardData.title}</h5>
              <p className="card-text">{cardData.descreption}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
