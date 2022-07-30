import { DateTime } from "luxon";
const getDate = ( time ) => { return ( DateTime.fromISO( time ).setLocale('ru') ) }
const addDay = ( days, lesson , time ) => {
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

export default function transformLesson ( lessons ) {
    const days = []
    lessons?.map(lesson => {
            if (!days.length) { addDay(days, lesson, getDate(lesson.from))
            } else {
                const lineMassive = days.length
                for (let i = 0; i < lineMassive; i++) {
                    if (getDate(lesson.from).toFormat('D') === getDate(days[i].lessons[0].from).toFormat('D')) {
                        days[i].lessons.push(lesson)
                        return;
                    }
                }
                addDay(days, lesson, getDate(lesson.from))
            }
        }
    )
    transformTime( days )
    console.log(days)
}

const timeTable = [ "08:30", "10:10", "12:10", "14:10", "16:00", "17:40", "19:20" ]
function transformTime ( days ) {
    let index = 0;
    for(let i = 0; i < days.length; i++) {
        for(let j = 0; j < days[i].lessons.length; j++) {
            for(let g = 0; g < timeTable.length; g++){
              //  console.log(getDate(days[i].lessons[j].from).toLocaleString(DateTime.TIME_24_SIMPLE),' ' , timeTable[g])
                if(getDate(days[i].lessons[j].from).toLocaleString(DateTime.TIME_24_SIMPLE) === timeTable[g])
                {
                    if(g < index - 1 || index == 0) {
                        // if(getDate(days[i].lessons[j].from).toLocaleString(DateTime.TIME_24_SIMPLE) === timeTable[g] && g < index || index == 0){
                        index = g + 1;
                        days[i].fullDayTitle =
                            (getDate(days[i].lessons[j].from).toFormat('cccc D') + ' ' + days[i].lessons.length + ' пар(ы) с ' + index + ' пары (' + days[i].lessons[j].name + ')');
                    }
                }
            }
        }
    }
}