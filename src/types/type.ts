interface NavLink {
    label: string;
    href?: string;
    submenu?: {
        name: string;
        href: string;
    }[];
}

export interface NavbarDataTypes {
    topNavbar: {
        content: string;
        buttonText: string;
    };
    secondNavbar: {
        logo: string;
        navlinkes: NavLink[];
        fistBtnText: string;
        sectBtnText: string;
    };
}
