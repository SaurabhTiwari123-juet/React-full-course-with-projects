import 'bulma/css/bulma.css'; 
import Alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="container">
    
    <div>Personal Digital Assitants</div>
    <ProfileCard title="Alexa" handle="@alexa99" image={Alexa}/>
    <ProfileCard title="cortana" handle="@cortana32" image={cortana}/>
    <ProfileCard title="siri" handle="@siri01" image={siri}/>
    </div>
  );
  }

export default App;

// <img src={Alexa} />
   // <img src ={siri}/>



