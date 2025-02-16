import { useState, useEffect } from 'react';
import Link from 'next/link';
import style from './Content.module.css';
import HumanBlock from '../HumanBlock/HumanBlock';
import { desk } from "../date";

export default function Content() {
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedPlaces, setSelectedPlaces] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const born_place = ['с. Новомусино', 'с. Решивка', 'Решето', 'чё нибудь ещё'];
    const duty_place = ['А', 'Б', 'В'];

    // Функция для фильтрации данных
    const filteredDesk = desk.filter(elem => {
        // Фильтрация по городам и местам службы
        const cityMatch = selectedCities.length === 0 ||
            selectedCities.some(city => elem.DateAndPlaceOfBirth[1].includes(city));

        const placeMatch = selectedPlaces.length === 0 ||
            selectedPlaces.some(place => elem.MilitaryRankAndJobTitle.includes(place));

        // Фильтрация по дате
        const parseDate = (dateStr) => {
            const [day, month, year] = dateStr.split('.');
            return new Date(`${year}-${month}-${day}`);
        };

        const birthDate = parseDate(elem.DateAndPlaceOfBirth[0]);
        const deathDate = parseDate(elem.DateAndPlaceOfDepartureOrDeath[0]);
        const start = startDate && new Date(startDate);
        const end = endDate && new Date(endDate);

        let dateMatch = true;
        if (start || end) {
            dateMatch = false;
            if (start && birthDate >= start) dateMatch = true;
            if (end && birthDate <= end) dateMatch = true;
            if (start && deathDate >= start) dateMatch = true;
            if (end && deathDate <= end) dateMatch = true;
        }

        return cityMatch && placeMatch && dateMatch;
    });

    // Пагинация
    const totalPages = Math.ceil(filteredDesk.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredDesk.slice(indexOfFirstItem, indexOfLastItem);

    // Сброс страницы при изменении фильтров
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCities, selectedPlaces, startDate, endDate]);

    // Функция для переключения фильтров
    const handleToggle = (list, setList, item) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    // Функция для изменения страницы
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

                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Date Filter</h3>
                    <div>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Start date"
                        />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="End date"
                        />
                    </div>
                </div>

                <div className={style.selectedFilters}>
                    <div>Selected cities: {selectedCities.join(', ') || 'none'}</div>
                    <div>Selected places: {selectedPlaces.join(', ') || 'none'}</div>
                    <div>Selected dates: {startDate} to {endDate}</div>
                </div>
            </div>

            <div className={style.contentWrapper}>
                <div className={style.HumanBlocks}>
                    {currentItems.map(elem => (
                        <Link href={`/FullInfo?id=${elem.id}`} key={elem.id}>
                            <HumanBlock props={elem} />
                        </Link>
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