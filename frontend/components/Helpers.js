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
                if (lesson.from === days[lineMassive - 1].lessons[0].from) {
                    days[lineMassive - 1].lessons.push(lesson)
                }/*else{
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
                }*/
            }
        }
    )

    console.log(days)
}