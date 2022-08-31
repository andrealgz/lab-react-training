
function Greetings({ lang, children }){
  let  greeting = "";
  switch( lang ) {
    case "de":
      greeting = "Hallo";
      break;
    case "en":
      greeting = "Hello";
      break;
    case "es":
      greeting = "Hola";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    default:
      greeting = "Holi";
  }
    return (
      <div className="greeting-card d-flex border border-dark m-2">
        <h6 className="m-1"> {greeting} {children}</h6>
      </div>
    )
};

export default Greetings;