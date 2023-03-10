import { Box, BoxProps } from '@mui/material';
import React from 'react';

export default function LoveIcon({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550">
        <g id="Object">
          <circle cx="275" cy="275" r="275" fill="#f3d065" />
          <path
            d="M704.8766,326.2866a273.7111,273.7111,0,0,1,43.2649,148.1277c0,151.8784-123.1216,275-275,275A273.6955,273.6955,0,0,1,329.265,708.8032,274.7859,274.7859,0,0,0,561,835.6754c151.8783,0,275-123.1217,275-275A274.8184,274.8184,0,0,0,704.8766,326.2866Z"
            transform="translate(-286 -286)"
            fill="#efc45c"
          />
          <path
            d="M323.3764,590.0127c0-141.01,114.3109-255.3206,255.3206-255.3206a254.8826,254.8826,0,0,1,202.3906,99.68,255.2208,255.2208,0,0,0-221.395-128.0664c-141.01,0-255.3206,114.3109-255.3206,255.3206a254.1883,254.1883,0,0,0,52.93,155.6409A254.1448,254.1448,0,0,1,323.3764,590.0127Z"
            transform="translate(-286 -286)"
            fill="#f5d783"
          />
          <path
            d="M444.1169,617.2761a117.6392,117.6392,0,0,0,233.7662,0Z"
            transform="translate(-286 -286)"
            fill="#635445"
          />
          <path
            d="M480.263,689.4708a117.53,117.53,0,0,0,158.7174,2.54l-1.08-2.5285C559.4085,651.2081,481.33,688.9511,480.263,689.4708Z"
            transform="translate(-286 -286)"
            fill="#d46669"
          />
          <path
            d="M523.0773,481.0369c.0009-.1351.01-.2682.01-.4036,0-25.3955-18.3667-48.6484-45.9825-48.6484-21.9447,0-34.67,15.7711-39.0106,30.5331h0c-4.3408-14.762-17.0659-30.5331-39.01-30.5331-27.6159,0-45.9825,23.2529-45.9825,48.6484,0,.1354.0091.2685.01.4036-.1478,5.525-.01,61.7471,84.9576,107.5718v.0124l.0126-.0061.0127.0061.0127-.0061.0127.0061v-.0124C523.0875,542.784,523.225,486.5619,523.0773,481.0369Z"
            transform="translate(-286 -286)"
            fill="#c72b2c"
          />
          <path
            d="M768.8886,481.0369c.001-.1351.01-.2682.01-.4036,0-25.3955-18.3667-48.6484-45.9825-48.6484-21.9446,0-34.67,15.7711-39.0106,30.5331h0c-4.3408-14.762-17.0658-30.5331-39.0105-30.5331-27.6159,0-45.9825,23.2529-45.9825,48.6484,0,.1354.0092.2685.01.4036-.1477,5.525-.01,61.7471,84.9576,107.5718v.0124l.0126-.0061.0127.0061.0127-.0061.0127.0061v-.0124C768.8989,542.784,769.0364,486.5619,768.8886,481.0369Z"
            transform="translate(-286 -286)"
            fill="#c72b2c"
          />
        </g>
      </svg>
    </Box>
  );
}
