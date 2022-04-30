
// class ExamsViewObject {
//     constructor({
//         nameClient = null,
//         typeExam = null,
//         hour = null,
//         status = null
//     }) {
//         this.nameClient = nameClient;
//         this.typeExam = typeExam;
//         this.hour = hour;
//         this.status = status;
//     }
// }

export const examsViewObject = ({
    id = null, // ! this is important to render into table
    nameClient = null,
    typeExam = null,
    hour = null,
    status = null
}) => {
    return {
        id: id,
        nameClient: nameClient,
        typeExam: typeExam,
        hour: hour,
        status: status,
    }
}