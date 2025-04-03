import React, { useState } from 'react'
import Header from './Header'
import useFetch from '../hooks/useFetch'
import { Button, Grid, Modal } from '@mui/material'
import { Link } from 'react-router-dom'
import './Home.css'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import ProductDetails from './ProductDetails'
import { Close } from '@mui/icons-material'

const modal_style = {
  position: 'relative',
  float:'right',
  top: '55%',
  left: '15%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '95%',
  backgroundColor: '#ffffff',
  border: '1px solid black',
  borderRadius:'9px'
}

const Home = () => {
  const products = useFetch(`https://api.escuelajs.co/api/v1/products`)
  // console.log(products.data);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  
  return (
      <>
      <Header />
      <div className='container' style={{ marginTop: '90px' }} >
        <h3 style={{ color: 'black', textAlign: 'center' }}>Home</h3>
          
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input placeholder="Search" style={{ textAlign: 'center',height:'5vh',width:'20%', border:'1px solid grey',borderRadius:'5px' }} />
        </div>
      <div style={{margin:'70px'}}>
        <Grid container spacing={18} >
          {products.data?.map((product) => (

            <Grid item container key={product.id} >
              <div style={{display:'block'}}>
                <Link style={{ color: 'black', textDecoration: 'none', display: 'block' }} to='#' onClick={(e) => { e.preventDefault(); setOpen(true); setData(product.id)}}>
                <img src={product.images} className="background-image" alt={product.title} />
                  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <p className="title">{product.title}</p>
                  <p className="title"><b>{product.price}$</b></p>
                  </div>
                 
                </Link>
             
                  {/* <AddCircleOutlineRoundedIcon className='overlay-image' style={{ color: 'white' }} /> */}
                <Button className="overlay-image">
                  <AddCircleOutlineRoundedIcon  />
                </Button>
                <span className="category">{product.category.name}</span>
              </div>
      
            </Grid>
          ))}
            
          </Grid>
        </div>
      </div>

      <Modal open={open} >
        <div style={modal_style}>
          <div style={{float:'right' }}>
            <Button onClick={() => setOpen(false)}><Close sx={{ fontSize: '30px'}} /></Button>
          </div>
          <ProductDetails data={data} />
        </div>
      </Modal>
      </>
  )
}

export default Home