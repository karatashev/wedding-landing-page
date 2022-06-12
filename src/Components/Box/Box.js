import Button from "../Button/Button";
import "./Box.css";

const Box = ({ img, title, text, link }) => {
  return (
    <div class="box-item">
      <div class="box-inner">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
        <Button link={link} text="read more" />
      </div>
    </div>
  );
};

export default Box;
