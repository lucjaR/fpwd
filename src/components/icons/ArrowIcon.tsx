import * as React from 'react';

export const ArrowIcon = () => (
    <svg
            viewBox="0 0 32 20"
            width={20}
            height={20}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>29D8ED46-5059-41FD-8F32-183F78DC06E2</title>
            <defs>
                <path
                    d="M3.751 10.651l7.237 7.236-1.363 1.363L0 9.625 9.625 0l1.363 1.363-7.362 7.361h28.37v1.927H3.75z"
                    id="a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="b" fill='#232323'>
                    <use xlinkHref="#a" />
                </mask>
                <use fill='#232323' fillRule="nonzero" xlinkHref="#a" />
                <g mask="url(#b)" fill='#232323'>
                    <path d="M0-6h32v32H0z" />
                </g>
            </g>
        </svg>
);
