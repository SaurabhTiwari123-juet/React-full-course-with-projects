import 'bulma/css/bulma.css'; 
import Alexa from './images/alexa.png';
import cortana from './images/cortana.png';
import siri from './images/siri.png';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div>
    <section className="hero is-primary">
    <div className="hero-body">
    <p className="title"> Personal Digital Assistants</p>
    </div>
    </section>
    <div className="container">
    <section className="section">
    <div className="columns">
    <div className="column is-3">
      <ProfileCard title="Alexa" handle="@alexa99" image={Alexa}/>
      </div>
    
  <div className="column is-3">
    <ProfileCard title="cortana" handle="@cortana32" image={cortana}/>
    </div>

    <div className="column is-3">
    <ProfileCard title="siri" handle="@siri01" image={siri}/>
    </div>
    </div>
    </section>
    </div>
    </div>
  );
  }

export default App;

// <img src={Alexa} />
   // <img src ={siri}/>


{/* 
//<div className="container">
 <section className="section"> 
 <div className="columns">
  <div className="column is-4">
   <ProfileCard title="Alexa" handle="@alexa99" image={Alexa Image} </div> <div className="column is-4"> 
   <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} /> 
   </div> <div className="column s-4">
 <ProfileCard title="Siri" handle="@siri01" image={SiriImage} /> */}