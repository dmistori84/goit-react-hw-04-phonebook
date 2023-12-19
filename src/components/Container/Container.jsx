import css from './Conainer.module.css';

export const Container = ({ children }) => {
    return (
        <div className={css.container}>{children}</div>
    )
};



