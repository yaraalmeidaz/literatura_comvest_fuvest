
import React from "react";

export default function TimelineItem({ titulo, descricao }) {
  return (
    <div className="evento">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}
