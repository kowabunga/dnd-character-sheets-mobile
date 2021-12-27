import { Link } from 'react-router-dom';
const UserAccountCard = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className='btn'>
      <div className='card text-color-hover' style={{ width: '18rem' }}>
        <div className='card-body'>
          <div className='icon-size mb-3 text-secondary text-center'>
            <i className={icon}></i>
          </div>
          <div className='card-title lead fs-3 text-primary'>{title}</div>
          <p className='card-text'>{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default UserAccountCard;
