import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Section, Form } from "../components";
import { createGeneralMessage } from "../redux/actions";

const HomeContactContainer = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }, []);

  const saveGeneralMessage = (e) => {
    e.preventDefault();
    var data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    dispatch(createGeneralMessage(data));
    setSubmitted(true);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Section bgColor="--bs-fade-blue">
      <Section.InnerContainer>
        <Section.Header></Section.Header>
        <Section.Content>
          <Section.Flex>
            <Section.FlexItem width="70%">
              <Section.SubTitle size="1">Who We Are</Section.SubTitle>
              <Section.Text>
              SMAR Investments 1, LLC is a property rentals company located in Portland, Oregon. We are locally owned and we exclusively manage a handful of properties in Oregon and Florida. We manage a small roster of mostly residential properties.
              <br /> <br />
              SMAR Investments has been managing and leasing residential property in the Clackamas, Or area for over 16 years. Each of our properties is well-maintained, well-managed and located in great locations.
              <br /> <br />
              We combine years of experience, superior customer service and the latest technology to streamline the rental process. We make finding and leasing your next property as easy as possible.
              <br /> <br />
              See for yourself. View our current vacancies (TBD) and fill out an application today (TBD). Contact us with your questions and to schedule a personal visit.
              <br /> <br />
              We invite you to see how our locally owned company can serve you.
              </Section.Text>
              <Section.Flex>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>What We Do</Section.SubTitle>
                  <Section.Text>
                  We are locally owned and we exclusively manage a handful of properties. SMAR has been managing and leasing residential property in the Clackamas, OR area for over 16 years. 
                  {/* We have been managing U-Store self storage for over 40 years in Portland and surrounding areas ensuring safe, secure and affordable storage.  We are also uniquely positioned to offer full service records management through Business Records Center.    */}
                  {/* <br /> <br />
                  We invite you to see how our locally owned company can serve you. Contact us today! */}
                  </Section.Text>
                </Section.FlexItem>
                <Section.FlexItem width="50%">
                  <Section.SubTitle>
                    Get Instant Support From Us
                  </Section.SubTitle>
                  <Section.Text>
                  Moving and purchasing a home is a big transaction. We work with everyone from relocating clients to locals and understand that moving into a new home or community, or even a new state, is a big transition. It is a top priority to help our clients become acquainted with local resources, schools and neighbors around them.
                  <br /> <br />
                  Finding that right fit is extremely important to us because meeting and exceeding our client's goals is always one of our main objectives.
                  </Section.Text>
                </Section.FlexItem>
              </Section.Flex>
            </Section.FlexItem>
            <Section.FlexItem width="30%" bg="true">
              {!submitted ? (
                <Form>
                  <Form.FormGroup>
                    <Form.Input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.FormGroup>
                  <Form.FormGroup>
                    <Form.Input
                      type="text"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.FormGroup>
                  <Form.FormGroup>
                    <Form.Input
                      type="text"
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.FormGroup>
                  <Form.FormGroup>
                    <Form.TextArea
                      placeholder="Your Message"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></Form.TextArea>
                  </Form.FormGroup>
                  <Form.FormGroup>
                    <Form.SubmitInput
                      type="submit"
                      value="Send Message"
                      onClick={(e) => saveGeneralMessage(e)}
                    />
                  </Form.FormGroup>
                </Form>
              ) : (
                <Section.Flex style={{ background: "white", padding: "20px" }}>
                  <Section.FlexItem width="100%">
                    <Section.SubTitle>We Will Get In Touch!</Section.SubTitle>
                    <Section.Text>
                      Thank you for submitting your contact message.
                    </Section.Text>
                  </Section.FlexItem>
                </Section.Flex>
              )}
            </Section.FlexItem>
          </Section.Flex>
        </Section.Content>
      </Section.InnerContainer>
    </Section>
  );
};

export default HomeContactContainer;
