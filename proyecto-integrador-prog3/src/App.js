import React from 'react';
import Sidebar from './componentes/Sidebar'
import Topbar from './componentes/Topbar'
import Tarjetas from './componentes/Tarjetas'
import Titulo from './componentes/Titulo'
import Tarjetas2 from './componentes/Tarjetas2'
import Footer from "./componentes/Footer"


const arrayTarjetas = [
	{ titulo: 'Products in Data Base',
	  subtitulo: '135',
	  icono: 'fas fa-clipboard-list fa-2x text-gray-300',
	  color: 'card border-left-primary shadow h-100 py-2'
	},
	{ titulo: 'Amount in products',
	  subtitulo: '$546.456',
	  icono: 'fas fa-dollar-sign fa-2x text-gray-300',
	  color: 'card border-left-success shadow h-100 py-2'
	},
	{ titulo: 'Users quantity',
	  subtitulo: '38',
	  icono: 'fas fa-user-check fa-2x text-gray-300',
	  color: 'card border-left-warning shadow h-100 py-2'
	}
 ]


function App() {
  return (
    <div className="App">

      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
              <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
						      <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					      </div>
                
                {
                  arrayTarjetas.map(function (seccionTarjetas, idx) {
                    return(
                      <div key={ idx }>
                           <Tarjetas seccionTarjetas={seccionTarjetas} />
                      </div>
                    )
                  })
                }
                 
                  <Tarjetas2 /> 
              </div> 
          </div>
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
