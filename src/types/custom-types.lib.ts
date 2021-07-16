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
  | 'M' // Mounth - Number
  | 'MM' // Mounth - Shortname
  | 'MMM' // Mounth - Longname
  | 'D' // Day - Number
  | 'DD' // Day - ShortName
  | 'DDD' // Day - Longname
  | 'Y' // Year - Last two digits
  | 'YY' // Year - Complete number

  export enum setEnum {
    'Hours' = 'setHours',
    'Mounth' = 'setMounth',
    'Date' = 'setDate',
    'Day' = 'setDay'
  }

  export type TableFormatType = Partial<Record<FormatsType, Function>>;
  export type DiffReturnedType = Partial<Record<ByType, Function>>