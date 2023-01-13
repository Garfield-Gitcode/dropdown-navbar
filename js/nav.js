const nav = document.querySelector('.nav-menu');

const Nav = () => {

    nav.addEventListener('click', changeIcon);

    function changeIcon() {
        nav.classList.toggle('active');
    }
};

export default Nav;