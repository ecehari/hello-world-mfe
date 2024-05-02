import HelloWorld from "./HelloWorld";
import ReactDOM from 'react-dom/client';

const mount = (e1 : Element) : void => {

    ReactDOM.createRoot(e1).render(<HelloWorld/>);
}

export default mount;