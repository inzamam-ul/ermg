import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SingInSignUpButtons from "./SingInSignUpButtons";

const MailchimpFormContainer = (props) => {
  const postUrl = `https://ermg.us10.list-manage.com/subscribe/post?u=371127f5e4304f5197fb35ee6&id=ca582c54b4`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <SingInSignUpButtons
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
