import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element

      <svg width="32" height="32" viewBox="0 0 170 166" fill="none">
        <path
          d="M0 6.4C0 4.15979 0 3.03968 0.435974 2.18404C0.819467 1.43139 1.43139 0.819467 2.18404 0.435974C3.03968 0 4.15979 0 6.4 0L163.6 0C165.84 0 166.96 0 167.816 0.435974C168.569 0.819467 169.181 1.43139 169.564 2.18404C170 3.03968 170 4.15979 170 6.4V159.6C170 161.84 170 162.96 169.564 163.816C169.181 164.569 168.569 165.181 167.816 165.564C166.96 166 165.84 166 163.6 166H6.39999C4.15979 166 3.03968 166 2.18404 165.564C1.43139 165.181 0.819467 164.569 0.435974 163.816C0 162.96 0 161.84 0 159.6L0 6.4Z"
          fill="#0C0817"
        />
        <path
          d="M35.1621 59.119L22 66.6746M35.1621 59.119L85.0686 87.3175M35.1621 59.119V44.0079M22 66.6746V82.0556L57.7845 102.159V113.087M22 66.6746L70.9467 94.4683V151M22 108.095L57.7845 128.468V113.087M22 108.095V122.667L70.9467 151M22 108.095L35.1621 100.675L57.7845 113.087M70.9467 151L85.0686 143.579M85.0686 87.3175V143.579M85.0686 87.3175L134.152 59.119M85.0686 143.579L98.0936 151M98.0936 151L112.078 143.579V102.159L120.579 97.4306M98.0936 151V94.4683L148 66.6746M134.152 130.897V89.881L120.579 97.4306M134.152 130.897L120.579 122.667V97.4306M134.152 130.897L148 122.667V66.6746M148 66.6746L134.152 59.119M134.152 59.119V44.0079M35.1621 44.0079L85.0686 72.2064L134.152 44.0079M35.1621 44.0079L85.0686 15L98.0936 23.2302M134.152 44.0079L120.579 35.9127L85.0686 57.6349L75.0598 51.9179M98.0936 23.2302L61.2122 44.0079L75.0598 51.9179M98.0936 23.2302V39.1508L75.0598 51.9179"
          stroke="#CBA6F7"
          stroke-width="4"
        />
      </svg>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
