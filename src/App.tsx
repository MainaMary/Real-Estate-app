import { useState } from "react";
import { allRoutes } from "./routes/routes";
import CustomLoader from "./components/CustomLoader";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="max-w-[1300px] m-auto">
      <RouterProvider router={allRoutes} fallbackElement={<CustomLoader />} />
    </div>
  );
}

export default App;
