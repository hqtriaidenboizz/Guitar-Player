import axiosRequest from "./_index"

export const fetchLessonsData = async () => {
  const url = 'rest/v1/lessons?select=*'
  return await axiosRequest.get(url)
}

export const fetchLessonDataUser = async () => {
  const url = ``
}