import reactImg from "../assets/react-core-concepts.png";
const reactDescription = [
    "Web developer",
    "Software Engineer",
    "Frontend developer",
  ];
  
  function getRandomItem(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function Header() {
    const description = reactDescription[getRandomItem(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>Rufiyan Hasan</h1>
        <p>A {description} based in Mumbai, India.</p>
      </header>
    );
  }

  