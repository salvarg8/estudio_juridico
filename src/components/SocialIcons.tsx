import React from 'react';

type SocialIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export const InstagramIcon: React.FC<SocialIconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect width="18" height="18" x="3" y="3" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon: React.FC<SocialIconProps> = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M14 8.5V7c0-.8.5-1 1-1h2V3h-2.7C11.5 3 10 4.7 10 7v1.5H7V12h3v9h4v-9h3l.5-3.5H14Z" />
  </svg>
);
