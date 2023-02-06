import { useState } from "react";

const useCounterHook = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleVisisble =(e:any) =>{
    setVisible(prev => !prev)
  }
  return { visible, handleVisisble };
};
export default useCounterHook;
