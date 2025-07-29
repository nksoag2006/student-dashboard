import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
      {submitted && <p>Hello, {name}!</p>}
    </div>
  );
};

export default Form;
