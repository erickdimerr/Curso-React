import React from 'react'

const UserDetails = () => {

    const persons = [
        { id: 1, name: 'João', age: 22, profession: 'dev' },
        { id: 2, name: 'Maria', age: 12, profession: 'professor' },
        { id: 3, name: 'José', age: 43, profession: 'dentista' },
    ]

    return (
        <div>
            <h1>Lista de pessoas</h1>
            <ul>
                {persons.map((person) => (
                    <li key={persons.id}>
                        {person.name} - {person.age} - {person.profession}
                        {person.age >= 18 ? (
                            <p>{person.name} é maior de idade</p>
                        ) : (
                            <p>{person.name} é menor de idade</p>

                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserDetails