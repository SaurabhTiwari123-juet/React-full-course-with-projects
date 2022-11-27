import Alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
    <img src={Alexa} />
    <img src ={siri}/>
    <div>Personal Digital Assitants</div>
    <ProfileCard title="Alexa" handle="@alexa99"/>
    <ProfileCard title="cortana" handle="@cortana32"/>
    <ProfileCard title="siri" handle="@siri01"/>
    </div>
  );
  }

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
