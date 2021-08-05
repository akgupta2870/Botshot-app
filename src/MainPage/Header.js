export const Header = () => {
  return (
    <>
      <div className="header-div">
        <span className="logo-span">
          <img
            alt="arrow"
            className="logo-style"
            src="https://www.botshot.in/logo/botshot_logo.png"
          />
        </span>
        <div className="nav-style">
          <span className="nav-span">Home</span>
          <span className="nav-span">Our Product </span>
          <span className="nav-span">Integration</span>
          <span className="nav-span">Pricing</span>
        </div>
        <hr className="hr-style"></hr>
      </div>
    </>
  );
};
