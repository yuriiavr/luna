import css from './HeaderLink.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const HeaderLink = ({ children, href }) =>{
    return (
        <>
            <NavLink to={href} className={css.link}>
                {children}
            </NavLink>
        </>
    ) 
};

HeaderLink.propTypes = {
    positionNumber: PropTypes.number.isRequired,
    href: PropTypes.string,
}