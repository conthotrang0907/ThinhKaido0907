const Search = () => {
  return (
    <div>
      <div className="header">
        <div>
          <HeaderFirst></HeaderFirst>
        </div>
        <NavBar></NavBar>
        <Header></Header>
      </div>
      <div className="search__content">
        <SearchPopup></SearchPopup>
        <SearchList></SearchList>
      </div>
      <FormInput></FormInput>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Search;
//================================
import { Header,NavBar,HeaderFirst,Footer,FormInput } from "../home/Home";
import searchLists from "../../data/search.json"
import "./dist/search.css"
import React, {useState}from "react";

//================================
const SearchPopup=()=>{
  const [useInput,setUseInput] = useState({
    enteredDestination: '',
    enteredDate:'06/24/2022 to 06/24/2022',
    enteredMin:'',
    enteredMax:'',
    enteredAldult:'',
    enteredRoom:'',
    enteredChildren:''
})
const InputDestination=(event)=>{
  setUseInput({
    ...useInput,
    enteredDestination:event.target.value
})
}
const InputDate=(event)=>{
  setUseInput({
    ...useInput,
    enteredDate:event.target.value
})
}
const InputMin=(event)=>{
  setUseInput({
    ...useInput,
    enteredMin:event.target.value
})
}
const InputMax=(event)=>{
  setUseInput({
    ...useInput,
    enteredMax:event.target.value
})
}
const InputAldult=(event)=>{
  setUseInput({
    ...useInput,
    enteredAldult:event.target.value
})
}
const InputChildren=(event)=>{
  setUseInput({
    ...useInput,
    enteredChildren:event.target.value
})
}
const InputRoom=(event)=>{
  setUseInput({
    ...useInput,
    enteredRoom:event.target.value
})
}

  return(
    <div className="search__popup">
      {/* <a href=""></a> */}
      <h4>Search</h4>
      <p>Destination</p>
      <input type='text' value={useInput.enteredDestination} onChange={InputDestination}/>
      <p >Check-in-Date</p>
      <input type='text' value={useInput.enteredDate} onChange={InputDate}/>
      <p>Option</p>
      <div  className="table">
        <div className="row row-1">
          <p> Min price per night</p>
          <p>Max price per night</p>
       <p> Aldult</p>
        <p>Children</p>
        <p>Room</p>
        </div>
        <div className="row row-2">
          <input type='number' value={useInput.enteredMin} onChange={InputMin}/>
          <input type='number' value={useInput.enteredMax} onChange={InputMax}/>
          <input type='number' value={useInput.enteredAldult} onChange={InputAldult}/>
          <input type='number' value={useInput.enteredChildren} onChange={InputChildren}/>
          <input type='number' value={useInput.enteredRoom} onChange={InputRoom}/>
        </div>
       
        
        
        
        
        
        
        
      </div>
      
    </div>
  )
};
//==================
const SearchList =()=>{
  return(
    <div className="search__list box">
      {
        searchLists.map(searchList=>(
          <SearchListItem
          key={Math.random()}
          name={searchList.name}
          distance={searchList.distance}
          tag={searchList.tag}
          type={searchList.type}
          description={searchList.description}
          free_cancel={searchList.free_cancel}
          price={searchList.price}
          rate={searchList.rate}
          rate_text={searchList.rate_text}
          image_url={searchList.image_url}
          ></SearchListItem>
        ))
      }
    </div>
  )
}

const SearchListItem=(props)=>{
  return(
    <div className="search__list__col">
      <div className="col col-1">
        <img src={props.image_url}/>
      </div>
      <div className="col col-2">
        <h5><strong>{props.name}</strong></h5>
        <p>{`${props.distance} from center`}</p>
        <div className="type"><p>{props.tag}</p></div>
        <p><strong>{props.description}</strong></p>
        <p>{props.type}</p>
        {(props.free_cancel)&&(
          <div className="type-color">
            <p><strong>Free cancellation</strong></p>
            <p>You can cancel later, so lock in thus great price today!</p>
          </div>
        )}
      </div>
      <div className="col col-3">
        <div className="rate">
          <h6>{props.rate_text}</h6>
          <h5 >{props.rate}</h5>
        </div>
        <div>
          <h4>${props.price}</h4>
          <p>Includes taxes and fees</p>
          <button className=" " onClick={()=>(location.replace("../detail"))}>See availability</button>
        </div>
        
      </div>
    </div>
  )
}