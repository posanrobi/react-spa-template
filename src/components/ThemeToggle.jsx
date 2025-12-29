import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

const ThemeToggle = () => {
    const mode = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="theme__toggle"
        >
            {mode === "light" ? "🌞" : "🌙"}
        </button>
    );
};

export default ThemeToggle;
