import React from 'react';
import { Outlet } from "react-router-dom";

const AnonymousLayout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido visitante</h1>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        Este es el pie de página para visitantes.
      </footer>
    </div>
  );
}

export default AnonymousLayout;
