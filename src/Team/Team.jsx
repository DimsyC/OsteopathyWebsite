import React from "react";
import Member from "./Member";
import { Row, Col } from "react-bootstrap";
import HugoJuarez_img from './Image/HugoJuarez.jpg'
import JeanSimonLacroix_img from './Image/JeanSimonLacroix.jpg'
import AnthonyElAsmar_img from './Image/AnthonyElAsmar.jpg'
import "./Team.scss";

function Team() {
  return (
    <div  id="Team">
    <h1 className='section-title'>Notre Equipe !</h1>
    <Row>
        <Col sm='12'>
          <Member
            name="Hugo Juarez"
            text="Je suis un fervent croyant que l’activité physique à un impact positif sur la santé physique comme psychologique. De fait, mes champs d’expertises couvrent la kinésiologie (mouvement du corps humain) et la psychologie (émotions, cognition et les comportements). Grâce à ces deux expertises, je suis en mesure d’offrir un encadrement optimal pour toutes personnes désirant accroître leur plein potentiel. De plus, je suis une personne de confiance avec une écoute sincère. Mes années d'expériences dans le domaine de l’activité physique m’ont permis de découvrir que la communication est un élément crucial du développement personnel. Ainsi, je peux aider enfants, adolescents, adultes et personnes âgées dans l’atteinte de leur objectif."
            image={HugoJuarez_img}
          />
        </Col>
        <Col sm='12'>
          <Member
            name="Jean-Simon Lacroix"
            text="Je suis une personne qui est passionné de l’entrainement physique et du sport. Je suis un athlète de hockey et j’ai pratiqué ce sport pendant dix ans. J’ai aussi dix ans d’expérience en entrainement physique et en nutrition. De plus, J’ai travaillé de nombreuses années en vente de nutriments et de suppléments. J’ai un vif intérêt pour la santé mentale, physique et pour le bien être des gens, ce qui m’a poussé à enrichir mes connaissances au collège de massothérapie Massocie. Je me spécialise en kinésithérapie, massage sportif, tissus profond et thérapie par ventouses. Enfin, je souhaite aider les gens à atteindre la meilleure version d’eux-mêmes, en les aidant à améliorer leur posture et leur habilité à performer au quotidien. "
            image={JeanSimonLacroix_img}
          />
        </Col>
        <Col sm='12'>
          <Member
            name="Anthony El Asmar"
            text="Dans le but d’offrir à mes patients les meilleurs connaissances scientifiques et pratiques, j’ai complété plusieurs diplômes universitaires, dont un doctorat pratique en physiothérapie au Liban et d’une maitrise en ostéopathie et thérapie manuelle. Ce parcours m’a aussi amené à enseigner et offrir des cours dans 3 universités différentes. Ce bagage académique combiné à mes années d’expériences pratiques dans différents milieux (hôpitaux, polycliniques et cliniques privées) me permet d’offrir des services de qualité à mes patients. Actuellement assistant d’un professeur à l’école d’ostéopathie, je serais prendre vos soucis à cœur et mettre mes meilleurs efforts afin de vous permettre d’améliorer votre qualité de vie."
            image={AnthonyElAsmar_img}
          />
        </Col>
    </Row>
    </div>
  );
}

export default Team;
