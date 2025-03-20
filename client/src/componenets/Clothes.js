import 'bootstrap/dist/css/bootstrap.min.css';
import "./smart.css";
import { useState } from 'react';

export default function CardComponent() {
  const [cardData, setCardData] = useState([
    { title: "jjjjj", description: "lkmmimii" }
  ]);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddCard = (event) => {
    event.preventDefault();
    setCardData([...cardData, formData]);
    setFormData({ title: '', description: '' }); // إعادة تعيين النموذج بعد الإضافة
  };

  return (
    <>
      <form onSubmit={handleAddCard}>
        <input 
          type='text' 
          name='title' 
          value={formData.title}
          onChange={handleChange} 
          placeholder='Title' 
        />
        <input 
          type='text' 
          name='description' 
          value={formData.description}
          onChange={handleChange} 
          placeholder='Description' 
        />
        <button type='submit'>Add</button>
      </form>

      <div className='cards-container'>
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
