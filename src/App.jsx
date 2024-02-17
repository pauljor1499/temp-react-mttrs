import { RouteComponents } from "./router/index";
import { Provider } from "react-redux";
import { Store } from "./store/Store";

const App = () => {
    return (
        <Provider store={Store}>
            <RouteComponents />
        </Provider>
    );
};
export default App;
