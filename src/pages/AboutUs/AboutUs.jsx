import Card from "../../components/Card/Card";
import melanie from "../../assets/melanie-min.jpeg";
import alan from "../../assets/alan-min.png";
import axel from "../../assets/axel-min.jpeg";
import victoria from "../../assets/victoria-min.jpg";
import diego from "../../assets/diego-min.png";
import jorge from "../../assets/jorge.jpg";
import adrian from "../../assets/adrian-min.jpg";
import Footer from "../../components/Footer/Footer";
import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <div className={style.background}>
        <Card
          name="Melanie Leal"
          instagramUrl=""
          githubUrl=""
          linkedinUrl=""
          photo={melanie}
          biography="Originaria del estado de Hidalgo, graduada de la Licenciatura en Historia del Arte."
        />

        <Card
          name="Alan Ramos"
          instagramUrl=""
          githubUrl=""
          linkedinUrl=""
          photo={alan}
          biography="Estudiante de ingenieria en informatica, originario de GDL. Me gusta la natacion, la mixologia y salir a conocer restaurantes bonitos. Rol Develop team."
        />

        <Card
          name="Axel Mercado"
          instagramUrl=""
          githubUrl=""
          linkedinUrl=""
          photo={axel}
          biography="23 años, Vive en CDMX, Pasante de ingeniería en sistemas automotrices, apasionado por las motocicletas, videojuegos, ejercicio y programación. Rol en el proyecto Develop team."
        />

        <Card
          name="Victoria Bolaños"
          instagramUrl=""
          githubUrl=""
          linkedinUrl=""
          photo={victoria}
          biography="Amante de los libros, la danza, los idiomas, la tecnología y el diseño, licenciada en innovación de negocios y mercadotecnia, mujer en búsqueda de respuestas a las mil y un preguntas formuladas cada día. Parte del Development Team en el proyecto."
        />
        <Card
          name="Jorge Hernandez"
          photo={jorge}
          biography="Descripcion de jorge"
        />
        <Card
          name="Diego Pahua"
          instagramUrl="https://www.instagram.com/d7egps/"
          githubUrl="https://github.com/d7egps"
          linkedinUrl="https://www.linkedin.com/in/d7egps/"
          photo={diego}
          biography="Soy un miembro del equipo de desarrolladores con formación en Pedagogía y pasión por la arquitectura de software, con la necesidad de mantenerme actualizado y buscando oportunidades para crecer profesionalmente, con ganas de afrontar cualquier reto que se me presente."
        />

        <Card
          name="Adrián González"
          instagramUrl=""
          githubUrl=""
          linkedinUrl=""
          photo={adrian}
          biography="Originaria del estado de Hidalgo, graduada de la Licenciatura en Historia del Arte."
        />
      </div>
      <Footer styleFoo={style.foo} />
    </>
  );
}
