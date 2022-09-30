import React from 'react'
import './Styling.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessIcon from '@mui/icons-material/Business';
import olxLogo from '../Images/OLX-Symbol.png'
import olxfooter from '../Images/olxfooter.webp'
import appgallery from '../Images/appgallery.svg'
import appstore  from '../Images/appstore.svg'
import google from '../Images/google.svg'
import sellimg  from '../Images/sell.svg'
import slider  from '../Images/slider.jpg'
import slider2  from '../Images/slider2.jpg'
import twitter  from '../Images/twittericon.svg'
import insta  from '../Images/youtubeicon.svg'
import youtube  from '../Images/instaicon.svg'
import fb  from '../Images/fbicon.svg'
import SearchIcon from '@mui/icons-material/Search';
import Cards from './Cards';
import { useState } from 'react';
const NavBar = () => {
    const category = ['mobile','property','cap','car']
  const [input, setInput] = useState("");

  const updatedValue =(e)=>{
    setInput(e.target.value);

  }
  console.log(input);

  let check = category.filter((filterValue, ind)=>{
    if(filterValue.includes(input) && input !== ""){
        return filterValue
    }
    console.log(filterValue.includes(input))
})

    return (
    <div>
    <section className='upperpart'>
        <div className="container">
            <img src={olxLogo} alt="" style={{width:30, height:30, marginTop:7}} />
            <DirectionsCarIcon style={{width: 30, height:30, marginTop:0, paddingLeft:10}}/>
            <span style={{marginTop:10}}>Moter</span>
            <BusinessIcon style={{width:30, height:30, marginTop:0, paddingLeft:10}}/>
            <span style={{marginTop:10}}>Property</span>

            <div className="container" id ="my">
            <img src={olxLogo} alt="" style={{width:50, height:50, marginTop:7}} />
                {/* <span images={require("../Images/OLX-Symbol.png")} alt="" style={{width:50, height:50,}}></span> */}

                <div className="dropdown mx-4">
                    <select nameName="selector " id="country">
                        <option value="Pakistan">property</option>
                        <option value="hb">car</option>
                    </select>
                </div>
                <div className='d-block'>
                <div className=' input-group search'>
                <input type="text"
                class="form-control"
                placeholder="Type to search. . . ."
                aria-describedby="basic-addon2" 
                 onChange={updatedValue}   
                />
                    <span class="input-group-text" id="basic-addon2" style={{backgroundColor:"#002f34", color: "white"}}><SearchIcon/></span>
                </div>
                    <div className='d-block'>
                    {check.map((inputList)=>{
                        return <ul  className='shwinpbtn'>
                        <li className='dropdown-item' style={{listStyle:"none"}}>{inputList}</li>
                        </ul>
                    })}
                    </div>
                </div>
                <div className='btn' style={{display:"flex", gap:5}} >
                <button className="btn2" style={{fontWeight:700, color:"#002f34"}}> Login </button>
                
                <div className="oneDiv">
                    <img src={sellimg} alt="" />
                    <div className='secondOne'>
                    <span className='up'>+</span>
                    <span className='up'>Sell</span>
                    </div>
                </div>

                 </div>

            </div>


        </div>
    </section>
            <div className="container">
                <nav class="navbar">
                    <div class="container-fluid">
                        <span class="navbar-text" style={{display:"flex", alignItems:"center"}}>
                        <div className="dropdown mx-4">
                            <select nameName="selector " id="country">
                            <option value="Pakistan">property</option>
                            <option value="hb">car</option>
                            </select>
                        </div>   
                            <span style={{paddingLeft:5, fontSize:15}}>MobilePhone  Property  Houses   Cars   MoterCycle </span>               
                        </span>
                    </div>
                </nav>
            </div>
            <div className="container">

                <div id="carouselExampleInterval" class="carousel slide rounded" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={slider} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={slider2} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>
            <div className="container">
            <span style={{fontSize:20, marginBottom:20,}}>Fresh Recommendations</span>
            <div className='col-12 ' style={{display:"flex",flexDirection:"row" ,gap:5}}>
                <div className='col-3 pt-3 '>
                <Cards img={require("../Images/house.jpg")} mainTxt={"Property"} address={"plot xyz karachi"} price={"RS.12.00"}/>
                <Cards img={require("../Images/cap.png")} mainTxt={"Cap"} address={"plot xyz karachi"} price={"RS.15.00"}/>
                <Cards img={require("../Images/mobile.jpg")} mainTxt={"Mobile"} address={"plot xyz karachi"} price={"Rs.10.00"}/>
                <Cards img={require("../Images/car.jpg")} mainTxt={"Car"} address={"plot xyz karachi"} price={"Rs.100.00"}/>
                </div>
                <div className='col-3 pt-3'>
                <Cards img={require("../Images/house.jpg")} mainTxt={"Property"} address={"plot xyz karachi"} price={"RS.12.00"}/>
                <Cards img={require("../Images/cap.png")} mainTxt={"Cap"} address={"plot xyz karachi"} price={"RS.15.00"}/>
                <Cards img={require("../Images/mobile.jpg")} mainTxt={"Mobile"} address={"plot xyz karachi"} price={"Rs.10.00"}/>
                <Cards img={require("../Images/car.jpg")} mainTxt={"Car"} address={"plot xyz karachi"} price={"Rs.100.00"}/>
                </div>
                <div className='col-3 pt-3  '>
                <Cards img={require("../Images/house.jpg")} mainTxt={"Property"} address={"plot xyz karachi"} price={"RS.12.00"}/>
                <Cards img={require("../Images/cap.png")} mainTxt={"Cap"} address={"plot xyz karachi"} price={"RS.15.00"}/>
                <Cards img={require("../Images/mobile.jpg")} mainTxt={"Mobile"} address={"plot xyz karachi"} price={"Rs.10.00"}/>
                <Cards img={require("../Images/car.jpg")} mainTxt={"Car"} address={"plot xyz karachi"} price={"Rs.100.00"}/>
                </div>
                <div className='col-3 pt-3  '>
                <Cards img={require("../Images/house.jpg")} mainTxt={"Property"} address={"plot xyz karachi"} price={"RS.12.00"}/>
                <Cards img={require("../Images/cap.png")} mainTxt={"Cap"} address={"plot xyz karachi"} price={"RS.15.00"}/>
                <Cards img={require("../Images/mobile.jpg")} mainTxt={"Mobile"} address={"plot xyz karachi"} price={"Rs.10.00"}/>
                <Cards img={require("../Images/car.jpg")} mainTxt={"Car"} address={"plot xyz karachi"} price={"Rs.100.00"}/>
                </div>
                
            </div>
            </div>

            <div class="container-fluide">
                <div class="row mt-5">
                    <div class="col">
                        <img src={olxfooter} alt="" />
                    </div>
                    <div class="col">
                    <h3 style={{alignItems:"center", paddingTop:70}}>TRY THE OLX APP</h3>
                    <h6 style={{alignItems:"center", paddingTop:20}}>Buy, sell and find just about anything using the app on your mobile.</h6>
                    </div>
                    <div class="col">
                        <div style={{width:"auto" ,height:"auto",marginTop:30,paddingLeft:20 ,borderLeft:"3px solid grey" }}>
                            <span style={{color:"white"}}>.</span>
                            <span style={{color:"white"}}>.</span>
                            <span style={{color:"white"}}>.</span>
                            <span style={{color:"white"}}>.</span>
                            <h4 style={{color:"black"}}>Get Your App Today</h4>
                            <span style={{color:"white"}}>.</span>
                            <span style={{color:"white"}}>.</span>
                            <div style={{display:"flex", gap:5}}>
                            <img src={appgallery} alt="" style={{width:100 }} />
                            <img src={appstore} alt="" style={{width:100, }} />
                            <img src={google} alt="" style={{width:100,}} />
                            </div>
                            <span style={{color:"white"}}>.</span>
                            <span style={{color:"white"}}>.</span>
                            <span style={{color:"white"}}>.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid border-top" style={{backgroundColor:"#f7f4f4"}}>
                <div className="row mt-5" style={{}}>
                <div className='col-12 d-flex mb-5' >

                    <div className="col-2 mx-3">
                        <p className='fw-bold px-4' style={{fontSize: 12}} >POPULAR CATEGORIES</p>
                        <ul style={{listStyle:"none", fontSize:12}}>
                            <li>Cars</li>
                            <li>Flat for Rent</li>
                            <li>Mobile Phone</li>
                            <li>jobs</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <p className='fw-bold px-4' style={{fontSize: 12}} >TRENDING SEARCHES</p>
                        <ul style={{listStyle:"none", fontSize:12}}>
                            <li>Cars</li>
                            <li>Flat for Rent</li>
                            <li>Mobile Phone</li>
                            <li>jobs</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <p className='fw-bold px-4' style={{fontSize: 12}} >ABOUT US</p>
                        <ul style={{listStyle:"none", fontSize:12}}>
                            <li>Cars</li>
                            <li>Flat for Rent</li>
                            <li>Mobile Phone</li>
                            <li>jobs</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <p className='fw-bold px-4' style={{fontSize: 12}} >OLX</p>
                        <ul style={{listStyle:"none", fontSize:12}}>
                            <li>Cars</li>
                            <li>Flat for Rent</li>
                            <li>Mobile Phone</li>
                            <li>jobs</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <p className='fw-bold px-4' style={{fontSize: 12}} >FOLLOW US</p>
                        <ul style={{listStyle:"none", fontSize:12, display:"flex", gap:5}}>
                        <img src={fb} alt="" style={{width:25 }} />
                        <img src={youtube} alt="" style={{width:25 }} />
                        <img src={insta} alt="" style={{width:25 }} />
                        <img src={twitter} alt="" style={{width:25 }} />
                        </ul>
                        <div className='px-4' style={{gap:10}}>
                        <img src={appgallery} alt="" style={{width:80 }} />
                        <span className='px-2'>
                            <img src={appstore} alt="" style={{width:80, }} />
                        </span>
                            <img src={google} alt="" style={{width:80,}} />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="container-fluied" style={{backgroundColor:"#002f34"}}>
                <p className='p-3' style={{justifyContent:"end",display:"flex", color:"white"}}>Free Classifieds in Pakistan . © 2006-2022 OLX</p>
            </div>
    </div>


  )
}

export default NavBar