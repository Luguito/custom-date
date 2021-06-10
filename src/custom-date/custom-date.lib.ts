import { ByType, DateType, FormatsType } from '../types/custom-types.lib'

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
    private tableOfFormats: Partial<Record<FormatsType, Function>> = {
        M: () => new Date(this.date).getMonth() + 1,
        MM: () => this.shortName(this.months[new Date(this.date).getMonth()]),
        MMMM: () => this.months[new Date(this.date).getMonth()],
        DDDD: () => this.days[new Date(this.date).getDay()],
        DD: () => this.shortName(this.days[new Date(this.date).getDay()]),
        YY: () => this.shortNumber(new Date(this.date).getFullYear()),
        YYYY: () => new Date().getFullYear()
    };
    constructor(private date) { }

    private shortName(m: string): string {
        let short = m.split('');
        return `${short[0] + short[1] + short[2]}`;
    }
    private shortNumber(m: number): number {
        return m % 100;
    }

    public format(value: FormatsType[]) {
        let date: string = '';
        for (let f of value) {
            date = date + ' ' + this.tableOfFormats[f]();
        }
        return date;
    }

    public diff(date, by: ByType, text?: string[]) {
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
        // let diff_days = new Date(this.date).getTime() - new Date(date).getTime();
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
}