import "./Dairypage.css";
import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';


function Dairypage(){
    return(
        <div>

        <header className="dairyheader">
             <h1 className="dairyBasketBuddy">BasketBuddy</h1>

              <div ><Link to="/changeAddress" Style="color:black">
                     <h2 >Delivery in 15 min</h2>
                         <h6>42G9+7Q4, Devri Rd,Taal..</h6>
                     </Link>
                     </div>

         <nav className="dairynav">
          <a href="#home">Home</a>
          <a href="#Features">Features</a>
          <a href="#Products">Products</a>
          <a href="#Categories">Categories</a>
          <a href="#Review">Review</a>
          <a href="#Blogs">Blogs</a>
        </nav>

         <div className="dairyicons">
          <Link><FontAwesomeIcon icon={faGripLines} className="i"  /></Link> 
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} id="Shopping_icon" className="i" /></Link>
          <Link><FontAwesomeIcon icon={faCircleUser } id="Login_icon" className="i"  /></Link>
        </div>
        </header>
         

        <h1 className="dairyheading">Dairy, Eggs & More</h1>

        <div>
            <div className="dairylist">
           
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>

            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
        </div>
        </div>
        </div>
    );
}


export default Dairypage;