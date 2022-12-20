import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

// span.status

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? `${css.status} ${css.isOnline}` : `${css.status} ${css.isOffline}`}></span>            
            <img className={css.avatar} src={avatar} alt={`User ${name}`} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,    
}