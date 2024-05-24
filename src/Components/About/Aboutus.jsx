import { Container ,Row,Col,Card } from 'react-bootstrap'
import './About.css';
import Footer from '../Footer/Footer';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function Aboutus(){
    const navigate = useNavigate();
    return (
        <>
        <div className='parallax'>
            <button className='backbtn'><div className='back' onClick={()=>navigate("/")}><ArrowBackIos/></div></button>
            <div className='box'>
            <div className='header'>
            <h1>Meet the Team</h1>
            <p>At Voxel, we're committed to delivering captivating content through a fusion of compelling imagery and engaging text. Our blog showcases exclusive creations, harnessing modern technologies and innovative features to craft immersive experiences. Dive into our curated collection of articles and explore the latest trends, insights, and inspirations shaping the digital landscape</p>        
            </div>
            </div>
        </div>
        <section class="features3 float" id="features3-2">    
            <div class="container">
                <div class="main_header">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 col-lg-5">
                            <h4 class="mbr-section-subtitle mbr-fonts-style ls-1 display-4">Voxel</h4>
                            <h3 class="mbr-section-title mbr-fonts-style ls-1 display-2">All the details fall into One place</h3>
                        </div>
                        <div class="col-lg-1 d-none d-lg-block"></div>
                        <div class="col-12 col-md-12 col-lg-6">
                            <p class="mbr-text mbr-fonts-style display-7">With Voxel, users can unleash their creativity, connect with like-minded individuals, and build a thriving online community around their passions and interests. Whether you're sharing travel adventures, cooking recipes, tech tutorials, or personal anecdotes, Voxel provides the platform for your voice to be heard. Start your blogging journey with Voxel today!</p>
                            <p class="linkBtn mb-0 mbr-fonts-style display-7"><a href="index.html" class="text-black">Get started</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="parallax1">
        <div className='header'>
            <h1>Awards and Recognition</h1>
            <p>At Voxel, we're committed to delivering captivating content through a fusion of compelling imagery and engaging text. Our blog showcases exclusive creations, harnessing modern technologies and innovative features to craft immersive experiences.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, libero voluptatibus reiciendis tenetur molestias dignissimos eos quo beatae praesentium, suscipit nobis nisi nihil aliquid rem! Delectus quos error a inventore!
                
                 Dive into our curated collection of articles and explore the latest trends, insights, and inspirations shaping the digital landscape</p>        
            </div>
        </div>
        <section class="features3 float" id="features3-2">    
            <div class="container">
                <div class="main_header">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-12 col-lg-5">
                            <h4 class="mbr-section-subtitle mbr-fonts-style ls-1 display-4">Voxel</h4>
                            <h3 class="mbr-section-title mbr-fonts-style ls-1 display-2">Discover Our Story</h3>
                        </div>
                        <div class="col-lg-1 d-none d-lg-block"></div>
                        <div class="col-12 col-md-12 col-lg-6">
                            <p class="mbr-text mbr-fonts-style display-7">With Voxel, users can unleash their creativity, connect with like-minded individuals, and build a thriving online community around their passions and interests. Whether you're sharing travel adventures, cooking recipes, tech tutorials, or personal anecdotes, Voxel provides the platform for your voice to be heard. Start your blogging journey with Voxel today!</p>
                            <p class="linkBtn mb-0 mbr-fonts-style display-7"><a href="index.html" class="text-black">Get started</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="parallax2">
        <div className='header'>
            <h1>Community Involvement</h1>
            <p>At Voxel, we're committed to delivering captivating content through a fusion of compelling imagery and engaging text. Our blog showcases exclusive creations, harnessing modern technologies and innovative features to craft immersive experiences.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic adipisci excepturi quis quo nam minima modi in expedita asperiores ratione culpa quasi accusantium voluptatibus amet consequuntur molestias, repellendus repellat.
                
                 Dive into our curated collection of articles and explore the latest trends, insights, and inspirations shaping the digital landscape</p>        
            </div>
        </div>
        <Footer/>
        </>
    )
}