import React from 'react';
import Sidebar from './componentes/Sidebar'
import Topbar from './componentes/Topbar'
import Tarjetas from './componentes/Tarjetas'
import Titulo from './componentes/Titulo'
import Tarjetas2 from './componentes/Tarjetas2'
import Footer from "./componentes/Footer"

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
                  <Tarjetas />
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
