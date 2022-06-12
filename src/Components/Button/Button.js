import "./Button.css";

const Button = ({text, link}) => {
  return (
    <a href={link} target="_blank" className="btn">{text}</a>
  );
}
 
export default Button;