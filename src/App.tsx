

import { useState } from "react";
import Propsdemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo1 from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";

import "./App.css";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView == "props1" ? <Propsdemo title="Props Demo" /> : null}
            {selectedView == "listDemo" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "eventDemo1" ? <EventDemo1 title="Event Demo" /> : null}
            {selectedView == "formsDemo" ? <FormUncontrolled title="Forms Demo" /> : null}
            {selectedView == "stateDemo" ? <StateDemo1 title="State Demo 1" /> : null}
            {selectedView == "stateDemo2" ? <StateDemo2 title="State Demo 2" /> : null}
            {selectedView == "stateDemo3" ? <StateDemo3 title="State Demo 3" /> : null}
            {selectedView == "useDemo" ? <UseEffectDemo title="UseEffect Demo" /> : null}

          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("listDemo")}>
        List Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("eventDemo1")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("formsDemo")}>
        Forms
      </button>
      <button className="btn-w100" onClick={() => handleSelected("stateDemo")}>
        State Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("stateDemo2")}>
        State Demo 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("stateDemo3")}>
        State Demo 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useDemo")}>
        Use effect
      </button>
    </>
  );
};
