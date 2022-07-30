import { DateTime } from "luxon";
const getDate = ( time ) => { return ( DateTime.fromISO( time ).setLocale('ru') ) }
export default function transformLesson ( lessons ) {
    const days = []
    const addDay = ( lesson , time ) => {
        const day = {
            dayIndex: time.toFormat('d'),
            weekday: time.toFormat('cccc'),
            shortWeekDay: time.toFormat('ccc'),
            fullDayTitle: time.toFormat('cccc D'),
            lessons: [
                lesson
            ]
        }
        days.push(day)
    }
    lessons?.map(lesson => {
            if (!days.length) {
                addDay( lesson , getDate(lesson.from) )
            } else {
                const lineMassive = days.length
                for(let i = 0; i < lineMassive; i++){
                    if(getDate( lesson.from ).toFormat('D') === getDate( days[i].lessons[0].from ).toFormat('D')){
                        days[i].lessons.push(lesson)
                        return;
                    }
                }
                addDay( lesson , getDate(lesson.from) )
            }
        }
    )
    console.log(days)
}
