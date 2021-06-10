# BASIC DATE LIBRARY 

### Description
The library expose a class to get and play with Dates 
> new CustomDate(Date)

### Instalation

> npm i basic-date

### Usage

First we need to imported and initializate the class CustomDate

```
import { CustomDate } from 'basic-date';

let customDate = new CustomDate(date);

```
Now with CustomDate initialized we can access to methods that class exposes

* format
* diff

#### format

Parameter | Returns
------ | --------- 
M | Number of Mounth
MM |Short name of the mounth
MMMM | Long name of the mounth
DDDD | Long name of the day
DD | Short name of the day
YY | Last two digits of the year
YYYY | Year

#### diff

Parameters | Type | Returns
---------- | ---- | -------
date | Date | void
by | ByType | String
text? | String | String

### Example

Example using format
```
    import { CustomDate } from 'basic-date';

    let customDate = new CustomDate(date).format(['MMMM', 'DDDD', 'YYYY']);
    
    console.log(customDate)
    // output: June Thursday 2021
```

Example using diff

```
    import { CustomDate } from 'basic-date';

    // Third parameter it's optional

    let customDate = new CustomDate(date).diff(dateToCompare, 'Mounth', ['', 'mounth ago']);

    //output: X mount ago
```

