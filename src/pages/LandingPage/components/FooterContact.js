import React from "react";
import emailjs from "emailjs-com";
import { Button, Center, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const FooterContact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_itsq19l",
        "template_7yqngfn",
        e.target,
        "user_GgDksWjUYgwu8lRTxSZ1Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Text as="samp" color="#868484" fontSize="lg">
        Leave <strong className="purple">A Message</strong>
      </Text>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label> <br />
        <input class="form-control mb-1" type="text" name="user_name" />
        <label>Email</label> <br />
        <input
          required
          class="form-control mb-1"
          type="email"
          name="user_email"
        />
        <label>Message</label> <br />
        <textarea class="form-control" name="message" />
        <Button
          className="post-btn"
          borderRadius="2px"
          mt={3}
          py={3}
          bg="transparent"
          variant="outline"
          type="submit"
        >
          <Center>
            <span style={{ marginRight: 5 }}>Send </span>{" "}
            <FontAwesomeIcon size="xs" color="white" icon={faPaperPlane} />{" "}
          </Center>
        </Button>
      </form>
    </>
  );
};

export default FooterContact;
