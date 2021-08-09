import FormButtons from "../../MainPage/FormButtons";
import "../Home/homestyle.css";
import SecondFormButtons from "../../MainPage/SecondFormButton";
import Header from "../../Component/Header/Header";
import { Footer } from "../Footer/Footer";
export const Home = () => {
  return (
    <>
      <Header />
      <section className="parent_section">
        <section className="main_heading_section">
          <h1 className="main_heading">HOW DOES IT HELP HOTEL</h1>
        </section>

        <section className="guest_section">
          <div className="sub_heading_section">
            <h1 className="sub_heading"> Guest Experience</h1>
          </div>
          <div className="button_image_div">
            <div className="button_section">
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
            <div className="image_div">
              <div className="photo_section">
                <img
                  alt="abc"
                  src="https://www.botshot.in/images/svg/numero_uno.svg"
                />
              </div>
              <div className="guest_paragraph_section">
                <p className="guest_paragraph">
                  our guests do not have to download any application yet have
                  most secured conversations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hotel_section">
          <div className="hotel_heading_div">
            <h1 className="hotel_sub_heading">Hotel Management</h1>
          </div>
          <div className="hotel_image_button">
            <div className="hotel_image">
              <div className="image">
                <img
                  alt="arrow"
                  className="pic-style"
                  src="https://www.botshot.in/images/svg/Group50.svg"
                />
              </div>
              <div className="paragraph">
                <p className="header-two-paragraph">
                  botshot features Give your Front Desk A Break botshot features
                  botshot features Lead Generation botshot features botshot
                  features Upsell Packages botshot features botshot features
                  Automation Of Guest Requests botshot features botshot features
                  Incase you would like to know more about what your guests
                  prefer , most asked questions , trending requests etc. look no
                  further , our SMART dashboard will serve you the best.
                </p>
              </div>
            </div>

            <div className="hotel_button">
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
        </section>
        <section className="owner_section">
          <div className="owner_heading_section">
            <h1 className="owner_sub_heading"> Hotel Owner</h1>
          </div>
          <div className="owner_image">
            <div className="owner_button_section">
              <div className="owner_button_style">
                <FormButtons
                  buttonname="Know Your hotel"
                  color="white"
                  buttonlink="https://www.botshot.in/images/svg/office-building.svg"
                  styleClassName="buttonStyle"
                  //   imageSelect={imageSelectMethod}
                />
              </div>
            </div>
            <div className="owner_photo_section">
              <div className="owner_image">
                <img
                  alt="abc"
                  src="https://www.botshot.in/images/svg/Group83.svg"
                />
              </div>
              <div className="owner_paragraph_section">
                <p className="paragraph">
                  Our SMART analytics and cost saving platform will help hotel
                  owners to understand the needs of the guests directly without
                  having to go through a range of reports or manual data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};
