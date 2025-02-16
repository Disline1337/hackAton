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
        image: "https://www.deepseek.com/_next/image?url=https%3A%2F%2Fcdn.deepseek.com%2Flogo.png&w=1920&q=75",
        name: `set${i + 1}`,
        descript: "dsfsdf",
        born: "1414123123"
    }));

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