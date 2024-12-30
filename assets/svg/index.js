import * as React from "react";
import Svg, { G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";

const LocationnIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={99}
    height={112}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="m54.13 67.292 13.082-21.21C75.857 32.066 65.774 14 49.306 14 32.504 14 22.48 32.725 31.8 46.706l13.82 20.736c2.044 3.065 6.576 2.986 8.51-.15Z"
      />
    </G>
    <Path fill="#fff" d="M37 26h24v24H37z" />
    <Path fill="#000" d="M56 39h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2Z" />
    <Defs></Defs>
  </Svg>
);

const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#625B71"
      fillRule="evenodd"
      d="m11.76 10.607 5.73 5.73-1.49 1.49-5.73-5.73c-1.07.77-2.36 1.24-3.77 1.24a6.5 6.5 0 1 1 6.5-6.5c0 1.41-.47 2.7-1.24 3.77ZM6.5 2.338c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5Z"
      clipRule="evenodd"
    />
  </Svg>
);

const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={15}
    fill="none"
    {...props}
  >
    <Circle cx={2.999} cy={3.797} r={2.337} stroke="#1F1F1F" />
    <Circle
      cx={2.837}
      cy={2.837}
      r={2.337}
      stroke="#1F1F1F"
      transform="matrix(-1 0 0 1 19.422 8.775)"
    />
    <Path
      stroke="#1F1F1F"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.742 3.608h7.93M8.842 11.422H.913"
    />
  </Svg>
);

const CalenderIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#625B71"
      d="M18 2.013h-1v-2h-2v2H5v-2H3v2H2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2Zm0 18H2v-11h16v11Zm0-13H2v-3h16v3Z"
    />
  </Svg>
);

const GuestIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#625B71"
      d="M15.67 9.818c1.37.93 2.33 2.19 2.33 3.87v3h4v-3c0-2.18-3.57-3.47-6.33-3.87ZM14 8.688c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24ZM8 8.688c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM8 9.688c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4Zm6 5H2v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1Z"
    />
  </Svg>
);

const MinusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={2}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M14 2H0V0h14v2Z" />
  </Svg>
);

const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M14 8H8v6H6V8H0V6h6V0h2v6h6v2Z" />
  </Svg>
);

const BellIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M9.944 12.618c-.366 1.489-1.626 2.162-2.72 2.102-1.078-.06-2.145-.796-2.446-2.102h-.17c-.914 0-1.829-.002-2.743 0-.458.002-.813-.178-1.013-.595-.196-.407-.123-.788.148-1.151.323-.435.625-.885.93-1.332.127-.186.172-.398.172-.623-.002-1.215-.027-2.431.004-3.646C2.163 3.032 3.21 1.395 5.244.458c2.974-1.37 6.527.428 7.231 3.631.089.403.127.823.133 1.236.017 1.182.009 2.365.004 3.548-.002.285.072.536.238.768.311.436.619.875.924 1.316.238.345.268.715.08 1.087a.99.99 0 0 1-.927.573c-.936.007-1.872.002-2.809.002l-.174-.001Zm2.962-1.06c-.317-.456-.618-.897-.927-1.333a2.237 2.237 0 0 1-.418-1.339c.005-1.182.005-2.364-.001-3.546a5.313 5.313 0 0 0-.064-.8c-.364-2.305-2.7-3.897-4.979-3.399-2.009.44-3.361 2.114-3.364 4.168-.002 1.144-.013 2.288.005 3.431a2.54 2.54 0 0 1-.514 1.623c-.287.383-.55.786-.834 1.196h11.096ZM8.82 12.626H5.894c.165.596.813 1.049 1.48 1.043.654-.006 1.293-.465 1.446-1.043Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.741-.006h13.236v14.73H.741z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const BadgeRoundIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <Circle cx={3.703} cy={4.257} r={3.46} fill="#18C0C1" />
  </Svg>
);

const DiscountBG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={192}
    height={60}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#18C0C1"
        d="M192 10 51.332 22.56C35.859 23.94 24 36.906 24 52.44V60h168V10Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

const DiscountCouponIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#F9B908"
      d="m19.41 9.58-9-9C10.05.22 9.55 0 9 0H2C.9 0 0 .9 0 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42ZM3.5 5C2.67 5 2 4.33 2 3.5S2.67 2 3.5 2 5 2.67 5 3.5 4.33 5 3.5 5Z"
    />
  </Svg>
);

const BackArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFFBFE"
      d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7Z"
    />
  </Svg>
);

const HeartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.32.22a6.49 6.49 0 0 1 4.5 4.55A5.83 5.83 0 0 1 18 10.53l-7.27 7.18a1 1 0 0 1-1.4 0L2 10.53A5.83 5.83 0 0 1 .18 4.77 6.49 6.49 0 0 1 4.68.22 6 6 0 0 1 10 1.31 6 6 0 0 1 15.32.22ZM10 15.6l6.63-6.5a3.81 3.81 0 0 0 1.17-3.84 4.51 4.51 0 0 0-3.1-3.11 4.11 4.11 0 0 0-4.08 1.2 1 1 0 0 1-1.4 0 4.3 4.3 0 0 0-3-1.35 3.81 3.81 0 0 0-1 .15 4.51 4.51 0 0 0-3.1 3.11A3.81 3.81 0 0 0 3.37 9.1L10 15.6Z"
      clipRule="evenodd"
    />
  </Svg>
);

const ShareIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15.94 15.83A3 3 0 0 1 18 15a3 3 0 1 1-3 3 2.59 2.59 0 0 1 0-.39l-9.4-5.14A3 3 0 0 1 3 14a3 3 0 1 1 0-6 3 3 0 0 1 2.6 1.53L15 4.39A2.59 2.59 0 0 1 15 4a3 3 0 1 1 .94 2.17L7.09 11l8.85 4.83ZM19 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM3 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm14 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

const StarRatingIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#F9B908"
      d="M7 .333 9 5h4.667l-3.334 4 1.334 4.667L7 11l-4.667 2.667L3.667 9 .333 5H5L7 .333Z"
    />
  </Svg>
);

export {
  LocationnIcon,
  SearchIcon,
  FilterIcon,
  CalenderIcon,
  GuestIcon,
  MinusIcon,
  PlusIcon,
  BellIcon,
  BadgeRoundIcon,
  DiscountBG,
  DiscountCouponIcon,
  BackArrowIcon,
  HeartIcon,
  ShareIcon,
  StarRatingIcon,
};
