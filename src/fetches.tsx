export const fetchDefinition = async (word : String) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error)
    });
};

export const fetchLetters = async () => {
  return fetch('https://freebee.fun/cgi-bin/today')
    .then(response => response.json())
    .catch(error => {
      throw new Error(error)
    });
};