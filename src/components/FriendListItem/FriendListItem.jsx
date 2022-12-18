import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

// span.status

export const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log("sgfsgsgf", name)
    return (
        <li className={css.item}>
                {isOnline ? (<span className={css.status}
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "green",
                    }} ></span>) : (<span className={css.status}
                    style={{
                        borderRadius: "50%",
                        backgroundColor: "red",
                    }} ></span>)}
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