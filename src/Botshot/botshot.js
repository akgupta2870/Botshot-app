import { Header } from "./Header";
//import SecondFormButtons from "../MainPage/SecondFormButton";
import FormButtons from "../MainPage/FormButtons";
import "./Botshot.css";
export const Botshot = () => {
  return (
    <>
      <div>
        <Header />
        <section className="main_heading">
          <h1>HOW DOES IT HELP HOTEL</h1>
        </section>
        <section className="sub_heading">
          <h1> Guest Experience</h1>
        </section>
        <section className="container ">
          <div className="button_container">
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
          <div className="container_image">
            <img
              alt="abc"
              src="https://www.botshot.in/images/svg/numero_uno.svg"
            />

            <p className="container_paragraph">
              Studies prove that more than 75% of the guests do not want to wait
              for their rooms hence elevating a guest experience through our
              contactless chatbot can help you bring more revenue with greater
              guest satisfaction.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
