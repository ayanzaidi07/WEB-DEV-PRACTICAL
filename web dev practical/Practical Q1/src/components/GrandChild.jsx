import { useContext } from "react";
import UserContext from "./UserContext";

function GrandChild() {
  const name = useContext(UserContext);

  return (
    <div>
      <h3>Hello {name}</h3>
    </div>
  );
}

export default GrandChild;