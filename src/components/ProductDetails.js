import React from 'react'
import useFetch from '../hooks/useFetch';
import { Grid } from '@mui/material';
import '../components/ProductDetails.css'


const ProductDetails = (props) => {
  // console.log('modal', props);
  // https://api.escuelajs.co/api/v1/products/70
  const product = useFetch(`https://api.escuelajs.co/api/v1/products/${props.data}`)
  // console.log('data',product.data);
  
    
  return (
    <>
      <div >
        <h3 className='textDescription'>Details</h3>
        
        <Grid container>
          <Grid item container key={product.data?.id}>
            <div style={{ display: 'flex', justifyContent:'center',flexDirection:'column' }}>
              <img
                src={product.data?.images?.[0]} 
                className="image"
                alt={product.data?.title}
              />
              <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column' }}>
                <p className="textDescription" ><b>{product.data?.price}$</b></p>
                <p className="textDescription"><b>{product.data?.title}</b></p>
                <p style={{textAlign:'center'}}>{product.data?.description}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default ProductDetails