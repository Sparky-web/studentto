import { DateTime } from "luxon";

export default function transformLesson ( lessons ) {

    const days = []

    lessons?.map(lesson => {
            const time = DateTime.fromISO(lesson.from).setLocale('ru')
            if (!days.length) {
                const day = {
                    dayIndex: time.toFormat('d'),
                    weekday: time.toFormat('cccc'),
                    shortWeekDay: time.toFormat('ccc'),
                    fullDayTitle: time.toFormat('cccc D'),//toLocaleString(DateTime.DATE_HUGE)
                    lessons: [
                        lesson
                    ]
                }
                days.push(day)
            } else {
                const lineMassive = days.length
                for(let i = 0; i < lineMassive; i++){
                    //console.log(lesson.from === days[i].lessons[0].from)
                    if(DateTime.fromISO(lesson.from).toFormat('cccc D') === DateTime.fromISO(days[i].lessons[0].from).toFormat('cccc D')){
                        days[i].lessons.push(lesson)
                        return;
                    }
                }
                const day = {
                    dayIndex: time.toFormat('d'),
                    weekday: time.toFormat('cccc'),
                    shortWeekDay: time.toFormat('ccc'),
                    fullDayTitle: time.toFormat('cccc D'),//toLocaleString(DateTime.DATE_HUGE)
                    lessons: [
                        lesson
                    ]
                }
                days.push(day)
            }
        }
    )

    console.log(days)
}