import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { Footer } from "../components/Footer";
import { PreguntasFrecuentes } from "../components/PreguntasFrecuentes";
import Product from "./Products";

export const Home = () => {
  const [visibleButton, setVisibleButton] = useState(true);
  const childRef = useRef(null);

  const ocultarButton = () => {
    setVisibleButton(false);
  };

  const mostrarButton = () => {
    setVisibleButton(true);
  };
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <div>
          {/*PRODUCTOS */}
          <div className="px-6 max-w-6xl mx-auto" id="productos">
            <Product
              ref={childRef}
              ocultarButton={ocultarButton}
              visibleButton={mostrarButton}
            />
          </div>

          <div
            className={`px-6 flex justify-center mt-8 ${
              visibleButton ? "" : "hidden"
            }`}
          >
            <Button
              onClick={() => childRef.current.childFunction(null, "Agregar")}
              className={`bg-[#C90071] text-white ${
                visibleButton ? "" : "hidden"
              }`}
            >
              Ver más
            </Button>
          </div>

          {/*PREGUNTAS FRECUENTES */}
          <div className="px-6 max-w-6xl mx-auto my-16" id="preguntas">
            <PreguntasFrecuentes />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
