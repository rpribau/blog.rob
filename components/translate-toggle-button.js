import { useState } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HiTranslate } from 'react-icons/hi';

const LanguageMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Aquí puedes agregar la lógica para cambiar el idioma de tu aplicación
  };

  return (
    <Menu>
      <MenuButton as={Button} leftIcon={<HiTranslate />} variant="solid">
        <span style={{ display: 'none' }}>{selectedLanguage}</span>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleLanguageChange('Inglés')}>Inglés</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('Español')}>Español</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageMenu;
