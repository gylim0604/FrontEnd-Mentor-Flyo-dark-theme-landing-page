import { Box, Icon } from '@chakra-ui/react';
import React from 'react';

export function ArrowIcon() {
    return (
        <Box
            as='svg'
            role='img'
            width='16px'
            height='16px'
            xmlns='http://www.w3.org/2000/svg'
            fill='black'
        >
            <defs>
                <circle id='b' cx='6' cy='6' r='6' />
                <filter
                    x='-25%'
                    y='-25%'
                    width='150%'
                    height='150%'
                    filterUnits='objectBoundingBox'
                    id='a'
                >
                    <feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
                    <feGaussianBlur
                        stdDeviation='1'
                        in='shadowOffsetOuter1'
                        result='shadowBlurOuter1'
                    />
                    <feColorMatrix
                        values='0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0'
                        in='shadowBlurOuter1'
                    />
                </filter>
            </defs>
            <g fill='none' fillRule='evenodd'>
                <g transform='translate(2 2)'>
                    <use fill='#000' filter='url(#a)' xlinkHref='#b' />
                    <use fill='#62E0D9' xlinkHref='#b' />
                </g>
                <path
                    d='M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z'
                    fill='#1B2330'
                />
            </g>
        </Box>
    );
}

export function ArrowIconWhite() {
    return (
        <Box
            as='svg'
            role='img'
            width='16px'
            height='16px'
            xmlns='http://www.w3.org/2000/svg'
            fill='black'
        >
            <defs>
                <circle id='b' cx='6' cy='6' r='6' />
                <filter
                    x='-25%'
                    y='-25%'
                    width='150%'
                    height='150%'
                    filterUnits='objectBoundingBox'
                    id='a'
                >
                    <feOffset in='SourceAlpha' result='shadowOffsetOuter1' />
                    <feGaussianBlur
                        stdDeviation='1'
                        in='shadowOffsetOuter1'
                        result='shadowBlurOuter1'
                    />
                    <feColorMatrix
                        values='0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0'
                        in='shadowBlurOuter1'
                    />
                </filter>
            </defs>
            <g fill='none' fillRule='evenodd'>
                <g transform='translate(2 2)'>
                    <use fill='#000' filter='url(#a)' xlinkHref='#b' />
                    <use fill='#FFF' xlinkHref='#b' />
                </g>
                <path
                    d='M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z'
                    fill='#1B2330'
                />
            </g>
        </Box>
    );
}

export function FacebookIcon({ fill, hoverFill }) {
    return (
        <Icon
            as='svg'
            role='img'
            height='30px'
            width='30px'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            fill={fill}
            _hover={{ fill: hoverFill }}
            cursor='pointer'
            mx='10px'
        >
            <g id='Background'>
                <path d='M983.766,312.727c-25.785-60.972-62.694-115.728-109.705-162.744   C827.05,102.966,772.299,66.049,711.329,40.257C648.194,13.548,581.14,0.004,512,0c-69.104,0-136.155,13.54-199.289,40.243   c-60.969,25.787-115.721,62.699-162.735,109.71c-47.014,47.011-83.929,101.761-109.72,162.728   C13.548,375.814,0.004,442.865,0,511.97c-0.004,69.109,13.533,136.165,40.234,199.304   c25.785,60.973,62.696,115.728,109.707,162.743c47.011,47.018,101.762,83.935,162.732,109.727   c63.136,26.708,130.19,40.253,199.323,40.257h0.009c69.104,0,136.153-13.54,199.288-40.243   c60.969-25.787,115.72-62.699,162.733-109.709c47.013-47.01,83.929-101.76,109.72-162.728   c26.708-63.134,40.251-130.186,40.255-199.29C1024.004,442.921,1010.467,375.866,983.766,312.727z M512.004,976.328h-0.03   c-124.026-0.007-240.627-48.313-328.323-136.019C95.957,752.604,47.665,635.999,47.672,511.973   c0.015-256.016,208.312-464.3,464.356-464.3c124.026,0.007,240.626,48.312,328.32,136.017   c87.695,87.706,135.986,204.311,135.979,328.337C976.313,768.043,768.018,976.328,512.004,976.328z' />
            </g>
            <g id='Facebook'>
                <path
                    d='M672.75,305.64V203.89c-3.736,0-7.473-0.007-11.209,0.001   c-8.996,0.02-17.993-0.022-26.99,0.001c-10.972,0.028-21.942-0.046-32.915,0.001c-9.667,0.042-19.337-0.097-29.003,0.003   c-14.592,0.151-28.443,0.868-42.438,5.375c-13.493,4.346-26.158,11.955-36.948,21.081c-6.248,5.284-12.031,10.943-17.269,17.234   c-2.121,2.613-4.097,5.33-5.942,8.14c-5.538,8.431-9.913,17.704-13.567,27.535c-0.821,2.213-1.628,4.432-2.397,6.662   c-5.634,16.324-5.82,34.143-5.82,51.297c0,2.148,0,4.363,0,6.629c0,33.984,0,79.291,0,79.291h-97v112h93.5h2.5v281h111v-283.5   L659,537.999l13.583-110.125L558.75,427.64v-85c0,0-0.25-36.25,30.5-36.75L672.75,305.64z'
                    id='Facebook_1_'
                />
            </g>
        </Icon>
    );
}
export function TwitterIcon({ fill, hoverFill }) {
    return (
        <Icon
            as='svg'
            role='img'
            height='30px'
            width='30px'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            fill={fill}
            _hover={{ fill: hoverFill }}
            mx='10px'
        >
            <path d='M983.766 312.727c-25.785-60.972-62.694-115.728-109.705-162.744-47.011-47.017-101.762-83.934-162.732-109.726C648.194 13.548 581.14.004 512 0c-69.104 0-136.155 13.54-199.289 40.243-60.969 25.787-115.721 62.699-162.735 109.71-47.014 47.011-83.929 101.761-109.72 162.728C13.548 375.814.004 442.865 0 511.97c-.004 69.109 13.533 136.165 40.234 199.304 25.785 60.973 62.696 115.728 109.707 162.743 47.011 47.018 101.762 83.935 162.732 109.727 63.136 26.708 130.19 40.253 199.323 40.257h.009c69.104 0 136.153-13.54 199.288-40.243 60.969-25.787 115.72-62.699 162.733-109.709 47.013-47.01 83.929-101.76 109.72-162.728 26.708-63.134 40.251-130.186 40.255-199.29.003-69.11-13.534-136.165-40.235-199.304zM512.004 976.328h-.03c-124.026-.007-240.627-48.313-328.323-136.019-87.694-87.705-135.986-204.31-135.979-328.336.015-256.016 208.312-464.3 464.356-464.3 124.026.007 240.626 48.312 328.32 136.017 87.695 87.706 135.986 204.311 135.979 328.337-.014 256.016-208.309 464.301-464.323 464.301z' />
            <path d='M742.988 348.513s52.681-44.338 51.012-64.124c0 0-60.785 26.698-74.135 27.89 0 0-4.227-4.253-11.146-9.845a176.945 176.945 0 0 0-7.762-5.93 108.747 108.747 0 0 0-16.602-9.969 119.046 119.046 0 0 0-8.797-3.84c-19.379-8.492-40.61-10.572-61.45-8.292-2.978.326-5.946.741-8.901 1.238-34.565 5.411-64.125 26.388-82.727 54.989a97.908 97.908 0 0 0-4.629 8.033c-2.818 5.492-5.089 11.256-6.686 17.269a174.95 174.95 0 0 0-1.96 7.565 129.236 129.236 0 0 0-1.736 8.615c-1.907 11.681 0 49.583 0 49.583s-153.753 4.768-252.442-123.003c0 0-48.628 92.014 35.28 156.376 0 0-17.064 7.628-49.295-11.442 0 0-16.02 70.082 87.912 118.234H278.39s17.64 77.711 111.562 84.862c0 0-44.338 59.594-173.063 50.535 0 0 116.14 80.755 265.766 43.276 2.671-.67 5.354-1.377 8.047-2.122 23.682-7.305 47.52-15.886 69.171-27.394a342.423 342.423 0 0 0 5.671-3.008 398.277 398.277 0 0 0 17.099-9.816s157.32-85.241 170.191-305.489c0 0 33.063-19.401 54.277-56.587 0 .001-59.594 13.826-64.123 12.396z' />
        </Icon>
    );
}

