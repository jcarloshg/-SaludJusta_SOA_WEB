
class ExamCatalogItem {
    constructor({
        idExamCatalogItem = null,
        typeExam = null,
        cost = null,
    }) {
        this.idExamCatalogItem = idExamCatalogItem;
        this.typeExam = typeExam;
        this.cost = cost;
    }
}

module.exports = ExamCatalogItem;