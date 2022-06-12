import "./Banner.css";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="banner text-center">
    <div className="inner">
      <h1>The perfect theme for the perfect moment</h1>
      <Button link="https://www.google.com/" text="read more"/>
    </div>
  </div>
  );
}
 
export default Banner;