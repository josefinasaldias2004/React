export const ProductCard = ({ producto }) => {
  return (
    <div>
      <img src={producto.img} alt={producto.nombre} />
      <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <span>${producto.precio}</span>
      </div>
      <button>agregar al carrito</button>

    </div>
  );
};

export const Header = () =>{ 
return(
    <header>
        <h1>
            TECHNOLOGY STORE 

        </h1>
        </header>
);};


export const Footer = ()=>{
return(
<footer>
    &copy; Todos los derechos reservados
</footer>
);
};