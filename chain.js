function sendActiveMemberEmail(sailors, sendEmail) {
    // START:active
    const active = sailors.filter(sailor => sailor.active);
  
    // [
    //   {
    //     name: 'yi hong',
    //     active: true,
    //     email: 'yh@yhproductions.io',
    //   },
    //   {
    //     name: 'alex',
    //     active: true,
    //     email: '',
    //   },
    // ];
    // END:active
  
    // START:email
    const emails = active.map(member => member.email || `${member.name}@wiscsail.io`);
  
    // [ 'yh@yhproductions.io', 'alex@wiscsail.io' ]
    // END:email
  
    // START:send
    emails.forEach(sailor => sendEmail(sailor));
    // END:send
  }



  // START:expanded
const sailors = [
    {
      name: 'yi hong',
      active: true,
      email: 'yh@yhproductions.io',
    },
    {
      name: 'alex',
      active: true,
      email: '',
    },
    {
      name: 'nathan',
      active: false,
      email: '',
    },
  ];
  // END:expanded
  
  console.log(sailors.filter(sailor => sailor.active).map(sailor => sailor.email || `${sailor.name}@wiscsail.io`).length);
  const activeList = sailors.filter(sailor => sailor.active)
                            .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`);
  activeList.forEach(sailor => console.log(sailor));

  function sendActiveMemberEmail(sailors, sendEmail) {
  // START:email
    sailors
      .filter(sailor => sailor.active)
      .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
      .forEach(sailor => sendEmail(sailor));
  // END:email
  }

  const sendEmail = (receiver) => console.log(`mail sent to ${receiver}`);

  sendActiveMemberEmail(sailors, sendEmail);
