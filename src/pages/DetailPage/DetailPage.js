import { useParams } from "react-router-dom";
import RenderDetail from "./RenderDetail";
import NavBar from "../../component/layout/Navbar";

//====================================
// Trang detail page
const DetailPage = () => {
  let params = useParams();
  return (
    <div className="detail-page">
      <NavBar></NavBar>
      <RenderDetail id={params.productId}></RenderDetail>
    </div>
  );
};

export default DetailPage;
