import "./FormButtonStyle.css";
export default function FormButtons(props) {
  return (
    <button
      className={props.styleClassName}
      checked="true"
      onClick={props.imageSelect}
    >
      <img alt="logo" className="img-style" src={props.buttonlink} />
      {props.buttonname}
      <img
        alt="arrow"
        className="arrow-Style"
        src="https://www.botshot.in/images/svg/Path456.svg"
      />
    </button>
  );
}
