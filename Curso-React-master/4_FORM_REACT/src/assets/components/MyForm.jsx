import { useState } from 'react';
import './MyForm.css';

const MyForm = ({user}) => {
    //Controlled inputs
    //Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio,] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o formulario')
        console.log(name, email, bio, role)

        setName('')
        setEmail('')
        setBio('')

    }

    return (
        <div>
            {/* Envio de form */}
            {/* Criação form */}
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" 
                    name='name' 
                    value={name}
                    placeholder='Digite seu nome' 
                    onChange={handleName} />
                </div>

                {/* Label envolvendo input (Jeito usado)*/}
                <label htmlFor="">
                    <span>Email: </span>
                    {/* Simplificação de manipulação de state */}
                    <input type="email" 
                    name='email' 
                    value={email} 
                    placeholder='Digite seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>

                {/* textarea */}
                <label htmlFor="">
                    <span>Bio: </span>
                    <textarea name="bio" placeholder='Descrição do Usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/* Select */}
                <label htmlFor="">
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="Submit" value='Enviar' />
            </form>
        </div>
    )
}

export default MyForm