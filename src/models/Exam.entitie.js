
class Exam {

    constructor({
        idExam = null,
        results = null,
        FK_ExamCatalog = null,
    }) {
        this.idExam = idExam;
        this.results = results;
        this.FK_ExamCatalog = FK_ExamCatalog;
    }
}

module.exports = Exam;