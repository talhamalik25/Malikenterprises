import HeroSection from './HeroSection';
import ProductsSection from './ProductsSection';
import ClientsSection from './ClientsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import FAQsSection from './FAQsSection';
import LocationSection from './LocationSection';
import ContactForm from './ContactForm';
import HomeNavbar from './HomeNavbar';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <HomeNavbar />
            <HeroSection />
            <ProductsSection />
            <ClientsSection />
            <WhyChooseUsSection />
            <FAQsSection />
            <LocationSection />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;