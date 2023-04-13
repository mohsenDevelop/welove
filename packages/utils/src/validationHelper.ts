export class ValidationHelper {

    static checkPasswordComplexity = (input: any) => {

        if (typeof input !== 'string') { input = input.toString(); }

        const exp = /^(?=.*[A-Z])(?=.*[!@%#$&*()-/.`:\\<=>\]?;/[^_{}|~'])(?=.*[0-9])(?=.*[a-z]).{8,64}$/;
        const reg = new RegExp(exp);
        const isAccepted = input.match(reg);

        if (isAccepted) {
            return true;
        }
        return false;
    };
}