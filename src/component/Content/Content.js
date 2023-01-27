import Category from "./Category";
import ListProducts from "./ListProducts";
import InfromationOther from "./InfromationOther";
//=======================================
//nội dung home page
const Content = () => {
  return (
    <div className="content">
      <Category></Category>
      <ListProducts></ListProducts>
      <InfromationOther></InfromationOther>
    </div>
  );
};
export default Content;
