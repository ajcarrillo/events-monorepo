import React from "react";
import { Outlet } from "react-router-dom";

const MembersLayout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido miembro</h1>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        Este es el pie de página para miembros.
      </footer>
    </div>
  );
}

export default MembersLayout;
