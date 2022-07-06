## Enums
- Use whenever we have a small fixed set of values that are all closely related and known at compile time
- Don't use them for values that are bound to change over time

## tuple
 - MatchData is a tuple, it's an array of values with different types placed in a specific order

## Generics 
 - like functions arguments, generally we pass them in as <T> for type
 - allows to define the type of a property/argument/return value at a future point

 ## static method
 - can be called without instantiating an object of a class
 - in this project they are used to precconfigure a certain type of reader for the match (csvReader) and a certain type of report for the summary (htmlReport)

 ## Inheritance vs Composition
  ### Inheritance 
    - abstract class CsvFileReader
    - child class MatchReader
    - MatchReader customize the beahvior of CsvFileReader by implementing mapRow
    - "Is a relationship" MatchReader is a CSVFileReader
  ### Composition
    - class MatchReader referencing another object (a DataReader)
    - the class delegate the action of loading to the outside datareader (which could be any kind of reader, CsvFileReader APIReader...)
    - "Has a relationship" MatchReader has a CSVFileReader (which is an outside object)

