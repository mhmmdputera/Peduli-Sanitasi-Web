import { createButtonMenuOpen, createButtonMenuClose } from '../views/templates/template-creator';

const navbarInitiator = {
    init({ button, drawer }) {
        this._drawerClose = true;
        button.addEventListener('click', () => {
          this._toggleDrawer(button, drawer);
        });
    
        document.querySelectorAll('.nav-anchor').forEach((nav) => {
          nav.addEventListener('click', () => {
            this._toggleDrawer(button, drawer);
          });
        });
      },
    
      _toggleDrawer(button, drawer) {
        if (this._drawerClose) {
          button.innerHTML = createButtonMenuClose();
          this._drawerClose = false;
          drawer.classList.add('open');
        } else {
          button.innerHTML = createButtonMenuOpen();
          this._drawerClose = true;
          drawer.classList.remove('open');
        }
      },
};

export default navbarInitiator;