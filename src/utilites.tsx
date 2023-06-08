export interface DefinitionProps {
  meanings: MeaningProps[]
  phonetic: String;
  word: String;
}

export interface MeaningProps {
  partOfSpeech: String;
  definitions: any;
}

// {
//   "definition": "The lastborn of a family; the youngest sibling, irrespective of age.",
//   "synonyms": [],
//   "antonyms": [],
//   "example": "Adam is the baby of the family."
// },


export const cleanDefinitionData = (definition : DefinitionProps) => {
  const selectedMeanings = definition.meanings.map((meaning : MeaningProps) => {
    return {
      partOfSpeech: meaning.partOfSpeech,
      definitions: meaning.definitions[0].definition
    }
  })
  
  return {
    word: definition.word,
    phonetic: definition.phonetic,
    meanings: selectedMeanings
  }
}

export interface GameDataFetchProps {
  center : String;
  letters : String;
  wordlist : String[];
  words: Number
}

export const cleanGameData = (data: GameDataFetchProps) => {
  return {
    center: data.center.toUpperCase(),
    letters: data.letters.toUpperCase().split(''),
    words: data.wordlist,
    amountOfWords: data.words
  }
}