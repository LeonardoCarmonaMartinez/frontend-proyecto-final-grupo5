import { useContext, useEffect } from react;
import MyContext from "./MyContext";

const { setProducts } = useContext(MyContext);

export const ObtenerProductos = async (jwt) => {
  
  try {
    const response = await fetch( 'http://localhost:3001/productos' , 
    {
      method: 'GET',
      Authorization: `Bearer ${jwt}`
    });
    const {dataProductos} = await response.json()
      return dataProductos
  } catch (err) {
    console.error( `Error: ${err} ` )
  }
};
setProducts(dataProductos)

useEffect(() => {
ObtenerProductos()
}, [])



  