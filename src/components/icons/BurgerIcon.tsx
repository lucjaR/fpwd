import * as React from 'react';

export const BurgerIcon = () => (
    <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 22"
        width={20}
        height={20}
    >
        <defs>
            <path id="BurgerIcon_a" d="M0 0h32v2H0V0zm0 12v-2h32v2H0zm0 10v-2h32v2H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <mask id="BurgerIcon_b" fill='#232323'>
                <use xlinkHref="#BurgerIcon_a" />
            </mask>
            <use fill='#232323' fillRule="nonzero" xlinkHref="#BurgerIcon_a" />
            <g fill='#232323' mask="url(#BurgerIcon_b)">
                <path d="M0-5h32v32H0z" />
            </g>
        </g>
    </svg>
);
