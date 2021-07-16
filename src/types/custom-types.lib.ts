export type DateType = string | number | Date; // Trigger errors to much
export type ByType =
  | 'Days'
  | 'Mounth'
  | 'Year'
  | 'Minutes'
  | 'Hours'
  | 'Seconds'
  | 'Weeks'
  | 'MiliSeconds';
export type FormatsType =
  | 'M' // Just get the number of the mounth
  | 'MM' // Get short name of the mounth
  | 'MMMM' // Get long name of the mounth
  | 'DD' // Get short name of the days
  | 'DDDD' // Get long of the day
  | 'D'
  | 'YY' // Short year
  | 'YYYY' // Long Year
  | 'm' //
  | 'mm' //
  | 'hh' //
  | 'ss'; //

  export enum setEnum {
    'Hours' = 'setHours',
    'Mounth' = 'setMounth',
    'Date' = 'setDate',
    'Day' = 'setDay'
  }

  export type TableFormatType = Partial<Record<FormatsType, Function>>;