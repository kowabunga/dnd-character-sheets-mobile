import { useContext } from 'react';
import UserContext from '../../context/userContext';
import UserAccountCard from '../../components/User/UserAccountCards';

const UserAccountPage = () => {
  const userContext = useContext(UserContext);
  const {
    user: { firstName },
  } = userContext;

  const userCards = [
    {
      title: 'Account',
      description: 'View your information here.',
      icon: 'bi bi-person-circle',
      link: '/user/account',
    },
    {
      title: 'Characters',
      description: 'View Your Characters',
      icon: 'bi bi-file-person',
      link: '/user/characters',
    },
    {
      title: 'Campaigns',
      description: 'View Your Campaigns',
      icon: 'bi bi-door-open',
      link: '/user/campaigns',
    },
  ];

  return (
    <section>
      <div>
        <h1 className='text-primary'>Howdy {firstName}!</h1>
        <p className='lead'>
          Feeling Adventurous? Need to... change something up?
        </p>
        <p>
          Here you'll find information about your account and links to where you
          can update your information.
        </p>
      </div>
      <div className='d-flex flex-wrap align-items-center justify-content-center'>
        {userCards.map((card, key) => (
          <UserAccountCard
            key={key}
            title={card.title}
            description={card.description}
            icon={card.icon}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};
export default UserAccountPage;
