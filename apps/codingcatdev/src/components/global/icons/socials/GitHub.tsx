export default function GitHub({
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
        d="M32.4129 30.1948C31.9607 30.821 31.6503 31.7353 31.6503 32.7881C31.6503 33.8438 31.9609 34.7593 32.4131 35.386C32.8664 36.0141 33.4052 36.2906 33.9003 36.2906C34.3955 36.2906 34.9343 36.0141 35.3876 35.386C35.8397 34.7595 36.1501 33.8443 36.1503 32.7891L32.4129 30.1948ZM32.4129 30.1948C32.8662 29.5671 33.4051 29.2906 33.9003 29.2906M32.4129 30.1948L33.9003 29.2906M33.9003 29.2906C34.3953 29.2906 34.9336 29.5669 35.3867 30.1946M33.9003 29.2906L35.3867 30.1946M35.3867 30.1946C35.8388 30.8209 36.1493 31.7355 36.1503 32.789L35.3867 30.1946ZM44.2895 16.2051L44.0495 16.7931L44.4796 17.2604C46.6426 19.6097 47.9504 22.3999 47.9504 26.2606C47.9504 30.6118 47.0489 33.8206 45.6943 36.1962C44.3413 38.5689 42.5046 40.1661 40.545 41.2483C36.5892 43.433 32.149 43.5131 30.2828 43.5131H30.2817L25.954 43.5181H25.9517L21.619 43.5131H21.6178C19.7543 43.5131 15.314 43.433 11.3575 41.2483C9.39753 40.166 7.5604 38.5688 6.20703 36.1961C4.85207 33.8205 3.95035 30.6117 3.95035 26.2606C3.95035 22.4003 5.26029 19.6101 7.42355 17.2604L7.85148 16.7956L7.61545 16.2095C7.61564 16.21 7.61549 16.2095 7.61504 16.2079C7.61126 16.1949 7.58647 16.1098 7.56075 15.9171C7.53441 15.7197 7.51314 15.4574 7.50254 15.1349C7.48139 14.4911 7.50401 13.6455 7.59824 12.6671C7.76669 10.918 8.16009 8.78433 8.91396 6.65541C9.40673 6.76867 10.131 6.96479 11.056 7.29607C12.9648 7.97975 15.7328 9.24078 19.087 11.5426L19.4716 11.8065L19.9209 11.6815C21.222 11.3194 23.5396 11.1231 25.9528 11.1231C28.3611 11.1231 30.6812 11.3194 31.9823 11.6815L32.4317 11.8065L32.8163 11.5425C36.1692 9.24073 38.9366 7.97972 40.8451 7.29605C41.7701 6.9647 42.4944 6.76858 42.9871 6.65532C43.7423 8.78457 44.1373 10.9185 44.3066 12.6675C44.4012 13.6459 44.424 14.4913 44.4027 15.1346C44.3921 15.4569 44.3706 15.7188 44.3441 15.9157C44.3186 16.1044 44.2941 16.1889 44.29 16.2032C44.2894 16.2052 44.2892 16.2059 44.2895 16.2051ZM40.8573 25.3595L40.8565 25.3588C39.0288 23.6814 36.6283 23.3545 34.1504 23.3753C33.0055 23.3849 31.7878 23.4709 30.5514 23.5582C30.4401 23.566 30.3286 23.5739 30.2171 23.5817C28.8533 23.6774 27.4548 23.7681 26.0203 23.7681H25.8803C24.4459 23.7681 23.0476 23.6774 21.6841 23.5817C21.5724 23.5739 21.4609 23.566 21.3495 23.5582C20.1135 23.4709 18.8963 23.3849 17.7519 23.3753C15.2749 23.3545 12.8754 23.6814 11.0489 25.3591C8.98831 27.2494 8.10785 29.5572 8.10785 32.0181C8.10785 34.442 8.59399 36.4199 9.54517 38.0062C10.5002 39.5989 11.8784 40.7207 13.5311 41.5026C16.7741 43.0369 21.1821 43.3056 25.8803 43.3056H26.0203C30.7199 43.3056 35.1278 43.0369 38.3705 41.5026C40.0231 40.7207 41.4012 39.5988 42.3559 38.0061C43.3069 36.4198 43.7928 34.4419 43.7928 32.0181C43.7928 29.5573 42.9125 27.2497 40.8573 25.3595ZM15.7528 32.7881C15.7528 31.7353 16.0632 30.821 16.5154 30.1948C16.9687 29.5671 17.5076 29.2906 18.0028 29.2906C18.4998 29.2906 19.0393 29.5676 19.4926 30.195C19.945 30.8211 20.2553 31.7353 20.2553 32.7881C20.2553 33.8438 19.9448 34.7592 19.4924 35.3858C19.0391 36.0137 18.4997 36.2906 18.0028 36.2906C17.5077 36.2906 16.9689 36.0141 16.5156 35.386C16.0634 34.7593 15.7528 33.8438 15.7528 32.7881Z"
        fill={fill}
        stroke="#141214"
        strokeWidth="2"
      />
      <path
        d="M12.0636 26.4634L12.0633 26.4637C10.33 28.0535 9.60785 29.952 9.60785 32.0177C9.60785 34.2426 10.0534 35.9366 10.8316 37.2345C11.608 38.5292 12.738 39.4676 14.1726 40.1464C17.0731 41.5186 21.1589 41.8052 25.8803 41.8052H26.0203C30.7431 41.8052 34.8288 41.5186 37.729 40.1464C39.1635 39.4676 40.2932 38.5293 41.0694 37.2345C41.8475 35.9366 42.2928 34.2427 42.2928 32.0177C42.2928 29.9519 41.5705 28.0531 39.8419 26.4633L12.0636 26.4634ZM12.0636 26.4634C13.4509 25.1892 15.3496 24.8548 17.7393 24.8749C18.8346 24.8841 20.0053 24.9667 21.2528 25.0547C21.361 25.0623 21.4698 25.07 21.5791 25.0777C22.9428 25.1734 24.3879 25.2677 25.8803 25.2677H26.0203C27.5128 25.2677 28.9581 25.1734 30.322 25.0777M12.0636 26.4634L30.322 25.0777M30.322 25.0777C30.4312 25.07 30.5399 25.0624 30.648 25.0547M30.322 25.0777L30.648 25.0547M30.648 25.0547C31.8958 24.9667 33.0671 24.8841 34.163 24.8749M30.648 25.0547L34.163 24.8749M34.163 24.8749C36.5534 24.8548 38.4533 25.1891 39.8419 26.4632L34.163 24.8749Z"
        fill="#FBFBFB"
        stroke="#141214"
      />
      <path
        d="M32.4129 30.1947C31.9607 30.821 31.6503 31.7352 31.6503 32.788C31.6503 33.8437 31.9609 34.7593 32.4131 35.386C32.8664 36.0141 33.4052 36.2905 33.9003 36.2905C34.3955 36.2905 34.9343 36.0141 35.3876 35.386C35.8396 34.7595 36.1501 33.8443 36.1503 32.789L32.4129 30.1947ZM32.4129 30.1947C32.8662 29.5671 33.4051 29.2905 33.9003 29.2905M32.4129 30.1947L33.9003 29.2905M33.9003 29.2905C34.3953 29.2905 34.9336 29.5668 35.3867 30.1945M33.9003 29.2905L35.3867 30.1945M35.3867 30.1945C35.8388 30.8209 36.1493 31.7355 36.1503 32.789L35.3867 30.1945ZM15.7528 32.788C15.7528 31.7352 16.0632 30.821 16.5154 30.1947C16.9687 29.5671 17.5076 29.2905 18.0028 29.2905C18.4998 29.2905 19.0392 29.5675 19.4926 30.1949C19.945 30.8211 20.2553 31.7352 20.2553 32.788C20.2553 33.8437 19.9448 34.7592 19.4924 35.3858C19.0391 36.0136 18.4997 36.2905 18.0028 36.2905C17.5077 36.2905 16.9689 36.0141 16.5156 35.386C16.0634 34.7593 15.7528 33.8437 15.7528 32.788Z"
        fill="#141214"
        stroke="#141214"
        strokeWidth="2"
      />
    </svg>
  );
}