import Exam from "../models/Exam.entitie"

const defaultExamen = new Exam({});

export const examAdapter = (endpointExam = defaultExamen) => {

    return new Exam({
        idExam: endpointExam.idExam,
        results: endpointExam.results,
        FK_ExamCatalog: endpointExam.FK_ExamCatalog,
        examCatalogItem: endpointExam.examCatalogItem,
    })
}
