import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }
}) => {
  return (
    <div className='css.profile' key={username}>
      <div className='css.description'>
        <img
          src={avatar}
          alt={username}
          width='280'
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats} >
          <li>
          <span className='label'>Followers</span>
            <span className='quantity'>{followers}</span>
          </li>
          <li>
            <span className='label'>Views</span>
            <span className='quantity'>{views}</span>
          </li>
          <li>
            <span className='label'>Likes</span>
            <span className='quantity'>{likes}</span>
          </li>
      </ul>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  })
};


