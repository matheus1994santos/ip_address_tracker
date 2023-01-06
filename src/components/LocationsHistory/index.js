import React from "react";
import { useDispatch } from "react-redux";

import { removeLocationHistory } from "../../containers/HomePage/slice";

export default function LocationsHistory({ locations = [], onRemove }) {
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "#fff", margin: 10, padding: 20 }}>
      <h1>Historico</h1>
      {locations.map((location) => (
        <p
          style={{
            borderBottom: "1px solid #b4b4b4",
            margin: "10px 0",
            backgroundColor: "#dfdfdf",
          }}
        >
          IP: {location.ip} - NAME: {(location.as || {}).name}
          <button
            style={{ margin: "0 10px", padding: 10 }}
            onClick={() => dispatch(removeLocationHistory({ ip: location.ip }))}
          >
            Remover
          </button>
        </p>
      ))}
    </div>
  );
}
