export default function Twitter({
  className = 'block w-8 h-8',
  fill,
}: {
  className?: string;
  fill: string;
}): JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.5989 15.2264C44.3707 14.3667 43.9205 13.5821 43.2936 12.9511C42.6667 12.3202 41.8849 11.865 41.0267 11.6313C37.876 10.7812 25.242 10.7812 25.242 10.7812C25.242 10.7812 12.608 10.7812 9.45729 11.6313C8.59908 11.865 7.81736 12.3202 7.19042 12.9511C6.56349 13.5821 6.11334 14.3667 5.88506 15.2264C5.04062 18.3972 5.04062 25.0139 5.04062 25.0139C5.04062 25.0139 5.04062 31.6306 5.88506 34.8021C6.11334 35.6618 6.56349 36.4464 7.19042 37.0773C7.81736 37.7083 8.59908 38.1635 9.45729 38.3972C12.608 39.2465 25.242 39.2465 25.242 39.2465C25.242 39.2465 37.876 39.2465 41.0267 38.3972C41.8849 38.1635 42.6667 37.7083 43.2936 37.0773C43.9205 36.4464 44.3707 35.6618 44.5989 34.8021C45.4434 31.6306 45.4434 25.0139 45.4434 25.0139C45.4434 25.0139 45.4434 18.3972 44.5989 15.2264Z"
        fill={fill}
      />
      <path
        d="M21.1101 31.0198L31.6698 25.0128L21.1101 19.0059V31.0198Z"
        fill="#FBFBFB"
      />
      <path
        d="M44.599 15.2264C44.3707 14.3667 43.9205 13.5821 43.2936 12.9511C42.6667 12.3202 41.8849 11.865 41.0267 11.6313C37.876 10.7812 25.242 10.7812 25.242 10.7812C25.242 10.7812 12.608 10.7812 9.45729 11.6313C8.59908 11.865 7.81736 12.3202 7.19042 12.9511C6.56349 13.5821 6.11334 14.3667 5.88506 15.2264C5.04062 18.3972 5.04062 25.0139 5.04062 25.0139C5.04062 25.0139 5.04062 31.6306 5.88506 34.8021C6.11334 35.6618 6.56349 36.4464 7.19042 37.0773C7.81736 37.7083 8.59908 38.1635 9.45729 38.3972C12.608 39.2465 25.242 39.2465 25.242 39.2465C25.242 39.2465 37.876 39.2465 41.0267 38.3972C41.8849 38.1635 42.6667 37.7083 43.2936 37.0773C43.9205 36.4464 44.3707 35.6618 44.599 34.8021C45.4434 31.6306 45.4434 25.0139 45.4434 25.0139C45.4434 25.0139 45.4434 18.3972 44.599 15.2264Z"
        stroke="#141214"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M21.1101 31.0217L31.6698 25.0148L21.1101 19.0078V31.0217Z"
        stroke="#141214"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
