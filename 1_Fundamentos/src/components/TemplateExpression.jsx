import React from 'react'

const TemplateExpression = () => {

    const name = "Érick"
    const funcao = {
        age: 22,
        job: "dev",
    };

  return (
    <div>
        <h1>Olá {name}, Tudo bem?</h1>
        <p>Sua profissão é {funcao.job}</p>
        <p>{5 + 5}</p>
    </div>
  )
}

export default TemplateExpression