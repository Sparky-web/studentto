import { DateTime } from "luxon";
export default function transformLesson ( props ) {
    const { lesson } = props
    const time = DateTime.fromISO(lesson.from).setLocale('ru')
    const days = {
        dayIndex: time.toFormat('d'),
        weekday: time.toFormat('cccc'),
        shortWeekDay: time.toFormat('ccc'),
        fullDayTitle: time.toFormat('cccc D'),//toLocaleString(DateTime.DATE_HUGE)
        start: lesson.from,
        end: lesson.to,
        lessons: [
            {lesson}
        ]
    }
    console.log(lesson.from)
    console.log(days)
}