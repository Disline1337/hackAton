import { useState } from 'react';
import style from './Content.module.css';
import HumanBlock from '../HumanBlock/HumanBlock';

export default function Content() {
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const cities = ['Moscow', 'London', 'Paris'];
    const places = ['Hospital', 'School', 'Office'];

    // Увеличим количество элементов для демонстрации пагинации
    const SET = Array(100).fill().map((_, i) => ({
        image: "https://cdn140.picsart.com/quicktools-logo.svg",
        name: `set${i + 1}`,
        descript: "dsfsdf",
        born: "1414123123"
    }));

    const desk = {
        name: "Абдршин Рамиль Хайруллаевич",
        description: "При форсировании Днепра отделение под командованием сержанта Абдршина первым заняло оборону и обеспечило успешную переправу на другой берег всем остальным подразделениям. Во время боя командир отделения Абдршин был смертельно ранен.",
        DateAndPlaceOfBirth: ["01.11.1925", "Новомусино Шарлыкского района Оренбургской области"],
        DateAndPlaceOfBirth: ["февраль 1943", "г. Каттакурган Самаркандской области Узбекской СССР"],
        DateAndPlaceOfDepartureOrDeath: ["08.11.1943", "с.Зарубинцы Каневский район, Черкасская область, Украина"],
        MilitarySpecialty: "Сержант Командир отделения 1-ого мотострелкового батальона 69-й механизированной бригады",
        MilitaryRankAndJobTitle: "1-й мотострелковый батальон, 69-я механизированная бригада, 9-й механизированный корпус, 3-я гвардейская танковая  армия",
        TitleAndDocumentAssignment: ["Герой Советского Союза", "Указом Президиума Верховного Совета СССР от 17 ноября 1943 года за образцовое выполнение боевых заданий командования на фронте борьбы с немецко - фашистскими захватчиками и проявленные при этом мужество и героизм присвоено звание Герой Советского Союза(посмертно)"],
        Biography: "Родился в ноябре 1925 года в селе Новомусино Шарлыкского района, Оренбургской области, Россия). Окончил десять классов, а в июле 1942 года он с отличием окончил Каттакурганское педагогическое училище, после окончания которого работал учителем в школе города Каттакурган Самаркандской области Узбекской ССР.Был призван в ряды РККА в феврале 1943 года, а уже в марте принимал участие в боях на Воронежском фронте Великой Отечественной войны. В ночь на 22 сентября 1943 года сержант Рамиль Абдршин вместе со своим отделением на самодельных плотах форсировал Днепр. В боях за сёла Зарубинцы, Луковицы, Григоровка(Каневский район, Черкасская область, Украинская ССР) Рамиль Абдршин действовал решительно и смело. Во время отражения контратаки гитлеровцев 11 октября 1943 года был тяжело ранен и 8 ноября 1943 года умер в госпитале.",
        HeroFeat: "В ночь на 22.09.43 первым форсировал Днепр. В бою за с. Зарубинцы в период атаки со своим отделением первым ворвался в село и уничтожил до 10 немецких солдат. В бою за с. Луковицы и Григоровку в период штурма, действуя решительно и смело, уничтожил до 15 немецких солдат. 11.10.1943 в бою за высоту 216, 8 и 214, 9 поднял свое отделение в атаку, под сильным артиллерийским огнем ворвался в немецкие траншеи и уничтожил до 25 немецких солдат. Гитлеровцы решили вернуть утраченные позиции и предприняли сильные контратаки. Абдршин подпустил фашистов поближе и дружным огнем всего отделения ударил по врагу. Когда пулемет замолк от разорвавшегося снаряда, отважный комсомолец бросился к нему и открыл огонь по фашистским автоматчикам. В этом бою был тяжело ранен и 8 ноября 1943 года умер в госпитале.",
        Awards: "В ночь на 22.09.43 первым форсировал Днепр. В бою за с. Зарубинцы в период атаки со своим отделением первым ворвался в село и уничтожил до 10 немецких солдат. В бою за с. Луковицы и Григоровку в период штурма, действуя решительно и смело, уничтожил до 15 немецких солдат. 11.10.1943 в бою за высоту 216, 8 и 214, 9 поднял свое отделение в атаку, под сильным артиллерийским огнем ворвался в немецкие траншеи и уничтожил до 25 немецких солдат. Гитлеровцы решили вернуть утраченные позиции и предприняли сильные контратаки. Абдршин подпустил фашистов поближе и дружным огнем всего отделения ударил по врагу. Когда пулемет замолк от разорвавшегося снаряда, отважный комсомолец бросился к нему и открыл огонь по фашистским автоматчикам. В этом бою был тяжело ранен и 8 ноября 1943 года умер в госпитале."
    }

    const totalPages = Math.ceil(SET.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = SET.slice(indexOfFirstItem, indexOfLastItem);

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
                    {cities.map(city => (
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
                    {places.map(place => (
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
                    {currentItems.map(elem => (
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