import React from "react";
import Layout from "../../components/Layout";
import HR from "../../components/HR";
import s from "./Contact.module.scss";
import { ReactComponent as Email } from "../../images/email.svg";

const Contact = () => (
  <Layout headText="Contact">
    <div className={s.root}>
      <div className={s.emailContainer}>
        <Email />
        <h4 className={s.email}>hello@yashbathia.in</h4>
      </div>
      <div className={s.formContainer}>
        <div className={s.head}>
          <h2 className={s.title}>How Can I Help You?</h2>
          <HR />
        </div>
        <div className={s.form}>
          <div className={s.firstPart}>
            <input className={s.input} placeholder="Full Name" maxlength="20" />
            <input className={s.input} placeholder="Email" maxlength="20" />
            <input className={s.input} placeholder="Subject" maxlength="20" />
            <button className={s.btn}>Send Message</button>
            <span className={s.warning}>Sorry currently it is not working!</span>
          </div>
          <div className={s.secondPart}>
            <textarea
              type="textarea"
              className={s.inputArea}
              placeholder="Message"
              maxlength="100"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
