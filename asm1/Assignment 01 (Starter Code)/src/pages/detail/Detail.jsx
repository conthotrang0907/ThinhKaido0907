const Detail = () => {
  return (
    <div>
      <div className="header header__detail">
          <HeaderFirst></HeaderFirst>
          <NavBar></NavBar>
      </div>
      <div>
        <Contents></Contents>
      </div>
      <FormInput></FormInput>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Detail;
//======================
import {HeaderFirst,NavBar,Footer,FormInput } from "../home/Home";
import "./dist/detail.css"
import listDetails from "../../data/detail.json"
//=====================
const Contents =()=>{
  console.log(listDetails)
  return(
    <div>
      <RenderDatail
          name={listDetails.name}
          address={listDetails.address}
          distance={listDetails.distance}
          price={listDetails.price}
          photos={listDetails.photos}
          title={listDetails.title}
          description={listDetails.description}
          nine_night_price={listDetails.nine_night_price}
      ></RenderDatail>
     
    </div>
  )
}
//==========================
const RenderDatail =(props)=>{
  return(
    <div className="detail-content">
      <div className="row row-1">
        <div className="col col-1">
          <h4>{props.name}</h4>
          <div>
            <i className="fa fa-location-dot"></i>
            <p>{props.address}</p>
          </div>
          <p>{props.distance}</p>
          <p>{props.price}</p>
        </div>
        <div className="col col-2">
          <button className="btn btn-light">Reserve or Book Now!</button>
        </div>
      </div>
      <div className="row row-2">
        <div className="row__img row__img-1">
            <img src={props.photos[0]}/>
            <img src={props.photos[1]}/>
            <img src={props.photos[2]}/>
        </div>
        <div className="row__img row__img-2">
            <img src={props.photos[3]}/>
            <img src={props.photos[4]}/>
            <img src={props.photos[5]}/>
        </div>
      </div>
      <div className="row row-3">
        <div className="col__description">
          <div className="col__description-1">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
          </div>
          <div className="col__description-2">
              <h6><strong> Perfect for a 9-night stay!</strong></h6>
              <p>located in the hrart of Krakow, this property has an excellent location score of 9.8!</p>
              <h3><strong>{props.nine_night_price}$</strong>(9 night)</h3>
              <button className="btn btn-light">Reserve or Book Now!</button>

          </div>
        </div>
      </div>
    </div>
  )
}
