import IdCard from "./components/id-card/IdCard";
import Greetings from "./components/greetings/Greetings";
import Random from "./components/random/Random";

function App() {
  return (

    <div className="App">
      
      <div className="id-cards">
        <strong className="m-2">IdCard</strong>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender={'female'}
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </div>

      <div className="Greetings m-2" >
      <strong>Greetings</strong>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className="Random">
      <strong className="m-2">Random</strong>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

    </div>
  );
}

export default App;
