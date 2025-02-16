
import { useRouter } from 'next/router';
import style from './FullInfoComponent.module.css';

const FullInfoComponent = ({ heroData }) => {
    const router = useRouter();

    return (
        <div className={style.container}>
            <main className={style.mainContent}>
                <button onClick={() => router.back()} className={style.backButton}>
                    ? Back
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
                        <p className={style.heroDates}>{heroData.born}</p>

                        <div className={style.section}>
                            <h2>Awards</h2>
                            <ul className={style.awardsList}>
                                {heroData.awards.map((award, index) => (
                                    <li key={index}>{award}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={style.section}>
                            <h2>Biography</h2>
                            <p className={style.bioText}>{heroData.bio}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FullInfoComponent;