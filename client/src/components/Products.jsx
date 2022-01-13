import React, { useEffect, useState } from 'react'
import Product from './Product'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { mobile, laptop, tablet, desktop } from '../responsive'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 50px;
    justify-content: center;
    ${desktop({ width: "100%" })}
    
`




const  Products = ({category,filters,sort}) => {

    const [products,setProducts]= useState([]);
    const [filteredProducts,setFilteredProducts]= useState([]);
    useEffect(()=>{
        let unmounted = false;
        const getProducts = async() =>{

           
            try{
                const res = await axios.get( category ? `/api/products?category=${category}` : `/api/products`,{
                    headers: { "token": process.env.REACT_APP_TOKEN}

                    })

                    if (!unmounted) {
                   
                setProducts(res.data)
                setFilteredProducts(res.data)
                console.log(res.data)

            }
            }catch(error){
                console.log(error)  
            }
           
        }
      
        getProducts()


        return () => { unmounted = true };

    },[category])

    console.log(products)

    useEffect(() => {
    
        let unmounted = false;
        console.log(products)
        console.log(filteredProducts)
        if(category && !unmounted ){

            const filtered = products.filter((item)=> item.brand ==filters.brand && item.categories == filters.category )
            // setFilteredProducts(
            //     products.filter((item)=>{
            //         Object.entries(filters).every(([key,value])=> item[key].includes(value))
            //     })
            // )
            // check
            console.log(filtered)
        }
        return () => { unmounted = true };
    }, [category,filters,products])

    console.log(filteredProducts)
    return (
        <Container>
            {filteredProducts.map((item)=>(
                <Product item={item} key={item.id} />
                ))}
        </Container>
    )
}

export default Products
