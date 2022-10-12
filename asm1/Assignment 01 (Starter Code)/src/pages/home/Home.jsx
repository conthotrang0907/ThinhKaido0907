const Home = (props) => {
  return (
    <div>
      <div className="header">
        <div>
          <HeaderFirst></HeaderFirst>
        </div>
        <NavBar></NavBar>
        <Header></Header>
      </div>
      <div className="content">
        <City></City>
        <ContentType></ContentType>
        <ContentHotel></ContentHotel>
        
      </div>
      <FormInput></FormInput>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
    
  );
};

export default Home;
//=====================================
import React from "react";
import "./dist/home.css";
import navBars from "../../data/navBar.json";
import citys from "../../data/city.json"
import propertyType from "../../data/type.json"
import hotelLists from  "../../data/hotel_list.json"
import footers from "../../data/footer.json"


//===================================
export const HeaderFirst = () => {
  return (
    <div className="header__first">
      <div className="left">
        <h1>booking website</h1>
      </div>
      <div className="right">
        <button className="btn btn-light">register</button>
        <button className="btn btn-light">login</button>
      </div>
    </div>
  );
};
// export Header;
//=================================
export const NavBar = () => {
  return (
    <div className="header__navBar">
      {navBars.map((navbar) => (
        <NavbarItem
          key={Math.random()}
          icon={navbar.icon}
          type={navbar.type}
          active={navbar.active}
        ></NavbarItem>
      ))}
    </div>
  );
};
//==============================
export const NavbarItem = (props) => {
  return (
    <div className={`navBar ${props.active}`}>
      <i className={`fa ${props.icon}`} aria-hidden="true">
        {` ${props.type}`}
      </i>
    </div>
  );
};
// export default NavBar;
//============================
export const Header = () => {
  return (
    <div>
        <div className="header__conent">
      <h1> A lifetime of discounts? It's Genius.</h1>
      <p>
        Get rewarded for your travels - unlock instant saving of 10% or more
        with free accont
      </p>
      
        <button className="btn btn-light">Sign in / Register</button>
        </div>
      <div className="header__late">
        
            <i className="fa fa-bed"> Where are you going?</i>
            <i className="fa fa-calendar"> 06/24/2022 to 06/24/2022</i>
            <i className="fa fa-male"> 1 auduit - 0 Children - 1 room</i>
            <button onClick={()=>(location.replace("../search"))}>Search</button>
        
      </div>
    </div>
    
      
    
  );
};
//=============================
const City=(props)=>{
  return(
      <div className="content__first">
          {
            citys.map(city=>(
                  <RenderCity
                  key={Math.random()}
                  name={city.name}
                  subText={city.subText}
                  image={city.image}
                  ></RenderCity>
              ))
          }
      </div>
      
  )
};
//===================
const RenderCity=(props)=>{
  return(
      <div className="content__firts__item">
         <img src={`${props.image}`} alt={`${props.name}`}/>
         <div className="content__firts__item__text">
          <h2>{props.name}</h2>
          <h4>{props.subText}</h4>
         </div>
         
      </div>
  )
};
//===============
const ContentType=()=>{
  return(
    <div className="content__second">
    <h3><strong>Browse by property type</strong></h3>
      <div className="content__second__type">
    
      {
          propertyType.map(type=>(
                <RenderType
                key={Math.random()}
                name={type.name}
                count={type.count}
                image={type.image}
                ></RenderType>
            ))
        }
      </div>
    </div>
    
  )
}
//=================
const RenderType=(props)=>{
  return(
    <div className="content__second__type__item">
      <img src={`${props.image}`} alt={`${props.name}`}/>
      
         <h4>{props.name}</h4>
         <p>{`${props.count} hotels`}</p>
    </div>
  )
}
//==================================hotelLists
const ContentHotel=()=>{
  return(
    <div className="content__Third">
    <h3><strong>Homes guests love</strong></h3>
      <div className="content__Third__Hotel">
    
      {
        hotelLists.map(list=>(
                <RenderHotel
                key={Math.random()}
                name={list.name}
                city={list.city}

                price={list.price}
                rate={list.rate}
                type={list.type}
                image_url={list.image_url}
                ></RenderHotel>
            ))
        }
      </div>
    </div>
  )
}
//=======================
const RenderHotel=(props)=>{
  return(
    <div className="content__Third__Hotel__item">
      <img src={`${props.image_url}`} alt={`${props.name}`}/>
      
        <a href="#"><strong>{props.name}</strong></a>
         <p>{props.city}</p>
         <p><strong>{`Starting from $${props.price}`}</strong></p>
         <div className="Rate">
         <div className="Rate__number"><strong>{props.rate}</strong></div>
         
          <p>{props.type}</p>
         </div>

    </div>
  )
}
//====================
 export const FormInput=()=>{
  return(
    <div className="form_input">
      <h1>Save time, save money!</h1>
      <p>Sing up and we'll send the best deals to you</p>
      <input type="text" placeholder="Your Email"></input>
      <button className="btn btn-light">Subscribe</button>
    </div>
  )
}
//====================
export const Footer =()=>{
  return(
    <div className="footer__item">
      {
        footers.map(footer=>(
          <RenderFooter
          key={footer.col_number}
          col_number={footer.col_number}
          col_values={footer.col_values}
          ></RenderFooter>
        ))
      }
    </div>
  )
}
const RenderFooter=(props)=>{
 
  
  return(
    <div className={`footer__item__col ${props.col_number}`}>
     <div className="cot">
        {props.col_values.map(value=>(
          <RenderValue
          key={Math.random()}
          value={value}
          ></RenderValue>
        ))}
     </div>
        
    </div>
  )
}
//=================
const RenderValue=(props)=>{
  return(
    <div>
      <p>{props.value}</p>
    </div>
  )
}


