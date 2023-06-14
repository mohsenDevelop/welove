export class Helper {

    public static threeDigitSeparator = (value: any) => {
        try {
            if (!value) {
                return '';
            }

            const isValueTypeSuitable = typeof value === 'number' || typeof value === 'string';
            if (!isValueTypeSuitable) {
                return '';
            }

            // Convsert the `value` to string
            // Value += '';
            return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
            // Return value.toLocaleString('en')
        }
        catch (e) {
            return '';
        }
    };

    public static addCommas = (num: number | string) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    public static removeNonNumeric = (num: number | string) => num.toString().replace(/[^0-9]/g, '');
}