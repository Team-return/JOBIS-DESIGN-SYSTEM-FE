import React from 'react';

const DateIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="white" //svg 버그 있어서 배경색 하얀색임
    >
      <path
        d="M1 11.6667L25 11.6667M9 18.3333H17M7.66667 1L7.66667 6.33333M18.3333 1L18.3333 6.33333M6.33333 25H19.6667C22.1808 25 23.4379 25 24.219 24.219C25 23.4379 25 22.1808 25 19.6667V10.3333C25 7.81918 25 6.5621 24.219 5.78105C23.4379 5 22.1808 5 19.6667 5H6.33333C3.81918 5 2.5621 5 1.78105 5.78105C1 6.5621 1 7.81918 1 10.3333V19.6667C1 22.1808 1 23.4379 1.78105 24.219C2.5621 25 3.81918 25 6.33333 25Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default DateIcon;
