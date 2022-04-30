import Card from "./component/card";
import Calendar from "./assets/calendar.svg";
import Shake from "./assets/handshake.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [hover, setHover] = useState(false);
  return (
    <main>
      <section className="section">
        {!hover && <h1>Standard</h1>}
        {hover && <h1>Hover</h1>}
        <div className="container">
          <Card
            src={Calendar}
            text="Fast & Easy"
            message="AVIEW guarantees a 24-hour turnaround on subtitle and 48 hours on dubbed content. "
            setHover={setHover}
            />
          <Card
            src={Shake}
            text="Flexible"
            message="We offer a personalized payment plan and tailor our process to your needs."
            setHover={setHover}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
