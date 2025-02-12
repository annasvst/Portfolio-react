import { Link, Button, Typography } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import "./styles.css";

interface HeaderProps {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const Header = ({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
}: HeaderProps) => {
  return (
    <div className="header-container">
      <div className="header-title">
        <LaptopIcon className="laptop-icon" />
        <Typography variant="subtitle2">FIRATWEBDEV</Typography>
      </div>
      <div>
        <nav>
          <Link
            className="link"
            underline="hover"
            margin="0 10px"
            color="inherit"
            onClick={onAboutClick}
          >
            About Me
          </Link>
          <Link
            className="link"
            underline="hover"
            margin="0 10px"
            color="inherit"
            onClick={onSkillsClick}
          >
            Skills
          </Link>
          <Link
            className="link"
            underline="hover"
            margin="0 10px"
            color="inherit"
            onClick={onProjectsClick}
          >
            Projects
          </Link>
        </nav>
      </div>
      <div>
        <Button
          sx={{
            width: {
              xs: 100,
              sm: 200,
              size: 100,
            },
          }}
          className="contact-btn"
          variant="outlined"
          color="inherit"
          onClick={onContactClick}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};
