import Menu from "./components/menu/menu";
import Contain from "./components/contain";

const App = (props) => {
  return (
    <div>
      <Menu />
      <Contain contain={props.state.contain} />
    </div>
  );
};

export default App;
