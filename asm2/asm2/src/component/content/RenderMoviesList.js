import React, {} from "react";

//=====================
const RenderMoviesList = (props) => {
  
  const onClickabc = () => {
    props.onClickmethot(
      props.id,
      props.name,
      props.depcription,
      props.vote,
      props.releaseDate,
      props.imgBackdropDetail
    );
  };

  return (
    <div className={props.name} onClick={onClickabc}>
      <img
        src={props.imgPoster}
        alt={props.name}
        onClick={props.onClickimg}
        
      />
    </div>
  );
};
export default RenderMoviesList;
