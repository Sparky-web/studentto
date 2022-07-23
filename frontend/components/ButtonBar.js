import {AccountBox, Analytics} from "@mui/icons-material";
import {BottomNavigation, Paper, BottomNavigationAction} from "@mui/material";
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
                <BottomNavigationAction label="Профиль" onClick={() => onLink("/profile")} icon={<AccountBox />} />
            </BottomNavigation>
        </Paper>
    )
}
