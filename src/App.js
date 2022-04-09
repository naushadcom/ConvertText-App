// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name="Naushad"
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      <div className="container my-3">
      <TextForm  heading="Enter the text analyse below"/>
      {/* <About/> */}
      </div>
      
      {/* <Navbar /> */}
    </>
  );
}

export default App;

{/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}

// <div classNameName="blank">Lovely</div>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         </nav>
//         <div classNameName="container">
//         <h1>Hello {name}</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus doloribus incidunt illum sequi quo. Facere, labore? Reprehenderit similique consequatur eum rerum ipsam recusandae, totam, officia pariatur, consequuntur mollitia numquam iure accusamus. Nulla, inventore?</p>
//         </div>
      







{/* <h1>fkusdhbkf</h1>
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Naushad
        </a>
      </header>
    </div> */}