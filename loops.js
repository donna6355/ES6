  //  #START:capitalize
  function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
  //  #END:capitalize
//  #START:capitalize
    const capitalize = function (name) {
    return name[0].toUpperCase() + name.slice(1);
  };
  //  #END:capitalize
  //  #START:capitalize
const capitalize = name => {
    return name[0].toUpperCase() + name.slice(1);
  };
  //  #END:capitalize

  

  //  #START:key
function key() {
    return 'abc123';
  }
  //  #END:key
  //  #START:key
const key = () => {
    return 'abc123';
  };
  //  #END:key

  
  //  #START:greet
function greet(first, last) {
    return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
  }
  //  #END:greet
  //  #START:greet
const greet = (first, last) => {
    return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
  };
  //  #END:greet
  

  //  #START:formatUser
  function formatUser(name) {
    return `${capitalize(name)}님이 로그인했습니다.`;
  }
  //  #END:formatUser
  //  #START:formatUser
const formatUser = name => `${capitalize(name)}님이 로그인했습니다.`;
//  #END:formatUser
  

  //  #START:applyCustomGreeting
  function applyCustomGreeting(name, callback) {
    return callback(capitalize(name));
  }
  //  #END:applyCustomGreeting
  function greetWithExcitement() {
    const greeting =
      //  #START:greetWithExcitement
      applyCustomGreeting('joe', function (name) {
        return `안녕, ${name}!`;
      });
    //  #END:greetWithExcitement
    return greeting;
  }
  function greetWithExcitement() {
    const greeting =
      //  #START:greetWithExcitement
      applyCustomGreeting('joe', name => `안녕, ${name}!`);
    //  #END:greetWithExcitement
    return greeting;
  }