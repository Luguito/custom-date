class CustomDate {
  private days: Array<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  private months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  private tableOfFormats: Partial<Record<FormatsType, Function>> = {
    M: () => new Date(this.date).getMonth() + 1,
    MM: () => this.shortName(this.months[new Date(this.date).getMonth()]),
    MMMM: () => this.months[new Date(this.date).getMonth()],
    DDDD: () => this.days[new Date(this.date).getDay()],
    DD: () => this.shortName(this.days[new Date(this.date).getDay()]),
    YY: () => this.shortNumber(new Date(this.date).getFullYear()),
    YYYY: () => new Date().getFullYear()
  };
  constructor(private date: DateType) {}

  private shortName(m: string): string {
    let short = m.split('');
    return `${short[0] + short[1] + short[2]}`;
  }
  private shortNumber(m: number): number {
    return m % 100;
  }

  format(value: FormatsType[]) {
    let date: string = '';
    for (let f of value) {
      date = date + ' ' + this.tableOfFormats[f]();
    }
    return date;
  }
}

type DateType = string | number | Date;
type FormatsType =
  | 'M' // Just get the number of the mounth
  | 'MM' // Get short name of the mounth
  | 'MMMM' // Get long name of the mounth
  | 'DD' // Get short name of the days
  | 'DDDD' // Get long of the day
  | 'YY' // Short year
  | 'YYYY' // Long Year
  | 'm' //
  | 'mm' //
  | 'hh' //
  | 'ss'; //

const customDate = new CustomDate(Date.now()).format([
  'M',
  'MMMM',
  'MM',
  'DD',
  'DDDD',
  'YY',
  'YYYY'
]);
console.log(customDate);
