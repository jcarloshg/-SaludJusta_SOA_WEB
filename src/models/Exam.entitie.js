
// class Exam {

const ExamCatalogItem = require("./ExamCatalogItem.entitie");

class Exam {

    constructor({
        idExam = null,
        results = null,
        FK_ExamCatalog = null,
        // reference
        examCatalogItem = new ExamCatalogItem({})
    }) {
        this.idExam = idExam;
        this.results = results;
        this.FK_ExamCatalog = FK_ExamCatalog;
        // reference
        this.examCatalogItem = examCatalogItem;
    }
}

module.exports = Exam;