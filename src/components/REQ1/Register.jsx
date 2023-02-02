import React, {useState} from 'react';

export const Register =(props) =>{
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [name,setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }
    
    return(
        <div className='auth-form-container'>
            <h1 className='tittle'>REGISTRATE EN RESTDELUXE</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombres Completo</label>
                <input value ={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder='Nombre Completo'/>
                <label htmlFor = "email" >Correo</label>
                <input value ={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder = "tucorreo@hotmail.com" id="email" name="email"/>
                <label htmlFor = "password" >Contraseña</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type = "password" placeholder = "*************" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button className ="link-btn" onClick={() => props.onFormSwitch("login")}>¿Ya tienes una cuenta? Inicia Sesion</button>
        </div>
    )
}