import { useState } from "react";

function ComponenteId() {
  const [id, setId] = useState(1);

  function leer(e) {
    console.log(e.target.value);
    setId(e.target.value)
  }
  return (
    <label htmlFor="id-form">
      <input type="text" id="id-form" value={id} onChange={leer} />
    </label>
  );
}

export default ComponenteId;
