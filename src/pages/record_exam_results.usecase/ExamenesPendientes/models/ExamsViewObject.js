
class ExamsViewObject {
    constructor({
        nameClient = null,
        typeExam = null,
        hour = null,
        status = null
    }) {
        this.nameClient = nameClient;
        this.typeExam = typeExam;
        this.hour = hour;
        this.status = status;
    }
}

module.exports = ExamsViewObject;