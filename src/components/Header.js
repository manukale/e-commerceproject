import { AppBar, Button, Drawer } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Header.css'
import { MenuOpen } from '@mui/icons-material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useFetch from '../hooks/useFetch'

const Header = () => {

    const categories = useFetch(`https://api.escuelajs.co/api/v1/categories`)
    // console.log('category::', categories.data);
    

  return (
      <>

          <div className='container'>


              <AppBar style={{ height: '60px', backgroundColor: 'white', boxShadow: 'none', borderBlockEnd:'1px solid rgb(210, 212, 214)' }}>

                 

                  <div className='menu-button'>

                      <React.Fragment key={'right'}>
                          <Button
                          //   onClick={toggleDrawer('right', true)}
                          >
                              <MenuOpen sx={{ color: 'black', fontSize: 50 }} />
                          </Button>
                          <Drawer
                              anchor="right"
                            //   open={menu['right']}
                            //   onClose={toggleDrawer('right', false)}
                              sx={{ float: 'right' }}
                          >
                              {/* {list('right')} */}
                          </Drawer>
                      </React.Fragment>
                  </div>

                  <div className='link-style'>
                      <h3 style={{color:'black'}}>Shopi</h3>
                      <Link className='text' to='/'  >All</Link>
                      {categories.data?.map((category) => (
                          
                          <>
                              <Link className='text' to={`/category/${category.slug}`}>{category.name}</Link>
                          </>
                      ))}
                    
                      <div style={{ display: 'flex', marginLeft:'120px',gap:'20px'}}>
                      <Link className='text'  to='/'> userintheapp@test.com</Link>
                      <Link className='text' to='/' >My Orders</Link>
                      <Link className='text' to='/' > My Account</Link>
                      <Link className='text' to='/' > <ShoppingCartIcon />  0</Link>
                      </div>
                      
                  </div>
              </AppBar>

          </div>
      </>
  )
}

export default Header