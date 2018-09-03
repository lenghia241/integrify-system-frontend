import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ navigationItems, className }) => {
    return (
        <ul className={className}>
            {
                navigationItems.map((navigationLink, idx) => (
                    <li key={navigationLink.label + idx}>
                        <NavLink
                            to={navigationLink.to}
                            activeClassName="active"
                            className={navigationLink.className}
                        >
                            <i className="material-icons">{navigationLink.icon}</i>
                            <span>{navigationLink.label}</span>
                        </NavLink>
                        {
                            navigationLink.subNavigationItems
                            &&
                            <Navigation navigationItems={navigationLink.subNavigationItems} className="collapsible-body waves-effect waves-light" />
                        }
                    </li>
                )
                )
            }
        </ul>
    );
}
