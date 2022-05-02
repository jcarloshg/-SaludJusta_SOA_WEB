
class ExamCatalogItem {
    constructor({
        idExamCatalog = null,
        typeExam = null,
        cost = null,
    }) {
        this.idExamCatalog = idExamCatalog;
        this.typeExam = typeExam;
        this.cost = cost;
    }
}

module.exports = ExamCatalogItem;