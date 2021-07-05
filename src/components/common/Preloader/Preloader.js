import style from './Preloader.module.css';

const Preloader = (props) => {
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
