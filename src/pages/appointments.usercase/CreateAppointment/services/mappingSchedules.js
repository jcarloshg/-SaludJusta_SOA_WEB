function mappingSchedules(schedules = []) {
  return schedules.map(schedule => ({
    id: schedule.idAppointment,
    date: schedule.date.split('T')[0] ?? '',
    time: schedule.time,
    status: schedule.status,
    accion: schedule.idAppointment,
  }))
}

export default mappingSchedules
