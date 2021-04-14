import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("React is Trending", "Code - 9999 readers")}
      {newsArticle("Coronavirus: Lagos updates", "Tops news - 324 readers")}
      {newsArticle("Bitcoin hits new high", "Tops news - 2,324 readers")}
      {newsArticle("Is Redux Too good?", "Code - 2,324 readers")}
      {newsArticle(
        "People who have recovered from COVID-19 may be at risk of developing blood clots: Singapore study",
        "Research Assistant Florence Chioh and Assistant Professor Christine Cheung analysing the data from 30 blood samples of recovered COVID-19 patients."
      )}
      {newsArticle(
        "Covid-19: Singapore Updates",
        "14 new COVID-19 cases in Singapore, all imported"
      )}
      {newsArticle(
        "More than 18,200 people visited Singapore through unilateral border openings; 70% from China",
        " about 2,400 travellers from Australia, 800 from Brunei, as well as 12,800 from mainland China, which made up about 70 per cent of the total number"
      )}
      {newsArticle(
        "Leaders of Malaysia, Singapore to discuss reopening of border: Hishammuddin",
        " KLUANG: Malaysia Prime Minister Muhyiddin Yassin is expected to discuss the reopening of the border with Singapore Prime Minister Lee Hsien Loong early May, said Malaysian Foreign Minister Hishammuddin Hussein on Monday (Apr 12)."
      )}
    </div>
  );
}

export default Widgets;
