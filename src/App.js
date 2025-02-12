// Importing some the of the dependiences from the react-router dom
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Importing Componets
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// Importing pages
import AddToContact from './pages/AddToContact/AddToContact';
import Edit from './pages/EditContact/EditContact';
// Importing stateManagement Library
import CustomeContext from './context';

// Importing the Toastify to disply the notification in the react-app
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Importing css file
import './App.css';



function App() {

  // Creating Routes
  const router = createBrowserRouter([
     {path : '/' , element : <NavBar /> , children : [
      {path : '/' , element : <Home />},
      {path : 'add-contact' , element : <AddToContact /> },
      {path : 'edit-contact/:id' , element : <Edit />}
     ]}
  ]);

  return (
    <CustomeContext>
      <ToastContainer />
      <div className="App">
        {/* Assigning Routes */}
        <RouterProvider router={router} />
      
      </div>
    </CustomeContext>
  );
}

export default App;