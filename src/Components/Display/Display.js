import "./Display.css"
import display from "../../images/home-main-image-1.png"

const Display = () => {
  return (
    <div className="section second-cont">
    <div className="inner">
      <div className="img-box">
        <img src={display} alt="" />
      </div>
      <div className="content-box">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus sed
          asperiores porro.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempora
          omnis in tempore doloremque iure aspernatur eveniet voluptates
          deleniti fuga? Magni aliquam obcaecati voluptas fuga, quam repellat
          omnis nisi aperiam.
        </p>
      </div>
    </div>
  </div>
  );
}
 
export default Display;