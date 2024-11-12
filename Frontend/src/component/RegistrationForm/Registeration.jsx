import Banner from '/images/banner2.png'
import React, { useState } from 'react';
import './Registeration.css'
const Registeration = ({ onAdd }) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !dob) {
      setError('All fields are required');
      return;
    }
    
    try {
      const newUser = { name, email, dob };
      onAdd(newUser);  
    setName('');
    setEmail('');
    setDob('');
    setError('');
    } catch (err) {
      setError('Failed to add user');
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setDob('');
    setError('');
  };
  return (
    <section className="registeration">
        <h2>Registration</h2>
        {error && <div className="error">{error}</div>}
        <section className='details'>
        <div className="about">
            <img src={Banner}/>
        </div>
        <form  action="" onSubmit={handleSubmit}>
            <div className='inputbox'>
            <label htmlFor="">Name</label>
            <input className="form-input" type="text" placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='inputbox'>
            <label htmlFor="">Email</label>
            <input className="form-input" type="email" placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='inputbox'>
            <label htmlFor="">Date of Birth</label>
            <input className="form-input" type="date" value={dob}
          onChange={(e) => setDob(e.target.value)} />
            </div>
            <div className='buttons'>
                <button className="form-button">Submit</button>
                <button className="form-button" onClick={handleReset}>Reset</button>
            </div>
        </form>
    </section>
    </section>
  )
}

export default Registeration
