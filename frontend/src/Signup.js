import React,{useState} from 'react';

import './App.css';

import {Link, useNavigate} from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {
    
    const [values, setValues] = useState({nombre:'',apelli_pat:'',apelli_mat:'',dni:'',telefono:''
        ,fecha_nac:'',nacionalidad:'',genero:'',  email:'', password:''})
    
    const navigate = useNavigate();

    const [errors,setErrors] = useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.nombre === "" &&errors.email==="" && errors.password ===""){
            axios.post("http://localhost:3008/signup", values)
            .then(res=>{
                navigate('');
            })
            .catch(err=>console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Registrarse</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Nombre</strong></label>
                        <input type="text" placeholder='Ingresa tu Nombre' name='nombre' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Apellido Paterno</strong></label>
                        <input type="text" placeholder='Ingresa tu Apellido Paterno' name='apelli_pat'onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Apellido Materno</strong></label>
                        <input type="text" placeholder='Ingresa tu Apellido Materno' name='apelli_mat' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>DNI</strong></label>
                        <input type="number" placeholder='Ingresa tu DNI'  name='dni' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Teléfono</strong></label>
                        <input type="number" placeholder='Ingresa tu Teléfono' name='telefono' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Fecha de nacimiento</strong></label>
                        <input type="date" placeholder='Ingresa tu Fecha de nacimiento' name='fecha_nac' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Nacionalidad</strong></label>
                        <input type="text" placeholder='Ingresa tu Nacionalidad' name='nacionalidad' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Género</strong></label>
                        <input type="text" placeholder='Ingresa tu Género' name='genero' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.nombre && <span className='text-danger'>{errors.nombre}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Correo</strong></label>
                        <input type="text" placeholder='Ingresa tu Correo' name='email' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Contraseña</strong></label>
                        <input type="password" placeholder='Ingresa tu Contraseña' name='password' onChange={handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Registrarte</strong></button>
                    <p>Te recomendamos leer nuestra política de privacidad</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text decoration-none'>¿Ya tienes una cuenta? Logeate</Link>
                </form>
            </div>
        </div>
  );
}

export default Signup;
