import React,{useState,useEffect} from 'react'
import Card from './Card';
import styled from 'styled-components';
import { useAuth } from '../store/auth';
import Logedsec from './Logedsec';

const Hero = () => {

    const { loggedIn }=useAuth()
    console.log(loggedIn)
    const [products, setProduct] = useState([{}]);
    const getProducts = async () => {
        try {
            let res = await fetch('https://dummyjson.com/products');
            let data = await res.json();
            setProduct(data.products);
            console.log(products)
        } catch (err) {
            console.log("Error", err)
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    if (!products) {
        return <p>Loading...</p>; 
    }
  
    return (!loggedIn? <Logedsec/>
        :<Wrapper>
            <h1 style={{ textAlign: "center" }}>Products</h1>
            <div className="prductpage" >
            {products && products.map((product) => (
                <Card
                    key={product.id}
                    image={product.images && product.images[0]}
                    title={product.title}
                    price={product.price}
                    review={product.rating}
                    id={product.id}
                />
            ))}
            </div>
      
        </Wrapper>
    );
}

const Wrapper=styled.div`
width:94%;
margin:0 auto;
display: flex;
flex-direction:column;
.productpage{
    display: flex;
    flex-wrap: wrap;
}

// width:10rem;
`
export default Hero