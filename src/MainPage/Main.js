import "./MainStyle.css";
import FormButtons from "./FormButtons";
import SecondFormButtons from "./SecondFormButton";
import { Header } from "./Header";
export const Main = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <h1 className="main-heading">HOW DOES IT HELP HOTELS ?</h1>
        </div>
        <h1 className="heading">Guest Experience</h1>
        <div class="side-by-side">
          <div>
            <div className="parent-div">
              <FormButtons
                buttonname="contactlesness"
                color="white"
                buttonlink="https://www.botshot.in/images/svg/hold.svg"
                styleClassName="buttonStyle"
                //   imageSelect={imageSelectMethod}
              />
              <FormButtons
                buttonname="Hassle Free"
                color="white"
                buttonlink="https://www.botshot.in/images/svg/deal.svg"
                styleClassName="buttonStyle"
                //   imageSelect={imageSelectMethod}
              />
              <FormButtons
                buttonname="Save Time"
                color="white"
                buttonlink="https://www.botshot.in/images/svg/share.svg"
                styleClassName="buttonStyle"
                //   imageSelect={imageSelectMethod}
              />
              <FormButtons
                buttonname="Be The Numero Uno"
                color="white"
                buttonlink="https://www.botshot.in/images/svg/fire.svg"
                styleClassName="buttonStyle"
                //   imageSelect={imageSelectMethod}
              />
            </div>
          </div>
          <div className="image-style">
            <img
              alt="arrow"
              className="pic-style"
              src="https://www.botshot.in/images/svg/Group33.svg"
            />
            <p className="header-one-paragraph">
              {/* {state.div4.textcontent} */}
              Studies prove that more than 75% of the guests do not want to wait
              for their rooms hence elevating a guest experience through our
              contactless chatbot can help you bring more revenue with greater
              guest satisfaction.
            </p>
          </div>
        </div>
        <h1 className="header-two">HOTEL MANAGEMENT</h1>
        <div class="side-by-side">
          <div className="image-style">
            <img
              alt="arrow"
              className="pic-style"
              src="https://www.botshot.in/images/svg/Group50.svg"
            />
            <p className="header-two-paragraph">
              botshot features Give your Front Desk A Break botshot features
              botshot features Lead Generation botshot features botshot features
              Upsell Packages botshot features botshot features Automation Of
              Guest Requests botshot features botshot features Incase you would
              like to know more about what your guests prefer , most asked
              questions , trending requests etc. look no further , our SMART
              dashboard will serve you the best.Using the predictive analytics
              capabilities chatbots bring, you can get relevant data that can be
              used to get insights about your target audience to serve clients
              and customers efficiently and effectively.
            </p>
          </div>
          <div>
            <SecondFormButtons
              buttonname="Service at its best"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/web-programming.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
            <SecondFormButtons
              buttonname="Operation Less And Convenient"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/discussion.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
            <SecondFormButtons
              buttonname="Real Time Analytics"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/speech-bubble.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
            <SecondFormButtons
              buttonname="Give your Front Desk A Break"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/team-leader.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
            <SecondFormButtons
              buttonname="Lead Generation"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/team-leader.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
            <SecondFormButtons
              buttonname="Upsell Packages"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/online-shopping.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
            <SecondFormButtons
              buttonname="Automation Of Guest Requests"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/desktop-computer.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
          </div>
        </div>
        <h1 className="heading">Hotel Owners</h1>
        <div class="side-by-side">
          <div>
            <FormButtons
              buttonname="Find Your Hotel"
              color="white"
              buttonlink="https://www.botshot.in/images/svg/office-building.svg"
              styleClassName="buttonStyle"
              //imageSelect={imageSelectMethod}
            />
          </div>
          <div className="image-style">
            <img
              alt="arrow"
              className="pic-style"
              src="https://www.botshot.in/images/svg/Group83.svg"
            />
            <p className="paragraph-three">
              Our SMART analytics and cost saving platform will help hotel
              owners to understand the needs of the guests directly without
              having to go through a range of reports or manual data
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
