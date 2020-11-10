// localStorage.setItem('키', '값');
// localStorage.getItem('키');
// localStorage.removeItem('키');
// localStorage.clear();
// 데이터를 브라우저에 저장.
// 데이터가 반드시 문자열이어야한다.

// START:setItem
function saveBreed(breed) {
    localStorage.setItem('breed', breed);
  }
  // END:setItem
  
  // START:getItem
  function getSavedBreed() {
    return localStorage.getItem('breed');
  }
  // END:getItem
  

// START:removeItem
function removeBreed() {
    return localStorage.removeItem('breed');
  }
  // END:removeItem
  
  // START:applyBreed
  function applyBreedPreference(filters) {
    const breed = getSavedBreed();
    if (breed) {
      filters.set('breed', breed);
    }
    return filters;
  }
  // END:applyBreed
  
  // START:savePref
  function savePreferences(filters) {
    const filterString = JSON.stringify([...filters]);
    localStorage.setItem('preferences', filterString);
  }
  // END:savePref
  
  // START:applyPref
  function retrievePreferences() {
    const preferences = JSON.parse(localStorage.getItem('preferences'));
    return new Map(preferences);
  }
  // END:applyPref
  
  // START:clear
  function clearPreferences() {
    localStorage.clear();
  }
  // END:clear