import React, { useState } from 'react';
import style from '../style/dataForm.module.css'; // Імпорт стилів

function DataForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Дані, що будуть відправлені:', formData);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      note: ''
    });
  };

  return (
  <div className={style.formSection}>
    <p className={style.title}>Особиста консультація</p>
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className={style.label}>Ім'я:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className={style.inputField} 
          />
        </div>
        <div>
          <label htmlFor="email" className={style.label}>Електронна пошта:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className={style.inputField}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className={style.label}>Номер телефону:</label>
          <input 
            type="tel" 
            id="phoneNumber" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            required 
            className={style.inputField} 
          />
        </div>
        <div>
          <label htmlFor="note" className={style.label}>Примітка:</label>
          <textarea 
            id="note" 
            name="note" 
            value={formData.note} 
            onChange={handleChange} 
            rows="4" 
            cols="50" 
            className={style.textAreaField} 
          />
        </div>
        <button type="submit" className={style.submitButton}>Відправити</button> {/* Додавання класу */}
      </form>
    </div>
  </div>
  );
}

export default DataForm;
