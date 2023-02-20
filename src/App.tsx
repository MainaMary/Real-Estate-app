import { routes } from "./routes/routes";
import CustomLoader from "./components/CustomLoader";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className=" w-full md:max-w-[1300px] m-auto">
      <RouterProvider router={routes} fallbackElement={<CustomLoader />} />
    </div>
  );
}

export default App;
