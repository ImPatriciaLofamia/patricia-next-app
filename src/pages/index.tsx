import React, {useState} from "react"
import ToggleButton from 'react-toggle-button'

export default function Home() {
  const [toggleOn, setToggleOn] = useState(false);
  return (
    <div className="flex justify-center items-center  bg-green-300 h-screen">
      <ToggleButton
          value={toggleOn}
          onClick={() => {
            setToggleOn(!toggleOn);
          }}
        />
    </div>
  );
        }