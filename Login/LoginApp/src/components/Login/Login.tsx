import { ChangeEvent, FormEvent, useState } from 'react'
import './Login.css'
import Input from '../SharedComponents/Input/Input';
import SubmitButton from '../SharedComponents/SubmitButton/SubmitButton';
import loginUser from '../../use-cases/login_user';

const Login = (): JSX.Element => {
  const [data, setData] = useState({email: '', password: ''});

  const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = element.target
    setData({...data, [name]: value});
  };

  const fetchUserData = async () => {
    const isUser = await loginUser(data);
    console.log(isUser);
    if (isUser) {
      window.location.href = '/register';
    } else {
      window.alert('User incorrect');
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchUserData();
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input className='input-email border-1' key={1} type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} isRequired={true} />
        <Input className='input-pwd border-1' key={2} type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} isRequired={true} />
        <SubmitButton className='login-btn btn btn-warning' label='Login'/>
      </form>
    </div>
  )
}

export default Login
