import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {AccountBox, Analytics} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import {useRouter} from "next/router";

export default function ButtonBar( props ) {
    const {value} = props;

    const router = useRouter()
    function onLink (href) {
        router.push(href)
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels value={value}>
                <BottomNavigationAction label="Расписание" onClick={() => onLink("/")} icon={<Analytics />} />
                <BottomNavigationAction label="Профиль" onClick={() => onLink("/auth")} icon={<AccountBox />} />
            </BottomNavigation>
        </Paper>
    )
}
