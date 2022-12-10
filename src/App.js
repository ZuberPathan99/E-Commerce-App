
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';


function App() {

  const renderComponent=()=>{
    return(
      <>
      <LandingPage />
      </>
    )
  }

  return (
   renderComponent()
  );
}

export default App;
