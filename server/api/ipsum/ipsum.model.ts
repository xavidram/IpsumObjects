export class LoreIpsum {
  name: string;
  count: number;            // Number of words, sentences, or paragraphs to generate.
  units: string;           // Generate words, sentences, or paragraphs.
  sentenceLowerBound: number;         // Minimum words per sentence.
  sentenceUpperBound: number;       // Maximum words per sentence.
  paragraphLowerBound: number;        // Minimum sentences per paragraph.
  paragraphUpperBound: number;        // Maximum sentences per paragraph.
  format: string;              // Plain text or html
  words: string[];  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
  random: Function;           // A PRNG function. Uses Math.random by default
  suffix: string;
}

export class IpsumObjects {
  count: number;
  options: LoreIpsum[];
}
