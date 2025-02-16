import { useRouter } from 'next/router';
import style from './FullInfoComponent.module.css';

const FullInfoComponent = ({ heroData }) => {
    const router = useRouter();

    return (
        <div className={style.container}>
            <main className={style.mainContent}>
                <button onClick={() => router.back()} className={style.backButton}>
                    ← Back
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
                                <h3 className={style.dateTitle}>Birth</h3>
                                <p className={style.dateText}>
                                    {heroData.DateAndPlaceOfBirth.join(', ')}
                                </p>
                            </div>
                            <div className={style.dateSection}>
                                <h3 className={style.dateTitle}>Death</h3>
                                <p className={style.dateText}>
                                    {heroData.DateAndPlaceOfDepartureOrDeath.join(', ')}
                                </p>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Military Service</h2>
                            <div className={style.militaryInfo}>
                                <div className={style.militaryItem}>
                                    <span className={style.militaryLabel}>Specialty:</span>
                                    {heroData.MilitarySpecialty}
                                </div>
                                <div className={style.militaryItem}>
                                    <span className={style.militaryLabel}>Rank & Unit:</span>
                                    {heroData.MilitaryRankAndJobTitle}
                                </div>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Title Assignment</h2>
                            <div className={style.titleInfo}>
                                <p className={style.titleName}>{heroData.TitleAndDocumentAssignment[0]}</p>
                                <p className={style.titleDescription}>
                                    {heroData.TitleAndDocumentAssignment[1]}
                                </p>
                            </div>
                        </div>

                        <div className={style.section}>
                            <h2>Awards & Honors</h2>
                            <ul className={style.awardsList}>
                                {heroData.Awards.split(', ').map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={style.section}>
                            <h2>Heroic Feat</h2>
                            <p className={style.bioText}>{heroData.HeroFeat}</p>
                        </div>

                        <div className={style.section}>
                            <h2>Biography</h2>
                            <p className={style.bioText}>{heroData.Biography}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FullInfoComponent;