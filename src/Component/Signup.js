import React, { useEffect, useState } from 'react';
import '../App.css';
import SignBg from '../Component/img/Signup.jpg'; 

const Signup = () => {
  const [signData, setSignData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    cpassword: ''
  });

  const [error, setError] = useState('');

  const [record, setRecord] = useState(() => {
    const savedData = localStorage.getItem('userRecords');
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleChange = (e) => {
    setSignData({ ...signData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = () => {
    if (signData.password !== signData.cpassword) {
      setError('Passwords do not match. Please recheck.');
      return;
    }

    const arr = [...record, signData];
    setRecord(arr);
    setSignData({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cpassword: ''
    });
    setError('');
    window.location.href = '/Login';
  };

  useEffect(() => {
    localStorage.setItem('userRecords', JSON.stringify(record));
  }, [record]);

  return (
    <div
      className='signup'
      style={{
        overflow: 'hidden',
        backgroundImage: `url(${SignBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form className='bg-opacity-80 flex flex-col items-center border border-gray-300 rounded-md shadow-lg p-6 space-y-4 w-full max-w-md'>
        <h1 className='text-white text-3xl font-bold text-center font-serif'>Signup</h1>

        <input
          type='text'
          name='firstname'
          value={signData.firstname}
          onChange={handleChange}
          placeholder='First Name'
          className='learn'
        />
        <input
          type='text'
          name='lastname'
          value={signData.lastname}
          onChange={handleChange}
          placeholder='Last Name'
          className='learn'
        />
        <input
          type='email'
          name='email'
          value={signData.email}
          onChange={handleChange}
          placeholder='Email'
          className='learn'
        />
        <input
          type='password'
          name='password'
          value={signData.password}
          onChange={handleChange}
          placeholder='Password'
          className='learn'
        />
        <input
          type='password'
          name='cpassword'
          value={signData.cpassword}
          onChange={handleChange}
          placeholder='Confirm Password'
          className='learn'
        />

        {error && <p className='text-red-600 text-sm'>{error}</p>}

        <h3 className='text-sm text-white'>
          Already have an account?{' '}
          <a href='/Login' className='font-bold text-blue-600 hover:underline'>
            Log in
          </a>
        </h3>

        <button
          type='button'
          onClick={handleSubmit}
          className='bg-white text-black mt-2 font-semibold py-2 px-6 rounded hover:bg-black hover:text-white transition duration-300 ease-in-out'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
