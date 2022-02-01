import { Language } from '@mui/icons-material';
import { Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import i18n from 'i18n';

function Header() {
  const changeLanguageHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.target.checked
      ? i18n.changeLanguage('es')
      : i18n.changeLanguage('en');
  };

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Language />
      <Typography>En</Typography>
      <Switch defaultChecked onChange={changeLanguageHandler} />
      <Typography>Es</Typography>
    </Box>
  );
}

export default Header;
