import "./SecondFormButton.css";
export default function FormButton2(props) {
  return (
    <>
      <button className={props.styleClassName} onClick={props.imageSelect}>
        <img
          alt="arrow"
          className="arrow-Style"
          src="https://www.botshot.in/images/svg/Path865.svg"
        />
        {props.buttonname}
        <img alt="logo" className="img-style" src={props.buttonlink} />
      </button>
    </>
  );
}
