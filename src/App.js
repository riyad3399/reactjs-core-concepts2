import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';



function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    
   },[])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{border: '2px solid purple', margin: '20px', borderRadius:'20px', backgroundColor:'lightpink'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10)

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }

  return (
    <div>
      <h1>count:{count} </h1>
      <button className="btn-plus" onClick={increaseCount}>Increase</button>
      <button className="btn-munis" onClick={increaseCount}>Decrease</button>
    </div>
  )

}



function Product(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price} </h4>
    </div>
  )
}

export default App;








{/* {
        products.map(product=> <Product name={product.name} price={product.price}></Product>)
      }
     <Product name="laptop" price="48000"></Product>
     <Product name="Phone" price="82000"></Product>
     <Product name="Watch" price="4200"></Product> 
    
     const products = [
     { name: 'laptop', price: 58000 },
     { name: 'phone', price: 94000 },
     { name: 'tablet', price: 22000 },
     { name: 'watch', price: 5000 }
   ]
    
    */}