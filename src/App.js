import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/cards/Card';



function App() {
  return (
     <>

     <Navbar/>
     <Carousel/>
     <h1>Events</h1>

     <div className='d-flex'>
     <Card title="Coding club" intro="HackTheNight starts soon.The registrations are open.Please do register and join us to upskill and learn." url="https://source.unsplash.com/300x200/?coding"/> 
     <Card title="Alaap" intro="HackTheNight starts soon.The registrations are open.Please do register and join us to upskill and learn." url="https://source.unsplash.com/300x200/?singing" />  
     <Card title="FootPrints" intro="HackTheNight starts soon.The registrations are open.Please do register and join us to upskill and learn." url="https://source.unsplash.com/300x200/?dancing"/> 
     <Card title="Astra Robotics" intro="HackTheNight starts soon.The registrations are open.Please do register and join us to upskill and learn." url="https://source.unsplash.com/300x200/?electronics"/>  
     </div>
     </>
  );
}

export default App;