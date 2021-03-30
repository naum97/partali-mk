import classes from "./ContactUsPage.module.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
const ContactUsPage = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Content}>
        <span style={{ fontSize: "24px" }}>KОРИСНИЦИ</span>
        <span
          style={{
            fontSize: "18px",
            color: "#ba4c2a",
            maxWidth: "80%",
            fontWeight: "300",
          }}
        >
          Прашања за купувања на <br /> интернет
        </span>
        <div className={classes.ContactContainer}>
          <FontAwesomeIcon
            className={classes.ContactIcon}
            icon={faCommentDots}
            size="2x"
          />
          <span style={{ textAlign: "left" }}>
            <span>Разговор</span> <br />
            <span style={{ fontSize: "13px" }}>
              Од понеделник до петок од <br />
              9:00 до 17:00
            </span>
          </span>
        </div>
        <div className={classes.ContactContainer}>
          <FontAwesomeIcon
            className={classes.ContactIcon}
            icon={faEnvelopeOpen}
            size="2x"
          />
          <span style={{ textAlign: "justify", marginTop: "8px" }}>
            Е-пошта
          </span>
        </div>
      </div>
      <div className={classes.Content}>
        <span style={{ fontSize: "24px" }}>ПАРТНЕРИ</span>
        <span
          style={{
            fontSize: "18px",
            color: "#ba4c2a",
            maxWidth: "80%",
            fontWeight: "300",
          }}
        >
          Заинтересирани сте за <br /> соработка?
        </span>
        <p
          style={{
            maxWidth: "75%",
            textAlign: "center",
            fontWeight: "300",
            fontSize: "16px",
          }}
        >
          Во соработка со Партали.мк добивате дигитализација на Вашиот бутик,
          промоција на Вашиот бренд и достава на Вашите производи до секој
          клиент, што води до зголемена побарувачка на Вашите уникатни
          производи! Доколку сте заинтересирани да бидете дел од нашиот тим,
          испратете ни емаил, а ние веднаш ќе ве исконтактираме.
        </p>
        <div
          className={classes.ContactContainer}
          style={{ justifyContent: "center" }}
        >
          <FontAwesomeIcon
            className={classes.ContactIcon}
            icon={faEnvelopeOpen}
            size="2x"
          />
          <span style={{ textAlign: "justify", marginTop: "8px" }}>
            Е-пошта
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
