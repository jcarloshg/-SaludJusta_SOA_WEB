import { capitalize } from '../../../../utilities'

function mappingExamTypes(examTypes = []) {
  return examTypes.map(type => ({
    idExamCatalog: type.idExamCatalog ?? '',
    value: type.typeExam ?? '',
    label: capitalize(type.typeExam.toLowerCase()),
  }))
}

export default mappingExamTypes
