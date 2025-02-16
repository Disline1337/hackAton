import { useState } from 'react';
import style from './AddHeroComponent.module.css'; 

const AddHeroComponent = ({ onAddHero }) => {
    const [heroData, setHeroData] = useState({
        name: '',
        image: '',
        description: '',
        DateAndPlaceOfBirth: ['', ''],
        DateAndPlaceOfDepartureOrDeath: ['', ''],
        MilitarySpecialty: '',
        MilitaryRankAndJobTitle: '',
        TitleAndDocumentAssignment: ['', ''],
        Biography: '',
        HeroFeat: '',
        Awards: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHeroData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleDateAndPlaceChange = (index, value, type) => {
        setHeroData((prevData) => {
            const newData = { ...prevData };
            if (type === 'birth') {
                newData.DateAndPlaceOfBirth[index] = value;
            } else {
                newData.DateAndPlaceOfDepartureOrDeath[index] = value;
            }
            return newData;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddHero(heroData); // Method to handle added hero
        setHeroData({
            name: '',
            image: '',
            description: '',
            DateAndPlaceOfBirth: ['', ''],
            DateAndPlaceOfDepartureOrDeath: ['', ''],
            MilitarySpecialty: '',
            MilitaryRankAndJobTitle: '',
            TitleAndDocumentAssignment: ['', ''],
            Biography: '',
            HeroFeat: '',
            Awards: ''
        }); // Reset form
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <h2>Добавить нового героя</h2>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={heroData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="URL изображения"
                value={heroData.image}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Описание"
                value={heroData.description}
                onChange={handleChange}
                required
            ></textarea>
            <input
                type="text"
                placeholder="Дата и место рождения"
                value={heroData.DateAndPlaceOfBirth[0]}
                onChange={(e) => handleDateAndPlaceChange(0, e.target.value, 'birth')}
                required
            />
            <input
                type="text"
                placeholder="Место рождения"
                value={heroData.DateAndPlaceOfBirth[1]}
                onChange={(e) => handleDateAndPlaceChange(1, e.target.value, 'birth')}
                required
            />
            <input
                type="text"
                placeholder="Дата и место смерти"
                value={heroData.DateAndPlaceOfDepartureOrDeath[0]}
                onChange={(e) => handleDateAndPlaceChange(0, e.target.value, 'death')}
                required
            />
            <input
                type="text"
                placeholder="Место смерти"
                value={heroData.DateAndPlaceOfDepartureOrDeath[1]}
                onChange={(e) => handleDateAndPlaceChange(1, e.target.value, 'death')}
                required
            />
            <input
                type="text"
                name="MilitarySpecialty"
                placeholder="Специальность"
                value={heroData.MilitarySpecialty}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="MilitaryRankAndJobTitle"
                placeholder="Звание и подразделение"
                value={heroData.MilitaryRankAndJobTitle}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="TitleAndDocumentAssignment"
                placeholder="Присвоение звания"
                value={heroData.TitleAndDocumentAssignment[0]}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                placeholder="Описание присвоения"
                value={heroData.TitleAndDocumentAssignment[1]}
                onChange={(e) => handleDateAndPlaceChange(1, e.target.value, 'title')}
                required
            />
            <textarea
                name="Biography"
                placeholder="Биография"
                value={heroData.Biography}
                onChange={handleChange}
                required
            ></textarea>
            <textarea
                name="HeroFeat"
                placeholder="Героический подвиг"
                value={heroData.HeroFeat}
                onChange={handleChange}
                required
            ></textarea>
            <input
                type="text"
                name="Awards"
                placeholder="Награды"
                value={heroData.Awards}
                onChange={handleChange}
                required
            />
            <button type="submit">Добавить героя</button>
        </form>
    );
};

export default AddHeroComponent;