import React, { useState } from "react";
import { useIotUnlock } from "../service/iot.service";

export default function Main() {
  const [bikeId, setBikeId] = useState("");
  const { mutate } = useIotUnlock();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bikeId) mutate(bikeId);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Bike Id</p>
      <input onChange={(e) => setBikeId(e.target.value)} value={bikeId} />
      <button>확인</button>
    </form>
  );
}
