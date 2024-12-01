import React, { useState } from 'react';
import "../Login/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      if (response.status) {
        toast.success('ورود موفقیت‌آمیز بود!');
        navigate('/profile' , { replace: true });
      }
    } catch (error) {
      toast.error('ایمیل یا رمز عبور اشتباه است!');
    }
  };

  return (
    <div className="login-container">
      <Toaster />
      <form onSubmit={handleSubmit} className="form-box">
        <Link to="/">
          <img src="../src/image/full-vertical.svg" alt="Logo" />
        </Link>
        <div className="content-text">
          <h3>ورود | ثبت‌نام</h3><br />
          <div className="box-text">
            <p>سلام!</p>
            <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          </div>
        </div>
        <input type="text" placeholder="ایمیل" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="رمزعبور" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">ورود</button>
        <p className="text">ورود شما به معنای پذیرش شرایط دیجی‌کالا و قوانین حریم‌خصوصی است</p>
      </form>
    </div>
  );
}

export default Login;
