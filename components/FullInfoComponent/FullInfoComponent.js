import { useRouter } from 'next/router';
import style from './FullInfoComponent.module.css';

const FullInfoComponent = ({ heroData }) => {
    const router = useRouter();

    return (
        <div className={style.container}>
            <main className={style.mainContent}>
                <button onClick={() => router.back()} className={style.backButton}>
                    ← Назад {/* Changed from "Back" to "Назад" */}
                </button>

                <div className={style.heroCard}>
                    <div className={style.heroImageContainer}>
                        <img
                            src={heroData.image}
                            alt={heroData.name}
                            className={style.heroImage}
                        />
                    </div>

                    <div className={style.heroInfo}>
                        <h1 className={style.heroName}>{heroData.name}</h1>
                        <p className={style.heroDescription}>{heroData.description}</p>

                        <div className={style.datesContainer}>
                            <div className={style.dateSection}>
                                <h3 className={style.dateTitle}>Дата рождения</h3> {/* Changed from "Birth" to "Дата рождения" */}
                                <p className={style.dateText}>
                                    {heroData.DateAndPlaceOfBirth.join(', ')}
                                </p>
                            </div>
                            <div className={style.dateSection}>
                                <h3 className={style.dateTitle}>Дата смерти</h3> {/* Changed from "Death" to "Дата смерти" */}
                                <p className={style.dateText}>
                                    {heroData.DateAndPlaceOfDepartureOrDeath.join(', ')}
                                </p>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Военная служба</h2> {/* Changed from "Military Service" to "Военная служба" */}
                            <div className={style.militaryInfo}>
                                <div className={style.militaryItem}>
                                    <span className={style.militaryLabel}>Специальность:</span> {/* Changed from "Specialty:" to "Специальность:" */}
                                    {heroData.MilitarySpecialty}
                                </div>
                                <div className={style.militaryItem}>
                                    <span className={style.militaryLabel}>Звание и подразделение:</span> {/* Changed from "Rank & Unit:" to "Звание и подразделение:" */}
                                    {heroData.MilitaryRankAndJobTitle}
                                </div>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Присвоение звания</h2> {/* Changed from "Title Assignment" to "Присвоение звания" */}
                            <div className={style.titleInfo}>
                                <p className={style.titleName}>{heroData.TitleAndDocumentAssignment[0]}</p>
                                <p className={style.titleDescription}>
                                    {heroData.TitleAndDocumentAssignment[1]}
                                </p>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Награды и почести</h2> {/* Changed from "Awards & Honors" to "Награды и почести" */}
                            <ul className={style.awardsList}>
                                {heroData.Awards.split(', ').map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={style.section}>
                            <h2>Героический подвиг</h2> {/* Changed from "Heroic Feat" to "Героический подвиг" */}
                            <p className={style.bioText}>{heroData.HeroFeat}</p>
                        </div>

                        <div className={style.section}>
                            <h2>Биография</h2> {/* Changed from "Biography" to "Биография" */}
                            <p className={style.bioText}>{heroData.Biography}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FullInfoComponent;