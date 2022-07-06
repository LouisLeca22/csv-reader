import { MatchData } from "./types/MatchData";
import { WinsAnalysis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]):string 
}

export interface OutputTarget {
    print(report: string): void
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}
    buildAnPrintReport(matches: MatchData[]):void{
        const output = this.analyzer.run(matches)
        this.outputTarget.print(output)
    }

    // preconfigured instance of the class
    static winsAnalysisWithHTmlReport(team: string): Summary{
        return new Summary(new WinsAnalysis(team), new HtmlReport)
    }
}

