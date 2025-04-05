import { useState, useEffect } from 'react';
import './App.css';

// 4 - custom hook
import { useFetch } from './hooks/useEffect';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const {data: items} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // aula 1 - regatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, []); // O array vazio garante que a requisição seja feita apenas uma vez

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    
  // 3 - Carregamento dinamico
  const addeproduct = await res.json();
  setProducts((prevProducts) => [...prevProducts, addeproduct]);
  };

  return (
    <>
      <div className='App'>
        <h1>Lista de produtos:</h1>
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
        </ul>
        <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço:
              <input type="number" value={price} name='price' onChange={(e) => setPrice(e.target.value)} />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App