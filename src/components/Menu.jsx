import "../styles/Home.css";
const Menu = ({title, img}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={img}/>
    </div>
  );
}

export default Menu;