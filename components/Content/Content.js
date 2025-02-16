import { useState } from 'react';
import style from './Content.module.css';
import HumanBlock from '../HumanBlock/HumanBlock';

export default function Content() {
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const born_place = ['с. Новомусино', 'с. Решивка', 'Решето', 'чё нибудь ещё'];
    const duty_place = ['А', 'Б', 'В'];

    // Увеличим количество элементов для демонстрации пагинации


    const desk = [
        {
            image: "https://source.unsplash.com/random/200x200?sig=1",
            name: "Абдршин Рамиль Хайруллаевич",
            description: "При форсировании Днепра отделение под командованием сержанта Абдршина первым заняло оборону и обеспечило успешную переправу на другой берег всем остальным подразделениям.",
            DateAndPlaceOfBirth: ["01.11.1925", "Новомусино Шарлыкского района Оренбургской области"],
            DateAndPlaceOfDepartureOrDeath: ["08.11.1943", "с.Зарубинцы Каневский район, Черкасская область, Украина"],
            MilitarySpecialty: "Сержант Командир отделения 1-ого мотострелкового батальона 69-й механизированной бригады",
            MilitaryRankAndJobTitle: "1-й мотострелковый батальон, 69-я механизированная бригада, 9-й механизированный корпус, 3-я гвардейская танковая армия",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 17 ноября 1943 года за образцовое выполнение боевых заданий командования на фронте борьбы с немецко-фашистскими захватчиками и проявленные при этом мужество и героизм присвоено звание Герой Советского Союза (посмертно)"],
            Biography: "Родился в ноябре 1925 года в селе Новомусино Шарлыкского района, Оренбургской области, Россия. Окончил десять классов, а в июле 1942 года он с отличием окончил Каттакурганское педагогическое училище.",
            HeroFeat: "В ночь на 22.09.43 первым форсировал Днепр. В бою за с. Зарубинцы в период атаки со своим отделением первым ворвался в село и уничтожил до 10 немецких солдат.",
            Awards: "Награжден орденом Ленина и медалью «Золотая Звезда»."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=2",
            name: "Иванов Иван Иванович",
            description: "Отличился в боях за освобождение Белоруссии, лично уничтожив несколько вражеских танков.",
            DateAndPlaceOfBirth: ["15.05.1920", "Минск, Белоруссия"],
            DateAndPlaceOfDepartureOrDeath: ["12.07.1944", "г. Минск, Белоруссия"],
            MilitarySpecialty: "Командир танкового взвода",
            MilitaryRankAndJobTitle: "Танковая бригада, 1-й Белорусский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 20 июля 1944 года"],
            Biography: "Родился в Минске, окончил танковое училище. Участвовал в боях с первых дней войны.",
            HeroFeat: "В ходе операции «Багратион» лично уничтожил 5 вражеских танков.",
            Awards: "Награжден орденом Красного Знамени."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=3",
            name: "Петров Петр Петрович",
            description: "Командир артиллерийского расчета, отличившийся в боях под Сталинградом.",
            DateAndPlaceOfBirth: ["10.03.1918", "Сталинград, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["02.02.1943", "Сталинград, СССР"],
            MilitarySpecialty: "Командир артиллерийского расчета",
            MilitaryRankAndJobTitle: "62-я армия, Сталинградский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 5 февраля 1943 года"],
            Biography: "Родился в Сталинграде, с детства мечтал стать военным.",
            HeroFeat: "В ходе Сталинградской битвы уничтожил несколько вражеских танков и пехотных подразделений.",
            Awards: "Награжден орденом Отечественной войны I степени."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=4",
            name: "Сидоров Сидор Сидорович",
            description: "Летчик-истребитель, сбивший более 20 вражеских самолетов.",
            DateAndPlaceOfBirth: ["22.06.1919", "Москва, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["15.08.1943", "Курская дуга, СССР"],
            MilitarySpecialty: "Летчик-истребитель",
            MilitaryRankAndJobTitle: "16-й воздушная армия, 1-й Белорусский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 20 августа 1943 года"],
            Biography: "Родился в Москве, окончил летное училище. Участвовал в воздушных боях с первых дней войны.",
            HeroFeat: "В ходе Курской битвы сбил 5 вражеских самолетов за один день.",
            Awards: "Награжден орденом Красной Звезды."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=5",
            name: "Кузнецов Алексей Васильевич",
            description: "Сапер, обезвредивший более 100 мин в ходе войны.",
            DateAndPlaceOfBirth: ["05.09.1922", "Ленинград, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["27.01.1944", "Ленинград, СССР"],
            MilitarySpecialty: "Сапер",
            MilitaryRankAndJobTitle: "67-я армия, Ленинградский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 30 января 1944 года"],
            Biography: "Родился в Ленинграде, с детства увлекался техникой.",
            HeroFeat: "В ходе прорыва блокады Ленинграда обезвредил более 50 мин за один день.",
            Awards: "Награжден медалью «За отвагу»."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=6",
            name: "Смирнов Александр Николаевич",
            description: "Медик, спасший более 200 раненых солдат.",
            DateAndPlaceOfBirth: ["12.04.1921", "Киев, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["06.11.1943", "Киев, СССР"],
            MilitarySpecialty: "Военный врач",
            MilitaryRankAndJobTitle: "38-я армия, 1-й Украинский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 10 ноября 1943 года"],
            Biography: "Родился в Киеве, окончил медицинский институт.",
            HeroFeat: "В ходе боев за Киев спас более 50 раненых солдат за один день.",
            Awards: "Награжден орденом Красного Креста."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=7",
            name: "Васильев Василий Васильевич",
            description: "Разведчик, добывший ценные сведения о вражеских войсках.",
            DateAndPlaceOfBirth: ["18.07.1923", "Одесса, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["10.04.1944", "Одесса, СССР"],
            MilitarySpecialty: "Разведчик",
            MilitaryRankAndJobTitle: "3-й Украинский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 15 апреля 1944 года"],
            Biography: "Родился в Одессе, с детства мечтал стать разведчиком.",
            HeroFeat: "В ходе освобождения Одессы добыл ценные сведения о вражеских войсках.",
            Awards: "Награжден орденом Славы."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=8",
            name: "Николаев Николай Николаевич",
            description: "Командир партизанского отряда, уничтожившего несколько вражеских эшелонов.",
            DateAndPlaceOfBirth: ["25.12.1917", "Минск, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["03.07.1944", "Белоруссия"],
            MilitarySpecialty: "Командир партизанского отряда",
            MilitaryRankAndJobTitle: "Партизанский отряд «За Родину»",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 10 июля 1944 года"],
            Biography: "Родился в Минске, с первых дней войны организовал партизанский отряд.",
            HeroFeat: "В ходе операции «Рельсовая война» уничтожил несколько вражеских эшелонов.",
            Awards: "Награжден орденом Ленина."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=9",
            name: "Михайлов Михаил Михайлович",
            description: "Артиллерист, отличившийся в боях за Берлин.",
            DateAndPlaceOfBirth: ["30.10.1924", "Москва, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["02.05.1945", "Берлин, Германия"],
            MilitarySpecialty: "Командир артиллерийского орудия",
            MilitaryRankAndJobTitle: "8-я гвардейская армия, 1-й Белорусский фронт",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 10 мая 1945 года"],
            Biography: "Родился в Москве, окончил артиллерийское училище.",
            HeroFeat: "В ходе штурма Берлина уничтожил несколько вражеских огневых точек.",
            Awards: "Награжден орденом Красного Знамени."
        },
        {
            image: "https://source.unsplash.com/random/200x200?sig=10",
            name: "Алексеев Алексей Алексеевич",
            description: "Моряк, участвовавший в обороне Севастополя.",
            DateAndPlaceOfBirth: ["14.02.1920", "Севастополь, СССР"],
            DateAndPlaceOfDepartureOrDeath: ["09.05.1944", "Севастополь, СССР"],
            MilitarySpecialty: "Матрос",
            MilitaryRankAndJobTitle: "Черноморский флот",
            TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 15 мая 1944 года"],
            Biography: "Родился в Севастополе, с детства мечтал стать моряком.",
            HeroFeat: "В ходе обороны Севастополя участвовал в отражении нескольких атак врага.",
            Awards: "Награжден медалью «За оборону Севастополя»."
        },
        
    ];

    const totalPages = Math.ceil(desk.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const handleToggle = (list, setList, item) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className={style.mainblock}>
            <div className={style.Filther}>
                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Cities</h3>
                    {born_place.map(city => (
                        <div
                            key={city}
                            className={style.filterItem}
                            onClick={() => handleToggle(selectedCities, setSelectedCities, city)}
                        >
                            <div className={`${style.checkbox} ${selectedCities.includes(city) ? style.selectedCheckbox : ''}`}>
                                {selectedCities.includes(city) && '✓'}
                            </div>
                            {city}
                        </div>
                    ))}
                </div>

                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Place of Service</h3>
                    {duty_place.map(place => (
                        <div
                            key={place}
                            className={style.filterItem}
                            onClick={() => handleToggle(selectedPlaces, setSelectedPlaces, place)}
                        >
                            <div className={`${style.checkbox} ${selectedPlaces.includes(place) ? style.selectedCheckbox : ''}`}>
                                {selectedPlaces.includes(place) && '✓'}
                            </div>
                            {place}
                        </div>
                    ))}
                </div>

                <div className={style.selectedFilters}>
                    <div>Selected cities: {selectedCities.join(', ') || 'none'}</div>
                    <div>Selected places: {selectedPlaces.join(', ') || 'none'}</div>
                </div>
            </div>

            <div className={style.contentWrapper}>
                <div className={style.HumanBlocks}>
                    {desk.map(elem => (
                        <HumanBlock key={elem.name} props={elem} />
                    ))}
                </div>

                <div className={style.pagination}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? style.activePage : ''}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}