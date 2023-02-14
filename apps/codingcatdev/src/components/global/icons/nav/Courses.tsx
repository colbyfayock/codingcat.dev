export default function Courses({
  className = 'block w-8 h-8',
}: {
  className?: string;
}): JSX.Element {
  return (
    <svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clipCourses)">
        <path
          d="M16.3643 4.98817L16.3643 4.98821L1.10918 10.8466L1.10914 10.8466C0.663079 11.0179 0.400267 11.49 0.400267 12.0314C0.400267 12.5728 0.663079 13.045 1.10914 13.2163L1.10917 13.2163L3.76863 14.2376L4.22894 14.4143L3.96104 14.8283C3.41753 15.6681 3.08065 16.6969 3.04724 17.8288L3.0414 18.0268L2.88039 18.1422C2.46499 18.4398 2.14999 18.9961 2.14999 19.688C2.14999 20.3104 2.41148 20.8214 2.77328 21.1421L2.94102 21.2908L2.90179 21.5115L1.50561 29.3646C1.46211 29.6093 1.51699 29.8396 1.62 30.0002C1.7232 30.1611 1.85244 30.2255 1.96546 30.2255H5.03398C5.14742 30.2255 5.27676 30.161 5.37996 30.0001C5.483 29.8396 5.53788 29.6093 5.49437 29.3646L4.0982 21.5115L4.05897 21.2908L4.22671 21.1421C4.58851 20.8214 4.84999 20.3104 4.84999 19.688C4.84999 19.0169 4.55049 18.4746 4.15067 18.169L3.98551 18.0428L3.99391 17.835C4.03937 16.7121 4.49976 15.6946 5.2644 15.0377L5.44554 14.882L5.66849 14.9677L16.3636 19.0753C16.806 19.245 17.648 19.4546 18.6357 19.0754L16.3643 4.98817ZM16.3643 4.98817C17.1026 4.70444 17.8973 4.70441 18.6363 4.9882L33.8907 10.8466C34.3373 11.0182 34.6001 11.4905 34.6001 12.0318C34.6001 12.573 34.3373 13.0453 33.8908 13.217C33.8908 13.217 33.8908 13.217 33.8907 13.217L18.6358 19.0754L16.3643 4.98817ZM19.4365 21.9133L19.4366 21.9133L26.8787 19.0551L27.5999 26.2693C27.5939 26.7282 27.3692 27.2007 26.8941 27.6686C26.4112 28.1444 25.6919 28.5912 24.7708 28.975C22.9303 29.7418 20.3599 30.2255 17.5 30.2255C14.6401 30.2255 12.0697 29.7418 10.2292 28.975C9.30806 28.5912 8.58876 28.1444 8.10584 27.6686C7.63081 27.2007 7.40607 26.7282 7.40012 26.2693L8.12134 19.0558L15.5628 21.9133C16.3135 22.2018 17.7514 22.5601 19.4365 21.9133Z"
          strokeWidth="0.8"
        />
        <path
          d="M33.5617 10.8078L18.7429 5.22845C17.9354 4.92442 17.0642 4.92442 16.2572 5.22845L1.43793 10.8078C0.18736 11.2785 0.18789 12.8487 1.43846 13.3194L4.33547 14.408C3.76863 15.2667 3.14091 16.6548 3.10638 17.8019C2.59479 18.1613 2.2346 18.8097 2.2346 19.5838C2.2346 20.2856 2.53635 20.8761 2.97091 21.2537L1.61463 28.7329C1.49669 29.3832 1.92421 30.0004 2.46768 30.0004H4.57165C5.11565 30.0004 5.49563 29.3832 5.37769 28.7329L4.02141 21.2537C4.45597 20.8761 4.75772 20.2856 4.75772 19.5838C4.75772 18.8306 4.414 18.2004 3.92578 17.8345C3.96616 16.8566 4.41671 15.2664 5.0675 14.7182L16.2572 18.8994C16.7385 19.0804 17.6618 19.3063 18.7429 18.8994L33.5622 13.32C34.8133 12.8487 34.8128 11.2792 33.5617 10.8078ZM19.1741 21.987C17.6584 22.5573 16.3669 22.2422 15.6896 21.987L8.14868 19.086L7.46307 25.8331C7.46307 28.1346 11.8664 30.0004 17.4998 30.0004C23.1332 30.0004 27.6998 28.1352 27.6998 25.8338L26.8788 19.086L19.1741 21.987Z"
          fill="#BC2261"
        />
      </g>
      <defs>
        <clipPath id="clipCourses">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}