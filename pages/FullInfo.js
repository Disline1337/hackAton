import Footer from "../components/Footer/Footer";
import Header from "../components/header/header";


export default function FullInfo() {
    const heroData = {
        id: 1,
        name: "���� ������",
        image: "https://example.com/hero.jpg",
        born: "1920-1943",
        awards: ["����� ������� ������", "������ �� ������"],
        bio: "������ ����� ��������� �����..."
    };
    return (
        <div>
            <Header></Header>
            
            <Footer></Footer>
        </div>
    )
}