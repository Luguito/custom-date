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
* set
* greaterThan
* smallerThan

#### format

Parameter | Returns
------ | --------- 
M | Number of Mounth
MM | Short name of the mounth
MMMM | Long name of the mounth
DDDD | Long name of the day
DD | Short name of the day
YY | Last two digits of the year
YYYY | Year

#### diff

Parameters | Type
---------- | ---- 
date | Date
by | ByType
text? | String

#### set

Parameters | Type
---------- | ----
by | 'Date' or 'Mounth'
dateWanted | Number

#### greatherThan

Parameter | Return
--------- | ------
date | Boolean

#### smallerThan

Parameter | Return
--------- | ------
date | Boolean

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

Example using set 

```
    import { CustomDate } from 'basic-date';

    let customDate = new CustomDate(date).set('Date', 2);

    console.log(customDate)
    // output : xxxxxxxxxxxxx // ms
    // Two days after the main date

    // OR

    let customDate = new CustomDate(date).set('Date', -2);
    // output : xxxxxxxxxxxxx  // ms
    // Two days before the main date
```

Example using greatherThan

```
    import { CustomDate } from 'basic-date';

    // date = "2021-06-10T06:05:49.762Z"
    // dateToCompare = "2021-06-13T06:06:11.124Z"

    let customDate = new CustomDate(date).greaterThan(dateToCompare);

    console.log(customDate)
    // output : false
```

Example using smallerThan

```
    import { CustomDate } from 'basic-date';

    // date = "2021-06-10T06:05:49.762Z"
    // dateToCompare = "2021-06-13T06:06:11.124Z"

    let customDate = new CustomDate(date).smallerThan(dateToCompare);

    console.log(customDate)
    // output : true
```

