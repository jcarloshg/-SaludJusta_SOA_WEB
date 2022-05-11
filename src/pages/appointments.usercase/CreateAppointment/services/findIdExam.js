function findIdExam(typesOfExams = [], typeExam = '') {
  return typesOfExams.find(type => type.value === typeExam).idExamCatalog
}

export default findIdExam
