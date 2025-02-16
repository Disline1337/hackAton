import { useState, useEffect } from 'react';
import Link from 'next/link';
import style from './Content.module.css';
import HumanBlock from '../HumanBlock/HumanBlock';
import { desk } from "../date";

export default function Content() {
    // Состояния для фильтров
    const [selectedBirthPlaces, setSelectedBirthPlaces] = useState([]);
    const [selectedDeathPlaces, setSelectedDeathPlaces] = useState([]);
    const [selectedMilitaryUnits, setSelectedMilitaryUnits] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Динамическое формирование фильтров из данных
    const birthPlaces = [...new Set(desk.map(item => {
        const [city, region] = item.DateAndPlaceOfBirth[1].split(', ');
        return city.trim();
    }))];

    const deathPlaces = [...new Set(desk.map(item => {
        const [city, region] = item.DateAndPlaceOfDepartureOrDeath[1].split(', ');
        return city.trim();
    }))];

    const militaryUnits = [...new Set(desk.map(item =>
        item.MilitaryRankAndJobTitle.split(',')[0].trim()
    ))];

    // Функция для фильтрации данных
    const filteredDesk = desk.filter(elem => {
        // Фильтрация по месту рождения
        const birthPlace = elem.DateAndPlaceOfBirth[1].split(', ')[0];
        const birthPlaceMatch = selectedBirthPlaces.length === 0 ||
            selectedBirthPlaces.includes(birthPlace);

        // Фильтрация по месту смерти
        const deathPlace = elem.DateAndPlaceOfDepartureOrDeath[1].split(', ')[0];
        const deathPlaceMatch = selectedDeathPlaces.length === 0 ||
            selectedDeathPlaces.includes(deathPlace);

        // Фильтрация по воинским частям
        const militaryUnit = elem.MilitaryRankAndJobTitle.split(',')[0];
        const militaryUnitMatch = selectedMilitaryUnits.length === 0 ||
            selectedMilitaryUnits.includes(militaryUnit);

        // Фильтрация по датам
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

        return birthPlaceMatch && deathPlaceMatch && militaryUnitMatch && dateMatch;
    });

    // Пагинация
    const totalPages = Math.ceil(filteredDesk.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredDesk.slice(indexOfFirstItem, indexOfLastItem);

    // Сброс страницы при изменении фильтров
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedBirthPlaces, selectedDeathPlaces, selectedMilitaryUnits, startDate, endDate]);

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
                {/* Фильтр по месту рождения */}
                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Место рождения</h3>
                    {birthPlaces.map(place => (
                        <div
                            key={place}
                            className={style.filterItem}
                            onClick={() => handleToggle(selectedBirthPlaces, setSelectedBirthPlaces, place)}>
                            <div className={`${style.checkbox} ${selectedBirthPlaces.includes(place) ? style.selectedCheckbox : ''}`}>
                                {selectedBirthPlaces.includes(place) && '✓'}
                            </div>
                            {place}
                        </div>
                    ))}
                </div>

                {/* Фильтр по месту смерти */}
                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Место смерти</h3>
                    {deathPlaces.map(place => (
                        <div
                            key={place}
                            className={style.filterItem}
                            onClick={() => handleToggle(selectedDeathPlaces, setSelectedDeathPlaces, place)}>
                            <div className={`${style.checkbox} ${selectedDeathPlaces.includes(place) ? style.selectedCheckbox : ''}`}>
                                {selectedDeathPlaces.includes(place) && '✓'}
                            </div>
                            {place}
                        </div>
                    ))}
                </div>

                {/* Фильтр по воинским частям */}
                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Воинские части</h3>
                    {militaryUnits.map(unit => (
                        <div
                            key={unit}
                            className={style.filterItem}
                            onClick={() => handleToggle(selectedMilitaryUnits, setSelectedMilitaryUnits, unit)}>
                            <div className={`${style.checkbox} ${selectedMilitaryUnits.includes(unit) ? style.selectedCheckbox : ''}`}>
                                {selectedMilitaryUnits.includes(unit) && '✓'}
                            </div>
                            {unit}
                        </div>
                    ))}
                </div>

                {/* Фильтр по датам */}
                <div className={style.filterSection}>
                    <h3 className={style.filterTitle}>Фильтр по датам</h3>
                    <div>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            placeholder="Начальная дата"
                        />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            placeholder="Конечная дата"
                        />
                    </div>
                </div>

                {/* Выбранные фильтры */}
                <div className={style.selectedFilters}>
                    <div>Места рождения: {selectedBirthPlaces.join(', ') || 'не выбрано'}</div>
                    <div>Места смерти: {selectedDeathPlaces.join(', ') || 'не выбрано'}</div>
                    <div>Воинские части: {selectedMilitaryUnits.join(', ') || 'не выбрано'}</div>
                    <div>Диапазон дат: {startDate} - {endDate}</div>
                </div>
            </div>

            {/* Основной контент */}
            <div className={style.contentWrapper}>
                <div className={style.HumanBlocks}>
                    {currentItems.map(elem => (
                        <Link href={`/FullInfo?id=${elem.id}`} key={elem.id}>
                            <HumanBlock props={elem} />
                        </Link>
                    ))}
                </div>

                {/* Пагинация */}
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