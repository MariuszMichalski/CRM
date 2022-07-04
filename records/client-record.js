const {ValidationError} = require("../utils/errors");

class ClientRecord {
    constructor(obj) {
        const {name, id, mail, nextContactAt, notes} = obj;

        if (!id || typeof id !== "string") {
            throw new ValidationError('Id musi być niepustym tekstem')
        }

        if (!name || typeof name !== "string" || name.length < 3) {
            throw new ValidationError('Imię musi być tekstem o długości minimum 3 znaków')
        }

        if (!mail || typeof mail !== "string" || mail.indexOf('@') === -1) {
            throw new ValidationError('E-mail nieprawidłowy.')
        }

        if (typeof nextContactAt !== "string") {
            throw new ValidationError('Data następnego kontaktu musi być tekstem')
        }
        if (typeof notes !== "string") {
            throw new ValidationError('notatki muszą być tekstem')
        }

        this.id = obj.id;
        this.name = obj.name;
        this.mail = obj.mail;
        this.nextContactAt = obj.nextContactAt;
        this.notes = obj.notes;

    }

}

module.exports = {
    ClientRecord,
};