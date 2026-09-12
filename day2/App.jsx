import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Travel Explorer</h1>

      <div className="cards">
        <ProfileCard
          name="Raigad Fort"
          destination="Maharashtra"
          description="A historic fort known for its rich Maratha heritage."
        />

        <ProfileCard
          name="Goa"
          destination="India"
          description="A popular destination known for beaches and scenic views."
        />

        <ProfileCard
          name="Mahabaleshwar"
          destination="Maharashtra"
          description="A beautiful hill station famous for nature and pleasant weather."
        />
      </div>
    </div>
  );
}

export default App;