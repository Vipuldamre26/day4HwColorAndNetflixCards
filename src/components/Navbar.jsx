import "./navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul>
        <li
          onClick={() => {
            props.changePage(true);
          }}
        >
          Color Cards
        </li>
        <li onClick={() => props.changePage(false)}>Netflix Cards</li>
      </ul>
    </div>
  );
};

export default Navbar;
