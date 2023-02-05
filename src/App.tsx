import About from '@components/About';
import Areas from '@components/Areas';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Areas />
            <Footer />
        </>
    );
};

export default App;
