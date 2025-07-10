import React, { useEffect, useState } from 'react'
import '../App.css'

const Signup = () => {

  const [signData, setSignData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const [error, setError] = useState("");

  const [record, setRecord] = useState(() => {
    const savedData = localStorage.getItem("userRecords");
    return savedData ? JSON.parse(savedData) : [];
  });


  const handleChange = (e) => {
    setSignData({ ...signData, [e.target.name]: e.target.value });

    if (error) {
      setError("");
    }
  }

  const handleSubmit = (e) => {

    if (signData.password !== signData.cpassword) {
      setError("recorrect your Password");
      return;
    }

    const arr = [...record, signData];
    setRecord(arr);
    setSignData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    });
    setError("");
    window.location.href = "/Login";
  };

  useEffect(() => {
    localStorage.setItem("userRecords", JSON.stringify(record));
  }, [record]);


  return (
    <div className='signup' style={{ overflow: 'hidden' }}>
      <div className='container-fluied bg-light mx-auto p-4 min-h-screen flex justify-center item-center'>
        <div >
          <form className='bg-transparent flex flex-col items-center mt-12 border border-gray-300 rounded-md shadow-lg p-4 m-c-margin space-y-4'>
            <h1 className='text-gray-50 text-3xl font-bold text-center mb-4S font-serif'>Signup</h1>
            <input type='firstname' id='fname' name='firstname' value={signData.firstname} onChange={(e) => handleChange(e)} placeholder='First Name' className='learn' />
            <input type='lastname' id='lname' name='lastname' value={signData.lastname} onChange={(e) => handleChange(e)} placeholder='Last Name' className='learn' />
            <input type='email' id='email' name='email' value={signData.email} onChange={(e) => handleChange(e)} placeholder='E-mail' className='learn' />
            <input type='password' id='password' name='password' value={signData.password} onChange={(e) => handleChange(e)} placeholder='Password' className='learn' />
            <input type='password' id='cpassword' name='cpassword' value={signData.cpassword} onChange={(e) => handleChange(e)} placeholder='Confirm Password' className='learn' />
            <h3 className='text-sm text-gray-50'>Alredy have an account? <a href='/Login' className='font-bold'>Log in</a></h3>
            <button type='button' onClick={() => handleSubmit()} className="bg-transparent border border-gray-50 text-gray-50 mt-3 mb-3 font-semibold py-1 px-4 rounded transition duration-300 ease-in-out hover:bg-black-700 hover:scale-105">
              Submit
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
