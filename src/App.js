import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [sjedalica, postaviSjedalicu] = useState({
    materijal: "",
    cijena: "",
    vrsta_sjedalice: ""
  });

  const [output, setOutput] = useState({
    materijal: "",
    cijena: "",
    vrsta_sjedalice: ""
  });

  const counter = useRef(0);
  const [counterTwo, setCounter] = useState(0);

  useEffect(() => {
    counter.current = counter.current + 1;
    setCounter((counterTwo) => counterTwo + 1);
  }, [output]);

  useEffect(() => {
    counter.current = 0;
    setCounter(0);
  }, []);

  const inputRef = useRef();

  const HandleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();
    setOutput(sjedalica);
  };

  return (
    <div className="App">
      <form onSubmit={HandleSubmit}>
        <label>Materijal</label>
        <input
          type="text"
          required
          onChange={(e) => {
            postaviSjedalicu({ ...sjedalica, materijal: e.target.value });
          }}
        />
        <br />
        <label>cijena:</label>
        <input
          type="text"
          required
          onChange={(e) => {
            postaviSjedalicu({ ...sjedalica, cijena: e.target.value });
          }}
        />
        <br />
        <label>vrsta_sjedalice</label>
        <input
          type="text"
          required
          ref={inputRef}
          onChange={(e) => {
            postaviSjedalicu({ ...sjedalica, vrsta_sjedalice: e.target.value });
          }}
        />
        <br />
        <input type="submit" value="posalji" />
      </form>
      <div>
        materijal: {output.materijal}
        <br />
        <br />
        cijena: {output.cijena}
        <br />
        <br />
        vrsta sjedalice: {output.vrsta_sjedalice}
        <br />
        <br />
        broj unosa: {counter.current}
      </div>
    </div>
  );
}
