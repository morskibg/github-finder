import PropTypes from "prop-types";

const Navbar = (props) => {
  const { icon, title } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};
Navbar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

export default Navbar;
