const NavLinks = ({ isMenuOpen }) => {
    const links = [
        { id: 1, text: 'About', href: '#about' },
        { id: 2, text: 'Education', href: '#education' },
        { id: 3, text: 'Skills', href: '#skills' },
        { id: 4, text: 'Projects', href: '#projects' },
        { id: 5, text: 'Certifications', href: '#certifications' },
        { id: 6, text: 'Contact', href: '#contact' },
    ];

    return (
        <div
            className = { `nav-links ${isMenuOpen ? 'active' : ''}`
        } >
            {
                links.map(link => (
                    <a
                        key = { link.id }
                       href = { link.href }
                    >
                        { link.text }
                    < /a>
                ))
            }
        </div>
    );
};

export default NavLinks;