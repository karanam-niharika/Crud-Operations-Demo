import axios from 'axios'
import React, { useEffect } from 'react'

const ProductsData = () => {
  async function dataUsers(){
     let apiData = await axios.get('')
     
     console.log(apiData.data)
  }

  useEffect(() =>{
    dataUsers()
  },[])
    
 
  return (
   <>
   
    <div>ProductsData</div>
    
   </>
  )
}

export default ProductsData