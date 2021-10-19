import React, { useEffect } from "react";
import "./SelfExam.css";
import SelfExamElement from "./SelfExamElement";
import step1 from "./images/step1.png";
import step2 from "./images/step2.png";
import step3 from "./images/step3.png";
import step4 from "./images/step4.png";
import step5 from "./images/step5.png";
import step6 from "./images/step6.png";
import step7 from "./images/step7.png";
import step8 from "./images/step8.png";
import { Container } from "react-bootstrap";
import "../Information/css/SunScreenInformation.css";
import BreadCrumbComponent from "../Common/BreadCrumbComponent";
import gif from "../Prevention/Images/skincancer_title.gif";

const SelfExam = () => {
  const data = [
    {
      image: step1,
      title: "1. Examine your face",
      body: `Especially your nose, lips, mouth and ears — front and back. Use one or
        both mirrors to get a clear view.`,
    },
    {
      image: step2,
      title: "2. Inspect your scalp",
      body: `Thoroughly inspect your scalp, using a blow-dryer and mirror to expose each section to view. Get a friend or family member to help, if you can.`,
    },
    {
      image: step3,
      title: "3. Check your hands",
      body: `Palms and backs, between the fingers and under the fingernails. Continue up the wrists to examine both the front and back of your forearms.`,
    },
    {
      image: step4,
      title: "4. Scan your arms",
      body: `Standing in front of the full-length mirror, begin at the elbows and scan all sides of your upper arms. Don’t forget the underarms.`,
    },
    {
      image: step5,
      title: "5. Inspect your torso",
      body: `Next, focus on the neck, chest and torso. Lift the breasts to view the undersides.`,
    },
    {
      image: step6,
      title: "6. Scan your upper back",
      body: `With your back to the full-length mirror, use the hand mirror to inspect the back of your neck, shoulders, upper back and any part of the back of your upper arms you could not view in step 4.`,
    },
    {
      image: step7,
      title: "7. Scan your lower back",
      body: `Still using both mirrors, scan your lower back, buttocks and backs of both legs.`,
    },
    {
      image: step8,
      title: "8. Inspect your legs",
      body: `Sit down; prop each leg in turn on the other stool or chair. Use the hand mirror to examine the genitals. Check the front and sides of both legs, thigh to shin. Then, finish with ankles and feet, including soles, toes and nails (without polish).`,
    },
  ];

  const navigation = [
    {
      href: "/home",
      title: "Home",
    },
    {
      href: "/prevention/selfExam",
      title: "Self Exam",
      active: "active",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="block">
      <Container className="information-page white-text">
        <div className="content-margin">
          <BreadCrumbComponent navigation={navigation} />
          <p className="information-page-title">Self-Exams Save Lives</p>
          <p className="information-page-quote">
            Early Detection Starts With You
          </p>
          <p className="information-page-introduction">
            When caught and treated early, skin cancers are highly curable.
            That's why we recommend that you examine your skin head-to-toe every
            month. It's a simple but powerful way to look at yourself with a new
            focus that can save your life.
          </p>
          <div className="information-introduction-content">
            <div>
              <p>
                If you see something NEW, CHANGING or UNUSUAL, get checked by a
                dermatologist right away. It could be skin cancer. This
                includes:
              </p>
              <ul>
                <li>
                  A growth that increases in size and appears pearly,
                  transparent, tan, brown, black, or multicolored.
                </li>
                <li>
                  A mole, birthmark or brown spot that increases in size,
                  thickness, changes color or texture, or is bigger than a
                  pencil eraser. Learn the ABCDEs of melanoma.
                </li>
                <li>
                  A spot or sore that continues to itch, hurt, crust, scab or
                  bleed.
                </li>
                <li>An open sore that does not heal within three weeks.</li>
              </ul>
              <p>
                A thorough self-exam requires the following simple supplies: a
                bright light, a full-length mirror, a hand mirror, two chairs or
                stools and a blow-dryer.
              </p>
            </div>
            <img src={gif} alt="skin cancer gif" />
          </div>
          <h3 className="text-center content-margin">
            How to perform Self-Exam
          </h3>
          <div className="self-exam-flex">
            {data.map((item, index) => {
              return (
                <div data-aos="fade-left">
                  <SelfExamElement
                    image={item.image}
                    title={item.title}
                    body={item.body}
                  />
                  {index !== data.length - 1 ? (
                    <div className="line"></div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SelfExam;
