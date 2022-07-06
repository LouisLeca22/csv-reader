import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
// import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport())



const matchReader = MatchReader.fromCsv("football.csv")
const summary = Summary.winsAnalysisWithHTmlReport("Man United")
matchReader.load();
summary.buildAnPrintReport(matchReader.matches)