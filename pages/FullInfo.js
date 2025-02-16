import { useRouter } from 'next/router';
import Footer from "../components/Footer/Footer";
import FullInfoComponent from "../components/FullInfoComponent/FullInfoComponent";
import Header from "../components/header/header";
import { desk } from '../components/date'; 

export default function FullInfo() {
    const router = useRouter();
    const { id } = router.query;

  
    const heroData = desk.find(item => item.id === parseInt(id));

   
    if (!heroData) {
        return <div></div>;
    }

    return (
        <div>
            <Header />
            <FullInfoComponent heroData={heroData} />
            <Footer />
        </div>
    );
}