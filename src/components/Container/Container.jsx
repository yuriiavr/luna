import css from './Container.module.css'

const Container = ({children}) => {
    return (
        <div className={css.cont}>
            {children}
        </div>
    )
}

export default Container