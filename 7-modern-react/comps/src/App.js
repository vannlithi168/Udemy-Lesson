import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success primary rounded outline>
          Success
        </Button>
      </div>
      <div>
        <Button warning>Primary</Button>
      </div>
      <div>
        <Button>Secondary</Button>
      </div>
      <div>
        <Button>Warning</Button>
      </div>
      <div>
        <Button>Danger</Button>
      </div>
    </div>
  );
}

export default App;
