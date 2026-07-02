
/* const Header = (props) => {
  return <h1>Hello {props.name}</h1>;
}

export default Header;
 */


// best way  for Destructuring Props
const Header = ({name}) => {
  return <h1> Full Name : {name}</h1>;
}

export default Header;