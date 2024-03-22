import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '../SharedComponents/Input/Input';
import SubmitButton from '../SharedComponents/SubmitButton/SubmitButton';
import './Register.css';
import registerUser from '../../use-cases/register_user';
import Label from '../SharedComponents/Label/Label';

const Register = (): JSX.Element => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        userName: '',
        password: ''
    });

    const handleChange = (element: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = element.target;
        setData({...data, [name]: value});
    }

    const fetchUserData = async () => {
        const result = await registerUser(data);
        if(result) {
            window.location.href = '/'
        }
        else{
            window.alert('User already exists');
        }
    }
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        fetchUserData()
    }

    return(
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className='row g-3'>
                    <div className='col-4'>
                        <Label htmlFor='idFirstName' text='First name'/><br />
                        <Input key={1} className='' type='text' idInput='idFirstName' name='firstName' value={data.firstName} onChange={handleChange} isRequired={true} />
                    </div>
                    <div className='col-4'>
                        <Label htmlFor='idLastName' text='Last name'/><br />
                        <Input key={2} className='' type='text' idInput='idLastName' name='lastName' value={data.lastName} onChange={handleChange} isRequired={true} />
                    </div>
                    <div className='col-4'>
                        <Label htmlFor='idBirthday' text='Birthday'/><br />
                        <Input key={3} className='' type='date' idInput='idBirthday' name='birthday' value={data.birthday} onChange={handleChange} isRequired={true} />
                    </div>
                    <div className='col-12'>   
                        <Label htmlFor='idEmail' text='Email'/><br />
                        <Input key={4} className='' type='email' idInput='idEmail' name='email' value={data.email} onChange={handleChange} isRequired={true} />
                    </div>
                    <div className='col-12'>
                        <Label htmlFor='idUserName' text='User name'/><br />
                        <Input key={5} className='' type='text' idInput='idUserName' name='userName' value={data.userName} onChange={handleChange} isRequired={true} />
                    </div>
                    <div className='col-12'>
                        <Label htmlFor='idPassword' text='Password'/><br />
                        <Input key={6} className='' type='password' idInput='idPassword' name='password' value={data.password} onChange={handleChange} isRequired={true} />
                    </div>
                </div>
                <hr />
                <SubmitButton className='btn btn-primary' label='Register'/>
            </form>
        </div>
    );
}

export default Register;