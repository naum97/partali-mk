import React from "react";
import CustomGrid from "../components/CustomGrid/CustomGrid";
import CustomGridContentBox from "../components/CustomGrid/CustomGridContentBox/CustomGridContentBox";
import CustomGridImageBox from "../components/CustomGrid/CustomGridImageBox/CustomGridImageBox";
import image1 from "../assets/images/boximage1.webp";
import TitledParagraph from "../components/TitledParagraph/TitledParagraph";
const AboutPage = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100px",
          alignItems: "center",
          letterSpacing: "0.2em",
          fontSize: "25px",
          fontWeight: "300",
        }}
      >
        <span>ШТО Е ПАРТАЛИ.МК?</span>
      </div>
      <CustomGrid>
        <CustomGridContentBox>
          <TitledParagraph
            title="За Партали.мк"
            text="  Партали е компанија која ги обединува локалните бутици, овозможува
            онлајн купување и врши достава на разновидни парчиња облека до
            вашиот дом или канцеларија. Заедно со сопствениците на бутиците
            нашиот тим нуди неверојатна, уникатна и комфорна модна палета за
            урбаниот човек, креирана со најголемо внимание и до најситните
            детали. Работењето со малите брендови ни овозмозможува да одиме
            чекор до чекор со најновите трендови, и последнователно наша цел е
            да ги привлечеме купувачите со автентичен и модерен стил."
          />
        </CustomGridContentBox>
        <CustomGridImageBox image={image1} />
        <CustomGridImageBox image={image1} />
        <CustomGridContentBox>
          <TitledParagraph
            title="Како работи Партали.мк?
           Која е нашата визија?"
            text="Тимот на Партали.мк работи на тој начин што се поврзува со локалните бутици насекаде низ С. Македонија, ги избира најпосакуваните парчиња облека и ги подготвува за онлајн продажба, посветувајќи се да Вие, купувачите имате безгрижен онлајн шопинг. 
            Но, нашата работа не завршува тука: За искуството да биде целосно, ние имаме посебен тим што ќе се погрижи навремено да Ви ги достави купените парчиња каде и да сте! 
           Ние веруваме дека нашата идеја е уникатна на територијата на С. Македонија, па и на Балканот и последователно наша мисија е да станеме главна платформа за онлајн шопинг од Гостивар до Скопје, од Скопје до Велес, од Велес до Охрид, работејќи по високи стандарди и грижејќи се да Вие секогаш да бидете на прво место. "
          />
        </CustomGridContentBox>
      </CustomGrid>
    </React.Fragment>
  );
};

export default AboutPage;
