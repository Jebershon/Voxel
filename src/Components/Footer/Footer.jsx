import connect from '../Asserts/connect.png';
import { Business, Email, Facebook, Google, Instagram, LinkedIn, Phone, Streetview, Twitter } from '@mui/icons-material';
import './Footer.css';
export default function Footer(){
    return(
        <>
        <div className='footer'>
         <div className='about'>
          <div style={{display:"flex"}}>
          <img src={connect} width={40} height={40}/><h1 className='hed'>&nbsp;Shape Your Story</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit nisi inventore ipsam iste exercitationem porro eius enim saepe ducimus quis assumenda quidem cum minus, aperiam sunt totam illo necessitatibus!</p>
          <div className='icons'>
          <div><Facebook/></div>
          <div><Twitter/></div>
          <div><Instagram/></div>
          <div><LinkedIn/></div>
          <div><Google/></div>
          </div>
         </div>
         <div className='div1'>
            <h2>Company</h2>
            <ul>
                <li>About us</li>
                <li>Services</li>
                <li>Community</li>
            </ul>
         </div>
         <div className='div2'>
            <h2>Support</h2>
            <ul>
                <li>Help Center</li>
                <li>Feedback</li>
                <li>Webians</li>
            </ul>
         </div>
         <div className='div3'>
            <h2>Links</h2>
            <ul>
                <li>Contribute</li>
                <li>Our Story</li>
                <li>Explore</li>
                <li>Events</li>
            </ul>
         </div>
         <div className='div4'>
            <h2>Contact Us</h2>
            <ul style={{listStyle:"none"}}>
                <li><Email/>&nbsp; jebershon100@gmail.com</li>
                <li><Phone/>&nbsp; 9342629075</li>
                <li><Business/>&nbsp; Coimbatore</li>
            </ul>
         </div>
        </div>
        <hr/>
         <div className='copyright'>
          <ul>
            <li> &copy; copyright by Jebershon all rights reserved.</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Legal</li>
          </ul>
         </div>
        </>
    );
}