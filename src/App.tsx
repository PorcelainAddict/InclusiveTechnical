import './App.css';
import ProductPage from './Pages/Product/products';
import { Layout } from './Components/Layout/Layout';

//remove app.css with custom css in Header (also do footer)
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
