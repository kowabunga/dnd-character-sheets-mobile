import { Link } from 'react-router-dom';
const LearnMoreCampaigns = () => {
  return (
    <section className='container mb-3'>
      <h2 className='display-5'>Campaigns</h2>
      <p className='lead'>
        Your campaigns are the result purely of your imagination. They are your
        dreams, fantasies, and stories made real. At D&D ToGo, we strive to help
        you keep your campaigns organized and accountable.
      </p>
      <div className='accordion' id='campaignAccordion'>
        {/* Question 1 */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='q1'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#collapse-q1'
            >
              What can I do with a campaign I'm acting as Dungeon Master for?
            </button>
          </h2>
          <div
            id='collapse-q1'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              You can keep track of all the items you've created. All the cities
              and npc's within and never lose track of what's where and when.
              (Don't worry - we've all lost our Dungeon Master book at one point
              or another).
            </div>
          </div>
        </div>
        {/* Question 2 */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='q2'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#collapse-q2'
            >
              How can my players make use of this tool?
            </button>
          </h2>
          <div
            id='collapse-q2'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              Your players can create a character on D&D ToGo and, if they
              desire, link it to your campaign by following{' '}
              <Link to='#'> these steps</Link>. Additionally, if they add their
              character to your campaign, you can keep track of what their
              standing/stats are as well!
            </div>
          </div>
        </div>
        {/*Question 3  */}
        <div className='accordion-item'>
          <h2 className='accordion-header' id='q3'>
            <button
              className='accordion-button collapsed'
              data-bs-toggle='collapse'
              data-bs-target='#collapse-q3'
            >
              If one of my players links their account to my campaign, can they
              see sensitive information, such as stat blocks, yet-to-be
              discovered items, etc.?
            </button>
          </h2>
          <div
            id='collapse-q3'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              No. Once linked, a user can only see access to NPC's, items, and
              other things that only you have selected to be seen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LearnMoreCampaigns;
