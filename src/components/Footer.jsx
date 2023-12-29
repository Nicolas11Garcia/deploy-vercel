import React from "react";
import { Divider } from "@nextui-org/react";
import { Link } from "react-scroll";
import { HOME } from "../routes/Paths";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const [currentPage, setCurrentPage] = React.useState(null);
  const navigate = useNavigate();

  // Función para manejar el clic en un enlace de navegación
  const handleNavLinkClick = (page, elementId) => {
    setCurrentPage(page);
    if (page !== HOME) {
      // Si no estamos en la página principal, redirigir al Home y luego hacer scroll
      navigate(HOME);
    }
    // Hacer scroll al elemento con el ID dado después de la redirección
    setTimeout(() => {
      scrollToElement(elementId);
    }, 0);
    // Cerrar el menú si está abierto
    setIsMenuOpen(false);
  };

  // Función para realizar el scroll al elemento con el ID dado
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="px-6 w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start justify-between">
        <img
          width={150}
          alt="tendencias-mym-logo-footer"
          src="/logo.png"
          loading="lazy"
        />
        {/* REDES */}
        <div className="flex gap-4">
          {/* FACEBOOOK */}
          <a
            href="https://www.facebook.com/tendenciasmm"
            className="w-12 h-12 flex justify-center items-center border rounded-full border-gray-300 hover:bg-gray-100 transition-all"
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
            >
              <g>
                <path d="M24,12.072A12,12,0,1,0,10.125,23.926V15.541H7.078V12.072h3.047V9.428c0-3.007,1.792-4.669,4.532-4.669a18.611,18.611,0,0,1,2.687.234V7.947H15.83a1.734,1.734,0,0,0-1.947,1.49,1.71,1.71,0,0,0-.008.385v2.25H17.2l-.532,3.469h-2.8v8.385A12,12,0,0,0,24,12.072Z"></path>
              </g>
            </svg>
          </a>
          {/* IG */}
          <a
            href="https://www.instagram.com/tendencias_mym/"
            className="w-12 h-12 flex justify-center items-center border rounded-full border-gray-300 hover:bg-gray-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <g>
                <path d="M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z"></path>
                <path d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z"></path>
                <circle cx="17.872" cy="6.128" r="1.32"></circle>
              </g>
            </svg>
          </a>
          {/* WSP */}
          <a
            href="https://api.whatsapp.com/send/?phone=56958826024&text&app_absent=0"
            className="w-12 h-12 flex justify-center items-center border rounded-full border-gray-300 hover:bg-gray-100 transition-all"
          >
            <svg
              className="w-6 h-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
          </a>

          {/* Tiktok */}
          <a
            href="https://www.tiktok.com/@tendencias.mym"
            className="w-12 h-12 flex justify-center items-center border rounded-full border-gray-300 hover:bg-gray-100 transition-all"
          >
            <svg
              fill="#000000"
              viewBox="0 0 512 512"
              id="icons"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
            </svg>
          </a>
        </div>
      </div>

      <Divider className="my-4" />

      <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4 my-4 x">
        <nav>
          <ul className="flex flex-col sm:flex-row sm:gap-6">
            <li>
              <Link to={HOME}>Inicio</Link>
            </li>
            <li>
              <Link
                to="productos"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() =>
                  handleNavLinkClick(window.location.pathname, "productos")
                }
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="preguntas"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() =>
                  handleNavLinkClick(window.location.pathname, "preguntas")
                }
              >
                Preguntas frecuentes
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-gray-400 flex justify-end text-center sm:text-start w-full">
          <p className="text-balance">
            © 2023 Tendencias MyM. Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
