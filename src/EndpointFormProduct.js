
export const PostProducts = async (jwt, titulo, imagen, descripcion, precio, correoProducto, telefonoProducto) => {
  try {
    const requestPostProductos = {
      method: 'POST',
      headers: `Bearer ${jwt}`,
      body: JSON.stringify({titulo:titulo,imagen:imagen,descripcion:descripcion,
                            precio:precio, correoProducto:correoProducto, telefonoProducto:telefonoProducto})
    };
    const response = await fetch('http://localhost:3001/productos', requestPostProductos)
      const message = response.send("Producto agregado con éxito")
      return message
  } catch (err) {
      console.error( `Error: ${err} ` )
  }
};