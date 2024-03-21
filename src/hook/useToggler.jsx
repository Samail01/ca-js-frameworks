import { useState } from "react";

export function useToggler() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive((prev) => !prev);
  }
  return [active, handleActive];
}
