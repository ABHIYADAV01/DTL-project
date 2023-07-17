import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel';
import Card from './components/cards/Card';
import Footer from './components/footer/footer';



function App() {
  return (
     <>

     <Navbar/>
     <Carousel/>


     <h1 className='mx-3 mt-5'>Events</h1>
      <hr />


     <h2 className='mx-3 '>Technical Clubs - Upcoming events</h2>

     <div className='d-flex'>
     <Card title="Coding Club" intro="HackTheNight starts soon.The registrations are open.Please do register and join us to upskill and learn." url="https://source.unsplash.com/300x200/?coding"/> 
     <Card title="Frequency Club" intro="Welcome to the enchanting world of our club, where harmonious melodies,soaring voices come together to create pure magic!" url="https://source.unsplash.com/300x200/?frequency,waves" />  
     <Card title="Ashwa Racing" intro="Step into the vibrant rhythm of our dancing club, where movement becomes art and passion ignites the dance floor!" url="https://source.unsplash.com/300x200/?racing"/> 
     <Card title="Astra Robotics" intro="Welcome to the realm of innovation and cutting-edge technology – welcome to our robotics club! " url="https://source.unsplash.com/300x200/?electronics"/>  
     </div>
     <hr />
     <h2 className='mx-3 '>Non-Technical Clubs - Upcoming events</h2>
     <div className='d-flex'>
     <Card title="PhotoGraphy Club" intro="HackTheNight starts soon.The registrations are open.Please do register and join us to upskill and learn." url="https://source.unsplash.com/300x200/?photography"/> 
     <Card title="Alaap" intro="Welcome to the enchanting world of our club, where harmonious melodies,soaring voices come together to create pure magic!" url="https://source.unsplash.com/300x200/?singing" />  
     <Card title="FootPrints" intro="Step into the vibrant rhythm of our dancing club, where movement becomes art and passion ignites the dance floor!" url="https://source.unsplash.com/300x200/?dancing"/> 
     <Card title="Rotaract Club" intro="Welcome to the realm of innovation and cutting-edge technology – welcome to our robotics club! " url="https://source.unsplash.com/300x200/?helping others"/>  
     </div>

      <Footer/>

     </>


  );
}

export default App;