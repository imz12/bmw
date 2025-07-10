import React, { useEffect, useState } from 'react'

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("userRecords");
    setRecords(savedData ? JSON.parse(savedData) : []);
  }, []);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

    if (error) {
      setError("");
    }
  };


  const handleSubmit = (e) => {
  // e.preventDefault();

  const user = records.find(
    (record) =>
      record.email === loginData.email && record.password === loginData.password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    // ✅ redirect to home page
    alert("Login Successully");
    window.location.href = "/";
  } else {
    setError("Invalid email or password");
  }
};
  
  return (
    <div className='loginp'>
      <div className='container-fluied mx-auto p-4 min-h-screen flex justify-center items-center'>
        <div>
          <form className='bg-tranparent flex flex-col items-center mt-auto border border-gray-50 rounded-md shadow-lg p-4 space-y-4'>
            <h1 className='text-gray-50 text-3xl font-bold text-center mb-4S font-serif'>Login Page</h1>
            {error && <p className="text-red-500">{error}</p>}
            <input type='email' id='email' name='email' value={loginData.email} onChange={(e) => handleChange(e)} placeholder='E-mail' className='learn' />
            <input type='password' id='password' name='password' value={loginData.password} onChange={(e) => handleChange(e)} placeholder='Password' className='learn' />
            <button type='button' onClick={() => handleSubmit()} className="bg-transparent border border-gray-50 text-gray-50 mt-3 mb-3 font-semibold py-1 px-4 rounded transition duration-300 ease-in-out hover:bg-black-700 hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
