import './App.css';
import ProductPage from './Pages/Product/products';
import { Layout } from './Components/Layout/Layout';

function App() {
    return (
        <div className="App">
            <>
                <Layout>
                    <ProductPage />
                </Layout>
            </>
        </div>
    );
}

export default App;