export function InstagramIcon({ fill, hoverFill }) {
    return (
        <Icon
            as='svg'
            role='img'
            height='30px'
            width='30px'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            fill={fill}
            _hover={{ fill: hoverFill }}
            mx='10px'
        >
            <path d='M983.766 312.727c-25.785-60.972-62.694-115.728-109.705-162.744-47.011-47.017-101.762-83.934-162.732-109.726C648.194 13.548 581.14.004 512 0c-69.104 0-136.155 13.54-199.289 40.243-60.969 25.787-115.721 62.699-162.735 109.71-47.014 47.011-83.929 101.761-109.72 162.728C13.548 375.814.004 442.865 0 511.97c-.004 69.109 13.533 136.165 40.234 199.304 25.785 60.973 62.696 115.728 109.707 162.743 47.011 47.018 101.762 83.935 162.732 109.727 63.136 26.708 130.19 40.253 199.323 40.257h.009c69.104 0 136.153-13.54 199.288-40.243 60.969-25.787 115.72-62.699 162.733-109.709 47.013-47.01 83.929-101.76 109.72-162.728 26.708-63.134 40.251-130.186 40.255-199.29.003-69.11-13.534-136.165-40.235-199.304zM512.004 976.328h-.03c-124.026-.007-240.627-48.313-328.323-136.019-87.694-87.705-135.986-204.31-135.979-328.336.015-256.016 208.312-464.3 464.356-464.3 124.026.007 240.626 48.312 328.32 136.017 87.695 87.706 135.986 204.311 135.979 328.337-.014 256.016-208.309 464.301-464.323 464.301z' />
            <g>
                <circle cx='658.765' cy='364.563' r='33.136' />
                <path d='M512 655.912c-79.354 0-143.912-64.56-143.912-143.912 0-79.354 64.559-143.912 143.912-143.912S655.913 432.647 655.913 512c0 79.354-64.559 143.912-143.913 143.912zm0-242.824c-54.54 0-98.912 44.372-98.912 98.912S457.46 610.912 512 610.912c54.541 0 98.913-44.372 98.913-98.912S566.541 413.088 512 413.088z' />
                <path d='M603.643 800.006H420.358c-103.389 0-187.5-84.112-187.5-187.5V411.495c0-103.388 84.112-187.5 187.5-187.5h183.283c103.389 0 187.5 84.112 187.5 187.5v201.011c.002 103.388-84.111 187.5-187.498 187.5zM420.358 268.995c-78.575 0-142.5 63.925-142.5 142.5v201.011c0 78.575 63.925 142.5 142.5 142.5h183.283c78.575 0 142.5-63.925 142.5-142.5V411.495c0-78.575-63.925-142.5-142.5-142.5H420.358z' />
            </g>
        </Icon>
    );
}
