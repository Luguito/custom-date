import { ByType, FormatsType, setEnum , TableFormatType} from '../types/custom-types.lib'

export class CustomDate {
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

    private tableOfFormats: TableFormatType = {
        M: () => `${(new Date(this.date).getMonth() + 1).toString().length < 2 ? '0'+ (new Date(this.date).getMonth() + 1) : new Date(this.date).getMonth() + 1}`,
        MM: () => this.shortName(this.months[new Date(this.date).getMonth()]),
        MMMM: () => this.months[new Date(this.date).getMonth()],
        DDDD: () => this.days[new Date(this.date).getDay()],
        DD: () => this.shortName(this.days[new Date(this.date).getDay()]),
        D: () => new Date(this.date).getDate(),
        YY: () => this.shortNumber(new Date(this.date).getFullYear()),
        YYYY: () => new Date(this.date).getFullYear()
    };

    constructor(private date?) {
        if (!this.date) this.date = new Date();
    }

    /**
     * @description Get a one day of the week and just return the first 3 letter of it
     * @param m Day
     * @returns String
     * @author 🔥
     */
    private shortName(m: string): string {
        let short = m.split('');
        return `${short[0] + short[1] + short[2]}`;
    }

    /**
     * @description Get a number and just return the last 2 digits of it
     * @param m 
     * @returns Number
     * @author 🔥
     */
    private shortNumber(m: number): number {
        return m % 100;
    }

    /**
     * @description Get an Array of FormatsType and return his respectic value. VIEW FORMATSTYPE INFO.
     * @returns String
     * @param value 
     * @author 🔥
     */
    public format(value: FormatsType[], separator: string = ''): string {
        let date: string = '';
        for (let f of value) {
            date = date.trim() + ' ' + this.tableOfFormats[f]();
        }
        
        return date.replace(/\s+/g, separator);
    }

    /**
     * @description Compare dates and return the difference by the second parameter (by)
     * @param date Date
     * @param by ByType
     * @param text Optional?. Array of string to build a sentence with the diff date
     * @returns String
     * @author 🔥
     */
    public diff(date, by: ByType, text?: string[]): string {
        let day = new Date(this.date).valueOf() - new Date(date).valueOf();

        let diff_years =
            new Date(this.date).getUTCFullYear() - new Date(date).getUTCFullYear();

        let diff_seconds = parseInt(day / 1000 + '');
        let diff_minutes = parseInt(diff_seconds / 60 + '');
        let diff_hours = parseInt(diff_minutes / 60 + '');
        let diff_days = parseInt(diff_hours / 24 + '');
        let diff_weeks = parseInt(diff_days / 7 + '');
        let diff_mount = Math.abs(
            new Date(this.date).getMonth() -
            new Date(date).getMonth() * (diff_years != 0 ? diff_years * 12 : 0)
        );

        let diffReturned: Partial<Record<ByType, any>> = {
            MiliSeconds: () => day,
            Seconds: () => diff_seconds,
            Minutes: () => diff_minutes,
            Hours: () => diff_hours,
            Days: () => diff_days,
            Weeks: () => diff_weeks,
            Mounth: () => diff_mount,
            Year: () => diff_years
        };

        return text[0] + diffReturned[by]() + text[1];
    }

    /**
     * @description Add or subtract on the date. 
     * @param by String type
     * @param dateWanted Number.
     * @returns Miliseconds date.
     * @author 🔥
     */
    public set(by: 'Date' | 'Mounth', dateWanted: number): Date {
        let numberOfDate = new Date(this.date).getDate() + dateWanted;

        let newDate = new Date(this.date)[setEnum[by]](numberOfDate);

        return newDate;
    }

    /**
     * @description Compare is the main date is greater than date parameter
     * @param date Date
     * @returns Boolean
     * @author 🔥
     */
    public greaterThan(date): boolean {

        let isGreaterThan = new Date(this.date).getTime() > new Date(date).getTime();

        return isGreaterThan;
    }

    /**
     * @description Compare is the main date is smaller than date parameter
     * @param date Date
     * @returns Boolean
     * @author 🔥
     */
    public smallerThan(date): boolean {

        let isSmallerThan = new Date(this.date).getTime() < new Date(date).getTime();

        return isSmallerThan;
    }
}