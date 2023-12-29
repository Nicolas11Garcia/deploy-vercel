import { Select, SelectItem } from "@nextui-org/react";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { products } from "../ProductsApi/products";
import { CardProduct } from "../components/products/CardProduct";

export const Product = forwardRef((props, ref) => {
  const [filtrarPor, setFiltrarPor] = useState("");
  const [ordenarPor, setOrdenarPor] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const itemsPerLoad = 12;
  const [visibleItems, setVisibleItems] = useState(itemsPerLoad);

  const uniqueCategories = new Set();

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerLoad);
    setIsImageLoaded(true);
  };

  useImperativeHandle(ref, () => ({
    childFunction,
  }));

  const childFunction = async () => {
    handleLoadMore();
  };

  const handleSelectionOrdenarChange = (e) => {
    setOrdenarPor(e.target.value);
  };

  const handleSelectionFiltrarChange = (e) => {
    setFiltrarPor(e.target.value);
  };

  products.forEach((product) => {
    uniqueCategories.add(product.category);
  });

  const uniqueCategoriesArray = Array.from(uniqueCategories);

  // Filtrar y ordenar productos según las condiciones
  const filteredAndSortedProducts = products
    .filter((product) => {
      if (filtrarPor === "") return true;
      if (filtrarPor === "ofertas") return product.oferta === 1;
      return product.category === filtrarPor;
    })
    .sort((a, b) => {
      if (ordenarPor === "menor_mayor") {
        if (a.oferta === 1 && b.oferta === 1) {
          return a.precio_oferta - b.precio_oferta;
        } else if (a.oferta === 1 && b.oferta !== 1) {
          return a.precio_oferta - b.price;
        } else if (b.oferta === 1 && a.oferta !== 1) {
          return a.price - b.precio_oferta;
        } else {
          return a.price - b.price;
        }
      } else if (ordenarPor === "mayor_menor") {
        if (a.oferta === 1 && b.oferta === 1) {
          return b.precio_oferta - a.precio_oferta;
        } else if (b.oferta === 1 && a.oferta !== 1) {
          return b.precio_oferta - a.price;
        } else if (b.oferta === 1 && a.oferta !== 1) {
          return b.price - a.precio_oferta;
        } else {
          return b.price - a.price;
        }
      } else if (ordenarPor === "productos_nuevos") {
        // Devolver el array sin cambios
        return b.id - a.id;
      } else if (ordenarPor === "productos_antiguos") {
        // Devolver el array sin cambios
        return a.id - b.id;
      }
      // Manejar el caso por defecto o devolver 0 si no hay ninguna condición
      return 0;
    });

  if (visibleItems >= filteredAndSortedProducts.length) {
    props.ocultarButton();
  }

  if (visibleItems <= filteredAndSortedProducts.length) {
    props.visibleButton();
  }

  return (
    <>
      <div className="my-14" id="productos">
        <h2 className="text-center text-lg uppercase">Productos</h2>
      </div>

      {/*FILTROS */}
      <div className="flex flex-col items-end sm:justify-between sm:flex-row mb-8">
        <Select
          label="Filtrar por:"
          labelPlacement="outside"
          className="max-w-[210px]"
          onChange={handleSelectionFiltrarChange}
        >
          <SelectItem key="" value="Ver todo">
            Ver todo
          </SelectItem>
          <SelectItem
            key="ofertas"
            value="Solo ofertas"
            className="text-red-500"
          >
            Ofertas
          </SelectItem>
          {uniqueCategoriesArray.map((category, index) => (
            <SelectItem key={category} value={index}>
              {category}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Ordenar por:"
          labelPlacement="outside"
          className="max-w-[210px]"
          onChange={handleSelectionOrdenarChange}
        >
          <SelectItem key="menor_mayor" value="menor_mayor">
            Precio, menor a mayor
          </SelectItem>
          <SelectItem key="mayor_menor" value="mayor_menor">
            Precio, mayor a menor
          </SelectItem>
          <SelectItem key="productos_nuevos" value="productos_nuevos">
            Productos nuevos
          </SelectItem>
          <SelectItem key="productos_antiguos" value="productos_antiguos">
            Productos Antiguos
          </SelectItem>
        </Select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-8 mx-auto">
        {filteredAndSortedProducts
          .slice(0, visibleItems)
          .map((product, index) => (
            <CardProduct
              key={index}
              id={product.id}
              image={product.image}
              title={product.name}
              precio={product.price}
              oferta={product.oferta}
              precioOferta={product.precio_oferta}
            />
          ))}
      </div>
    </>
  );
});

export default Product;
