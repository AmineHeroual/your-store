import '@/styles/globals.css';
import Mainlayout from '@/components/Mainlayout';
import { StateProvider } from '@/utils/StateContext';
// import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:9000/products';

export default function App({ Component, pageProps }) {
    return (
        <StateProvider>
            <Mainlayout>
                <Component {...pageProps} />;
            </Mainlayout>
        </StateProvider>
    );
}
