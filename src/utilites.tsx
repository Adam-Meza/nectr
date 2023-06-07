export interface DefinitionProps {
  meanings: MeaningProps[]
  phonetic: String;
  word: String;
}

interface MeaningProps {
  partOfSpeech: String;
  definitions: any;
}

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