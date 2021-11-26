const LearnMoreCharacters = () => {
  return (
    <section className='container mb-3'>
      <h2 className='display-5'>Characters</h2>
      <p className='lead'>
        Your characters are your creations, your ideas. You draw inspiration
        from them, their heroics, bravery, and courage. At D&D ToGo, we strive
        to keep your character's safe and updated.
      </p>
      <p>
        No more losing your character sheets and having to remember how much
        gold you had or what spell slots where left.
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
              What can I do with my characters?
            </button>
          </h2>
          <div
            id='collapse-q1'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              You can create and update characters as you play through your
              campaigns, keeping track of health, items, money, tools and more.
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
              Are my characters stand-alone or connected to a campaign?
            </button>
          </h2>
          <div
            id='collapse-q2'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              Either!
              <br />
              <br />
              If your character is connected to a campaign hosted on D&D ToGo,
              you can easily connect your character to the campaign with your
              Dungeon Master's approval.
              <br />
              <br />
              If your campaign is not hosted on D&D ToGo or you do not want to
              connect it to a campaign, your character can be kept as a
              stand-alone character, unassociated with a campaign.
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
              Can I remove my character from a campaign?
            </button>
          </h2>
          <div
            id='collapse-q3'
            className='accordion-collapse collapse '
            data-bs-parent='#campaignAccordion'
          >
            <div className='accordion-body'>
              No. Once associated with a campaign, only the Dungeon Master can
              remove a character from the campaign.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LearnMoreCharacters;
