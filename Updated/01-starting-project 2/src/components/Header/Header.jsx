import reactImg from '../../assets/react-core-concepts.png'
const word = ["Fundamental", "Core", "Crucial"];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const genWord = word[getRandomNumber(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {genWord} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

export default Header;
