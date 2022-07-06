import { dateStringToDate } from './utils';
import { MatchResult } from './types/MatchResult';
import {MatchData} from "./types/MatchData"
import {CsvFileReader} from "./CsvFileReader"

interface DataReader {
  read(): void;
  data: string[][];
}

// Match reader is a class which reads matches (MatchData type), to do so it needs a reader (annotated in the interface)
export class MatchReader {

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    // reads the data from the reader
    this.reader.read();
    // transform data into MatchData and sets it in the matches property of the class
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
  // Preconfigured instance of the class
  static fromCsv(filename: string){
    return new MatchReader(new CsvFileReader(filename))
  }
}
