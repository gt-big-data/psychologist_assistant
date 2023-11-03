import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from "./pages/Form";
import UserDesc from "./pages/UserDesc";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Form
      break
    case "/pages/Form":
      Component = Form
      break
    case "/pages/UserDesc":
      Component = UserDesc
      break
  }
  return (
    <div className="App">
      <Navbar />
      <Component />
    </div>
  );
}

export default App;
