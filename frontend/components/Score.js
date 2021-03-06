import { useTheme } from "@mui/material";
import { Chip, ListItemButton, ListItemText, Typography } from "@mui/material";

const getColor = (i) => {
    if (i < 0) i = 0
    const hue = i * 1.2 / 360;
    const rgb = hslToRgb(hue, 1, .35);
    return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
}

function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export default function Score(props) {
    const theme = useTheme()
    const { score } = props

    return (
        <ListItemButton>
            <ListItemText
                primary={
                    <Typography display="block" variant="actionL">Математика</Typography>
                }
                secondary={
                    <Typography color="text.hint" sx={{ marginTop: "4px" }} display="block" variant="bodyS">Еремеев Алексей Леонидович</Typography>
                }>
            </ListItemText>
            <Chip sx={{ backgroundColor: () => getColor(100 * (score - 2) / (5 - 2)), color: "primary.lightest", fontSize: theme.typography.caption}} label={score.toFixed(2)} />
        </ListItemButton>
    )
}