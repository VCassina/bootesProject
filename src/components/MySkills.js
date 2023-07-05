import React from "react";
import SkillsArticle from "../items/SkillsArticle";
import data from "../datas/skillsArticle.json";
import AnchorTarget from "../items/AnchorTarget";
import frontEndIcon from "../assets/frontEndByMacrovector.webp"
import backEndIcon from "../assets/backEndByMacrovector.webp"
import seoIcon from "../assets/seoByMacrovector.webp"

function MySkills() {
  const imgSrc = [frontEndIcon, backEndIcon, seoIcon];

  return (
    <article className="skills_container darkComponent" >
      <AnchorTarget id="skills"/>
      <div className="importantComponent">
        <h2 className="title-skills"><span>_</span><span>Nos competences</span></h2>
        <div className="skills_content">
        {data.map((article, index) => (
            <SkillsArticle
              key={index}
              alt={article.alt}
              img={imgSrc[index]}
              title={article.title}
              description={article.description}
              skills={article.skills}
            />
            ))}
        </div>
        <figcaption className="skills_content-credit">Icones designed by Macrovector - Thank you !</figcaption>
      </div>
    </article>
  );
}

export default MySkills;
