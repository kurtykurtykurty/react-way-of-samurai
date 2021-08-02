import style from './Preloader.module.css';

const Preloader = () => {
    return (
        <>
            {/* <div className={style.ldsRing}>
                <div />
                <div />
                <div />
                <div />
            </div> */}
            <div className={style.mySpinner}>
                <div />
                <div />
                <div />
            </div>
        </>
    );
};

export default Preloader;
