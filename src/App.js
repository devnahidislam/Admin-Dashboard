import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import SettingsIcon from '@mui/icons-material/Settings';

import './App.css';

function App() {
  const activeMenu = true;

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 " style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="top">
            <button
              type="button"
              className="text-3xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: 'blue', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg">
            Sidebar
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
        )}
        <div
          className={`bg-main-bg dark:bg-main-bg min-h-screen w-full ${
            activeMenu ? 'md:ml-72' : 'flex-2'
          }`}
        >
          <div className="fixed md:static navbar w-full bg-main-bg dark:bg-main-dark-bg">
            NavBar
          </div>
        </div>

        <div>
          <Routes>
            {/* Dashboard */}
            <Route path='/' element="ECommerce" />
            <Route path='/ecommerce' element="Home" />

            {/* Pages */}
            <Route path='/order' element="Order" />
            <Route path='/employees' element="employees" />
            <Route path='/customers' element="customers" />

            {/* Apps */}
            <Route path='/kanban' element="kanban" />
            <Route path='/editor' element="editor" />
            <Route path='/calendar' element="calender" />
            <Route path='/color-picker' element="color-picker" />

            {/* Apps */}
            <Route path='/line' element="line" />
            <Route path='/area' element="area" />
            <Route path='/bar' element="bar" />
            <Route path='/chart' element="chart" />
            <Route path='/pie' element="pie" />
            <Route path='/color-mapping' element="color-mapping" />
            <Route path='/pyramid' element="pyramid" />
            <Route path='/stacked' element="stacked" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
