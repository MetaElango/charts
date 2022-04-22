import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

Chart.register(...registerables);

const dataList = [
  {
    date: "28 May 2020",
    nav: 110.44,
    sp500: 110.44,
  },
  {
    date: "29 May 2020",
    nav: 110.46,
    sp500: 110.97,
  },
  {
    date: "30 May 2020",
    nav: 110.62,
    sp500: 110.97,
  },
  {
    date: "31 May 2020",
    nav: 113.26,
    sp500: 110.97,
  },
  {
    date: "01 June 2020",
    nav: 115.69,
    sp500: 111.39,
  },
  {
    date: "02 June 2020",
    nav: 115.08,
    sp500: 112.3,
  },
  {
    date: "03 June 2020",
    nav: 115.04,
    sp500: 113.84,
  },
  {
    date: "04 June 2020",
    nav: 118.43,
    sp500: 113.45,
  },
  {
    date: "05 June 2020",
    nav: 120.12,
    sp500: 116.43,
  },
  {
    date: "06 June 2020",
    nav: 123.8,
    sp500: 116.43,
  },
  {
    date: "07 June 2020",
    nav: 123.06,
    sp500: 116.43,
  },
  {
    date: "08 June 2020",
    nav: 123.23,
    sp500: 117.83,
  },
  {
    date: "09 June 2020",
    nav: 123.05,
    sp500: 116.91,
  },
  {
    date: "10 June 2020",
    nav: 128.04,
    sp500: 116.29,
  },
  {
    date: "11 June 2020",
    nav: 127.81,
    sp500: 109.43,
  },
  {
    date: "12 June 2020",
    nav: 126.91,
    sp500: 110.86,
  },
  {
    date: "13 June 2020",
    nav: 125.64,
    sp500: 110.86,
  },
  {
    date: "14 June 2020",
    nav: 126.5,
    sp500: 110.86,
  },
  {
    date: "15 June 2020",
    nav: 126.88,
    sp500: 111.78,
  },
  {
    date: "16 June 2020",
    nav: 126.08,
    sp500: 113.9,
  },
  {
    date: "17 June 2020",
    nav: 130.43,
    sp500: 113.49,
  },
  {
    date: "18 June 2020",
    nav: 128.46,
    sp500: 113.56,
  },
  {
    date: "19 June 2020",
    nav: 129.2,
    sp500: 112.92,
  },
  {
    date: "20 June 2020",
    nav: 129.12,
    sp500: 112.92,
  },
  {
    date: "21 June 2020",
    nav: 132.13,
    sp500: 112.92,
  },
  {
    date: "22 June 2020",
    nav: 132.54,
    sp500: 113.65,
  },
  {
    date: "23 June 2020",
    nav: 132.95,
    sp500: 114.14,
  },
  {
    date: "24 June 2020",
    nav: 132.62,
    sp500: 111.19,
  },
  {
    date: "25 June 2020",
    nav: 133.13,
    sp500: 112.41,
  },
  {
    date: "26 June 2020",
    nav: 133.54,
    sp500: 109.69,
  },
  {
    date: "27 June 2020",
    nav: 133.03,
    sp500: 109.69,
  },
  {
    date: "28 June 2020",
    nav: 132.39,
    sp500: 109.69,
  },
  {
    date: "29 June 2020",
    nav: 132.14,
    sp500: 111.3,
  },
  {
    date: "30 June 2020",
    nav: 131.89,
    sp500: 113.01,
  },
  {
    date: "01 July 2020",
    nav: 131.7,
    sp500: 113.58,
  },
  {
    date: "02 July 2020",
    nav: 132.72,
    sp500: 114.1,
  },
  {
    date: "03 July 2020",
    nav: 135.42,
    sp500: 114.1,
  },
  {
    date: "04 July 2020",
    nav: 136.97,
    sp500: 114.1,
  },
  {
    date: "05 July 2020",
    nav: 144.64,
    sp500: 114.1,
  },
  {
    date: "06 July 2020",
    nav: 141.95,
    sp500: 115.91,
  },
  {
    date: "07 July 2020",
    nav: 139.18,
    sp500: 114.65,
  },
  {
    date: "08 July 2020",
    nav: 137.47,
    sp500: 115.55,
  },
  {
    date: "09 July 2020",
    nav: 138.37,
    sp500: 114.9,
  },
  {
    date: "10 July 2020",
    nav: 137.62,
    sp500: 116.1,
  },
  {
    date: "11 July 2020",
    nav: 137.87,
    sp500: 116.1,
  },
  {
    date: "12 July 2020",
    nav: 136.73,
    sp500: 116.1,
  },
  {
    date: "13 July 2020",
    nav: 136.3,
    sp500: 115.01,
  },
  {
    date: "14 July 2020",
    nav: 135.49,
    sp500: 116.56,
  },
  {
    date: "15 July 2020",
    nav: 134.25,
    sp500: 117.61,
  },
  {
    date: "16 July 2020",
    nav: 136.1,
    sp500: 117.21,
  },
  {
    date: "17 July 2020",
    nav: 134.72,
    sp500: 117.55,
  },
  {
    date: "18 July 2020",
    nav: 133.76,
    sp500: 117.55,
  },
  {
    date: "19 July 2020",
    nav: 134.36,
    sp500: 117.55,
  },
  {
    date: "20 July 2020",
    nav: 134.92,
    sp500: 118.54,
  },
  {
    date: "21 July 2020",
    nav: 137.7,
    sp500: 118.74,
  },
  {
    date: "22 July 2020",
    nav: 137.29,
    sp500: 119.42,
  },
  {
    date: "23 July 2020",
    nav: 137.88,
    sp500: 117.95,
  },
  {
    date: "24 July 2020",
    nav: 136.68,
    sp500: 117.22,
  },
  {
    date: "25 July 2020",
    nav: 136.63,
    sp500: 117.22,
  },
  {
    date: "26 July 2020",
    nav: 135.01,
    sp500: 117.22,
  },
  {
    date: "27 July 2020",
    nav: 135.07,
    sp500: 118.08,
  },
  {
    date: "28 July 2020",
    nav: 135,
    sp500: 117.32,
  },
  {
    date: "29 July 2020",
    nav: 135.66,
    sp500: 118.78,
  },
  {
    date: "30 July 2020",
    nav: 140.33,
    sp500: 118.33,
  },
  {
    date: "31 July 2020",
    nav: 144.28,
    sp500: 119.24,
  },
  {
    date: "01 August 2020",
    nav: 144.84,
    sp500: 119.24,
  },
  {
    date: "02 August 2020",
    nav: 146.12,
    sp500: 119.24,
  },
  {
    date: "03 August 2020",
    nav: 146.96,
    sp500: 120.1,
  },
  {
    date: "04 August 2020",
    nav: 147.32,
    sp500: 120.53,
  },
  {
    date: "05 August 2020",
    nav: 148.6,
    sp500: 121.3,
  },
  {
    date: "06 August 2020",
    nav: 149.17,
    sp500: 122.08,
  },
  {
    date: "07 August 2020",
    nav: 147.78,
    sp500: 122.16,
  },
  {
    date: "08 August 2020",
    nav: 138.8,
    sp500: 122.16,
  },
  {
    date: "09 August 2020",
    nav: 139.1,
    sp500: 122.16,
  },
  {
    date: "10 August 2020",
    nav: 138.6,
    sp500: 122.5,
  },
  {
    date: "11 August 2020",
    nav: 138.04,
    sp500: 121.52,
  },
  {
    date: "12 August 2020",
    nav: 137.96,
    sp500: 123.22,
  },
  {
    date: "13 August 2020",
    nav: 136.64,
    sp500: 122.97,
  },
  {
    date: "14 August 2020",
    nav: 137.11,
    sp500: 122.95,
  },
  {
    date: "15 August 2020",
    nav: 137.71,
    sp500: 122.95,
  },
  {
    date: "16 August 2020",
    nav: 136.57,
    sp500: 122.95,
  },
  {
    date: "17 August 2020",
    nav: 139.18,
    sp500: 123.28,
  },
  {
    date: "18 August 2020",
    nav: 138.78,
    sp500: 123.56,
  },
  {
    date: "19 August 2020",
    nav: 142.29,
    sp500: 123.02,
  },
  {
    date: "20 August 2020",
    nav: 143.37,
    sp500: 123.41,
  },
  {
    date: "21 August 2020",
    nav: 142.45,
    sp500: 123.83,
  },
  {
    date: "22 August 2020",
    nav: 141.78,
    sp500: 123.83,
  },
  {
    date: "23 August 2020",
    nav: 143.27,
    sp500: 123.83,
  },
  {
    date: "24 August 2020",
    nav: 144.64,
    sp500: 125.08,
  },
  {
    date: "25 August 2020",
    nav: 144.39,
    sp500: 125.53,
  },
  {
    date: "26 August 2020",
    nav: 144,
    sp500: 126.81,
  },
  {
    date: "27 August 2020",
    nav: 143.52,
    sp500: 127.02,
  },
  {
    date: "28 August 2020",
    nav: 144.34,
    sp500: 127.87,
  },
  {
    date: "29 August 2020",
    nav: 150.04,
    sp500: 127.87,
  },
  {
    date: "30 August 2020",
    nav: 152.03,
    sp500: 127.87,
  },
  {
    date: "31 August 2020",
    nav: 147.8,
    sp500: 127.59,
  },
  {
    date: "01 September 2020",
    nav: 150.04,
    sp500: 128.55,
  },
  {
    date: "02 September 2020",
    nav: 151.21,
    sp500: 130.53,
  },
  {
    date: "03 September 2020",
    nav: 148.22,
    sp500: 125.94,
  },
  {
    date: "04 September 2020",
    nav: 146.96,
    sp500: 124.92,
  },
  {
    date: "05 September 2020",
    nav: 144.18,
    sp500: 124.92,
  },
  {
    date: "06 September 2020",
    nav: 142.62,
    sp500: 124.92,
  },
  {
    date: "07 September 2020",
    nav: 142.29,
    sp500: 124.92,
  },
  {
    date: "08 September 2020",
    nav: 142.37,
    sp500: 121.45,
  },
  {
    date: "09 September 2020",
    nav: 138.45,
    sp500: 123.9,
  },
  {
    date: "10 September 2020",
    nav: 140,
    sp500: 121.72,
  },
  {
    date: "11 September 2020",
    nav: 136.32,
    sp500: 121.79,
  },
  {
    date: "12 September 2020",
    nav: 139.82,
    sp500: 121.79,
  },
  {
    date: "13 September 2020",
    nav: 128.96,
    sp500: 121.79,
  },
  {
    date: "14 September 2020",
    nav: 126.91,
    sp500: 123.34,
  },
  {
    date: "15 September 2020",
    nav: 125.83,
    sp500: 123.98,
  },
  {
    date: "16 September 2020",
    nav: 118.88,
    sp500: 123.41,
  },
  {
    date: "17 September 2020",
    nav: 120.53,
    sp500: 122.37,
  },
  {
    date: "18 September 2020",
    nav: 116.68,
    sp500: 121,
  },
  {
    date: "19 September 2020",
    nav: 109.72,
    sp500: 121,
  },
  {
    date: "20 September 2020",
    nav: 107.48,
    sp500: 121,
  },
  {
    date: "21 September 2020",
    nav: 112.7,
    sp500: 119.6,
  },
  {
    date: "22 September 2020",
    nav: 118.44,
    sp500: 120.86,
  },
  {
    date: "23 September 2020",
    nav: 116.68,
    sp500: 117.99,
  },
  {
    date: "24 September 2020",
    nav: 118.32,
    sp500: 118.35,
  },
  {
    date: "25 September 2020",
    nav: 118.23,
    sp500: 120.24,
  },
  {
    date: "26 September 2020",
    nav: 117.34,
    sp500: 120.24,
  },
  {
    date: "27 September 2020",
    nav: 118.58,
    sp500: 120.24,
  },
  {
    date: "28 September 2020",
    nav: 120.2,
    sp500: 122.17,
  },
  {
    date: "29 September 2020",
    nav: 119.43,
    sp500: 121.58,
  },
  {
    date: "30 September 2020",
    nav: 117.99,
    sp500: 122.59,
  },
  {
    date: "01 October 2020",
    nav: 117.5,
    sp500: 123.24,
  },
  {
    date: "02 October 2020",
    nav: 115.7,
    sp500: 122.06,
  },
  {
    date: "03 October 2020",
    nav: 117.05,
    sp500: 122.06,
  },
  {
    date: "04 October 2020",
    nav: 118.02,
    sp500: 122.06,
  },
  {
    date: "05 October 2020",
    nav: 119.71,
    sp500: 124.25,
  },
  {
    date: "06 October 2020",
    nav: 117.99,
    sp500: 122.51,
  },
  {
    date: "07 October 2020",
    nav: 116.88,
    sp500: 124.65,
  },
  {
    date: "08 October 2020",
    nav: 116.19,
    sp500: 125.64,
  },
  {
    date: "09 October 2020",
    nav: 115.19,
    sp500: 126.75,
  },
  {
    date: "10 October 2020",
    nav: 113.81,
    sp500: 126.75,
  },
  {
    date: "11 October 2020",
    nav: 114.14,
    sp500: 126.75,
  },
  {
    date: "12 October 2020",
    nav: 114.59,
    sp500: 128.83,
  },
  {
    date: "13 October 2020",
    nav: 113.64,
    sp500: 128.02,
  },
  {
    date: "14 October 2020",
    nav: 113.21,
    sp500: 127.17,
  },
  {
    date: "15 October 2020",
    nav: 111.52,
    sp500: 126.98,
  },
  {
    date: "16 October 2020",
    nav: 112.83,
    sp500: 126.99,
  },
  {
    date: "17 October 2020",
    nav: 112.02,
    sp500: 126.99,
  },
  {
    date: "18 October 2020",
    nav: 112.41,
    sp500: 126.99,
  },
  {
    date: "19 October 2020",
    nav: 110.61,
    sp500: 124.92,
  },
  {
    date: "20 October 2020",
    nav: 112.73,
    sp500: 125.51,
  },
  {
    date: "21 October 2020",
    nav: 115.13,
    sp500: 125.23,
  },
  {
    date: "22 October 2020",
    nav: 114.17,
    sp500: 125.89,
  },
  {
    date: "23 October 2020",
    nav: 112.34,
    sp500: 126.32,
  },
  {
    date: "24 October 2020",
    nav: 111.16,
    sp500: 126.32,
  },
  {
    date: "25 October 2020",
    nav: 110.64,
    sp500: 126.32,
  },
  {
    date: "26 October 2020",
    nav: 109.56,
    sp500: 123.97,
  },
  {
    date: "27 October 2020",
    nav: 108.82,
    sp500: 123.6,
  },
  {
    date: "28 October 2020",
    nav: 107.52,
    sp500: 119.24,
  },
  {
    date: "29 October 2020",
    nav: 108.82,
    sp500: 120.66,
  },
  {
    date: "30 October 2020",
    nav: 109.07,
    sp500: 119.2,
  },
  {
    date: "31 October 2020",
    nav: 111.14,
    sp500: 119.2,
  },
  {
    date: "01 November 2020",
    nav: 113.68,
    sp500: 119.2,
  },
  {
    date: "02 November 2020",
    nav: 116.6,
    sp500: 120.67,
  },
  {
    date: "03 November 2020",
    nav: 119.66,
    sp500: 122.81,
  },
  {
    date: "04 November 2020",
    nav: 119.09,
    sp500: 125.52,
  },
  {
    date: "05 November 2020",
    nav: 119.29,
    sp500: 127.96,
  },
  {
    date: "06 November 2020",
    nav: 123.19,
    sp500: 127.93,
  },
  {
    date: "07 November 2020",
    nav: 121.57,
    sp500: 127.93,
  },
  {
    date: "08 November 2020",
    nav: 119.12,
    sp500: 127.93,
  },
  {
    date: "09 November 2020",
    nav: 117.99,
    sp500: 129.42,
  },
  {
    date: "10 November 2020",
    nav: 117.09,
    sp500: 129.24,
  },
  {
    date: "11 November 2020",
    nav: 117.81,
    sp500: 130.23,
  },
  {
    date: "12 November 2020",
    nav: 117.49,
    sp500: 128.93,
  },
  {
    date: "13 November 2020",
    nav: 119.41,
    sp500: 130.69,
  },
  {
    date: "14 November 2020",
    nav: 118.33,
    sp500: 130.69,
  },
  {
    date: "15 November 2020",
    nav: 122.41,
    sp500: 130.69,
  },
  {
    date: "16 November 2020",
    nav: 122.74,
    sp500: 132.21,
  },
  {
    date: "17 November 2020",
    nav: 124.03,
    sp500: 131.57,
  },
  {
    date: "18 November 2020",
    nav: 123.64,
    sp500: 130.05,
  },
  {
    date: "19 November 2020",
    nav: 121.84,
    sp500: 130.57,
  },
  {
    date: "20 November 2020",
    nav: 121.72,
    sp500: 129.68,
  },
  {
    date: "21 November 2020",
    nav: 120.03,
    sp500: 129.68,
  },
  {
    date: "22 November 2020",
    nav: 121.17,
    sp500: 129.68,
  },
  {
    date: "23 November 2020",
    nav: 121.01,
    sp500: 130.41,
  },
  {
    date: "24 November 2020",
    nav: 126.39,
    sp500: 132.52,
  },
  {
    date: "25 November 2020",
    nav: 125.76,
    sp500: 132.31,
  },
  {
    date: "26 November 2020",
    nav: 125.16,
    sp500: 132.31,
  },
  {
    date: "27 November 2020",
    nav: 124.61,
    sp500: 132.63,
  },
  {
    date: "28 November 2020",
    nav: 127.73,
    sp500: 132.63,
  },
  {
    date: "29 November 2020",
    nav: 125.6,
    sp500: 132.63,
  },
  {
    date: "30 November 2020",
    nav: 124.9,
    sp500: 132.02,
  },
  {
    date: "01 December 2020",
    nav: 124.45,
    sp500: 133.5,
  },
  {
    date: "02 December 2020",
    nav: 123.88,
    sp500: 133.74,
  },
  {
    date: "03 December 2020",
    nav: 122.49,
    sp500: 133.66,
  },
  {
    date: "04 December 2020",
    nav: 122.46,
    sp500: 134.84,
  },
  {
    date: "05 December 2020",
    nav: 123.59,
    sp500: 134.84,
  },
  {
    date: "06 December 2020",
    nav: 124.86,
    sp500: 134.84,
  },
  {
    date: "07 December 2020",
    nav: 125.52,
    sp500: 134.58,
  },
  {
    date: "08 December 2020",
    nav: 123.56,
    sp500: 134.95,
  },
  {
    date: "09 December 2020",
    nav: 124,
    sp500: 133.88,
  },
  {
    date: "10 December 2020",
    nav: 123.32,
    sp500: 133.71,
  },
  {
    date: "11 December 2020",
    nav: 122.65,
    sp500: 133.54,
  },
  {
    date: "12 December 2020",
    nav: 122.25,
    sp500: 133.54,
  },
  {
    date: "13 December 2020",
    nav: 123.39,
    sp500: 133.54,
  },
  {
    date: "14 December 2020",
    nav: 123.06,
    sp500: 132.96,
  },
  {
    date: "15 December 2020",
    nav: 123.71,
    sp500: 134.68,
  },
  {
    date: "16 December 2020",
    nav: 124.78,
    sp500: 134.92,
  },
  {
    date: "17 December 2020",
    nav: 124.45,
    sp500: 135.69,
  },
  {
    date: "18 December 2020",
    nav: 125.52,
    sp500: 135.22,
  },
  {
    date: "19 December 2020",
    nav: 125.15,
    sp500: 135.22,
  },
  {
    date: "20 December 2020",
    nav: 125.27,
    sp500: 135.22,
  },
  {
    date: "21 December 2020",
    nav: 126.42,
    sp500: 134.69,
  },
  {
    date: "22 December 2020",
    nav: 126.41,
    sp500: 134.41,
  },
  {
    date: "23 December 2020",
    nav: 125.52,
    sp500: 134.51,
  },
  {
    date: "24 December 2020",
    nav: 125.19,
    sp500: 134.98,
  },
  {
    date: "25 December 2020",
    nav: 128.37,
    sp500: 134.98,
  },
  {
    date: "26 December 2020",
    nav: 129.77,
    sp500: 134.98,
  },
  {
    date: "27 December 2020",
    nav: 130.27,
    sp500: 134.98,
  },
  {
    date: "28 December 2020",
    nav: 130.43,
    sp500: 136.16,
  },
  {
    date: "29 December 2020",
    nav: 129.81,
    sp500: 135.86,
  },
  {
    date: "30 December 2020",
    nav: 129.77,
    sp500: 136.04,
  },
  {
    date: "31 December 2020",
    nav: 129.57,
    sp500: 136.92,
  },
  {
    date: "01 January 2021",
    nav: 128.55,
    sp500: 136.92,
  },
  {
    date: "02 January 2021",
    nav: 131.4,
    sp500: 136.92,
  },
  {
    date: "03 January 2021",
    nav: 132.15,
    sp500: 136.92,
  },
  {
    date: "04 January 2021",
    nav: 130.81,
    sp500: 134.9,
  },
  {
    date: "05 January 2021",
    nav: 130.02,
    sp500: 135.85,
  },
  {
    date: "06 January 2021",
    nav: 128.67,
    sp500: 136.63,
  },
  {
    date: "07 January 2021",
    nav: 128.58,
    sp500: 138.66,
  },
  {
    date: "08 January 2021",
    nav: 128.3,
    sp500: 139.42,
  },
  {
    date: "09 January 2021",
    nav: 127.73,
    sp500: 139.42,
  },
  {
    date: "10 January 2021",
    nav: 127.16,
    sp500: 139.42,
  },
  {
    date: "11 January 2021",
    nav: 125.55,
    sp500: 138.5,
  },
  {
    date: "12 January 2021",
    nav: 123.84,
    sp500: 138.56,
  },
  {
    date: "13 January 2021",
    nav: 125.35,
    sp500: 138.88,
  },
  {
    date: "14 January 2021",
    nav: 125.27,
    sp500: 138.36,
  },
  {
    date: "15 January 2021",
    nav: 129.28,
    sp500: 137.36,
  },
  {
    date: "16 January 2021",
    nav: 129.76,
    sp500: 137.36,
  },
  {
    date: "17 January 2021",
    nav: 129.77,
    sp500: 137.36,
  },
  {
    date: "18 January 2021",
    nav: 128.24,
    sp500: 137.36,
  },
  {
    date: "19 January 2021",
    nav: 128.14,
    sp500: 138.48,
  },
  {
    date: "20 January 2021",
    nav: 127.73,
    sp500: 140.41,
  },
  {
    date: "21 January 2021",
    nav: 124.62,
    sp500: 140.45,
  },
  {
    date: "22 January 2021",
    nav: 124.29,
    sp500: 140.03,
  },
  {
    date: "23 January 2021",
    nav: 122.39,
    sp500: 140.03,
  },
  {
    date: "24 January 2021",
    nav: 123.79,
    sp500: 140.03,
  },
  {
    date: "25 January 2021",
    nav: 125.51,
    sp500: 140.54,
  },
  {
    date: "26 January 2021",
    nav: 125.02,
    sp500: 140.33,
  },
  {
    date: "27 January 2021",
    nav: 123.87,
    sp500: 136.72,
  },
  {
    date: "28 January 2021",
    nav: 123.57,
    sp500: 138.06,
  },
  {
    date: "29 January 2021",
    nav: 123.47,
    sp500: 135.39,
  },
  {
    date: "30 January 2021",
    nav: 123.71,
    sp500: 135.39,
  },
  {
    date: "31 January 2021",
    nav: 123.31,
    sp500: 135.39,
  },
  {
    date: "01 February 2021",
    nav: 123.31,
    sp500: 137.57,
  },
  {
    date: "02 February 2021",
    nav: 122.55,
    sp500: 139.48,
  },
  {
    date: "03 February 2021",
    nav: 122.97,
    sp500: 139.62,
  },
  {
    date: "04 February 2021",
    nav: 122.29,
    sp500: 141.13,
  },
  {
    date: "05 February 2021",
    nav: 122.73,
    sp500: 141.68,
  },
  {
    date: "06 February 2021",
    nav: 122.04,
    sp500: 141.68,
  },
  {
    date: "07 February 2021",
    nav: 121.91,
    sp500: 141.68,
  },
  {
    date: "08 February 2021",
    nav: 121.84,
    sp500: 142.73,
  },
  {
    date: "09 February 2021",
    nav: 121.7,
    sp500: 142.57,
  },
  {
    date: "10 February 2021",
    nav: 123.6,
    sp500: 142.52,
  },
  {
    date: "11 February 2021",
    nav: 124.61,
    sp500: 142.76,
  },
  {
    date: "12 February 2021",
    nav: 127.97,
    sp500: 143.43,
  },
  {
    date: "13 February 2021",
    nav: 135.15,
    sp500: 143.43,
  },
  {
    date: "14 February 2021",
    nav: 133.63,
    sp500: 143.43,
  },
  {
    date: "15 February 2021",
    nav: 134.03,
    sp500: 143.43,
  },
  {
    date: "16 February 2021",
    nav: 131.74,
    sp500: 143.35,
  },
  {
    date: "17 February 2021",
    nav: 131.74,
    sp500: 143.31,
  },
  {
    date: "18 February 2021",
    nav: 132.35,
    sp500: 142.67,
  },
  {
    date: "19 February 2021",
    nav: 132.56,
    sp500: 142.41,
  },
  {
    date: "20 February 2021",
    nav: 133.05,
    sp500: 142.41,
  },
  {
    date: "21 February 2021",
    nav: 133.04,
    sp500: 142.41,
  },
  {
    date: "22 February 2021",
    nav: 132.48,
    sp500: 141.31,
  },
  {
    date: "23 February 2021",
    nav: 132.64,
    sp500: 141.48,
  },
  {
    date: "24 February 2021",
    nav: 132.22,
    sp500: 143.09,
  },
  {
    date: "25 February 2021",
    nav: 131.63,
    sp500: 139.59,
  },
  {
    date: "26 February 2021",
    nav: 131.42,
    sp500: 138.92,
  },
  {
    date: "27 February 2021",
    nav: 131.41,
    sp500: 138.92,
  },
  {
    date: "28 February 2021",
    nav: 131.98,
    sp500: 138.92,
  },
  {
    date: "01 March 2021",
    nav: 131.81,
    sp500: 142.23,
  },
  {
    date: "02 March 2021",
    nav: 131.49,
    sp500: 141.08,
  },
  {
    date: "03 March 2021",
    nav: 132.8,
    sp500: 139.24,
  },
  {
    date: "04 March 2021",
    nav: 132.39,
    sp500: 137.37,
  },
  {
    date: "05 March 2021",
    nav: 131.86,
    sp500: 140.05,
  },
  {
    date: "06 March 2021",
    nav: 132.22,
    sp500: 140.05,
  },
  {
    date: "07 March 2021",
    nav: 132.55,
    sp500: 140.05,
  },
  {
    date: "08 March 2021",
    nav: 134.91,
    sp500: 139.3,
  },
  {
    date: "09 March 2021",
    nav: 135.14,
    sp500: 141.27,
  },
  {
    date: "10 March 2021",
    nav: 134.4,
    sp500: 142.12,
  },
  {
    date: "11 March 2021",
    nav: 135.83,
    sp500: 143.6,
  },
  {
    date: "12 March 2021",
    nav: 135.83,
    sp500: 143.74,
  },
  {
    date: "13 March 2021",
    nav: 137.55,
    sp500: 143.74,
  },
  {
    date: "14 March 2021",
    nav: 138.94,
    sp500: 143.74,
  },
  {
    date: "15 March 2021",
    nav: 139.8,
    sp500: 144.68,
  },
  {
    date: "16 March 2021",
    nav: 140.9,
    sp500: 144.45,
  },
  {
    date: "17 March 2021",
    nav: 140.54,
    sp500: 144.86,
  },
  {
    date: "18 March 2021",
    nav: 140.62,
    sp500: 142.73,
  },
  {
    date: "19 March 2021",
    nav: 140.82,
    sp500: 142.64,
  },
  {
    date: "20 March 2021",
    nav: 140.41,
    sp500: 142.64,
  },
  {
    date: "21 March 2021",
    nav: 142.05,
    sp500: 142.64,
  },
  {
    date: "22 March 2021",
    nav: 142.85,
    sp500: 143.64,
  },
  {
    date: "23 March 2021",
    nav: 141.64,
    sp500: 142.55,
  },
  {
    date: "24 March 2021",
    nav: 142.05,
    sp500: 141.77,
  },
  {
    date: "25 March 2021",
    nav: 139.27,
    sp500: 142.51,
  },
  {
    date: "26 March 2021",
    nav: 140.37,
    sp500: 144.88,
  },
  {
    date: "27 March 2021",
    nav: 142.04,
    sp500: 144.88,
  },
  {
    date: "28 March 2021",
    nav: 142.44,
    sp500: 144.88,
  },
  {
    date: "29 March 2021",
    nav: 141.64,
    sp500: 144.75,
  },
  {
    date: "30 March 2021",
    nav: 140.73,
    sp500: 144.3,
  },
  {
    date: "31 March 2021",
    nav: 141.48,
    sp500: 144.82,
  },
  {
    date: "01 April 2021",
    nav: 141.08,
    sp500: 146.53,
  },
  {
    date: "02 April 2021",
    nav: 142.21,
    sp500: 146.53,
  },
  {
    date: "03 April 2021",
    nav: 150.07,
    sp500: 146.53,
  },
  {
    date: "04 April 2021",
    nav: 153.91,
    sp500: 146.53,
  },
  {
    date: "05 April 2021",
    nav: 161.69,
    sp500: 148.65,
  },
  {
    date: "06 April 2021",
    nav: 162.51,
    sp500: 148.5,
  },
  {
    date: "07 April 2021",
    nav: 158.39,
    sp500: 148.72,
  },
  {
    date: "08 April 2021",
    nav: 155.96,
    sp500: 149.35,
  },
  {
    date: "09 April 2021",
    nav: 158.66,
    sp500: 150.5,
  },
  {
    date: "10 April 2021",
    nav: 155.88,
    sp500: 150.5,
  },
  {
    date: "11 April 2021",
    nav: 155.55,
    sp500: 150.5,
  },
  {
    date: "12 April 2021",
    nav: 154.32,
    sp500: 150.47,
  },
  {
    date: "13 April 2021",
    nav: 155.06,
    sp500: 150.97,
  },
  {
    date: "14 April 2021",
    nav: 156.78,
    sp500: 150.35,
  },
  {
    date: "15 April 2021",
    nav: 163.73,
    sp500: 152.02,
  },
  {
    date: "16 April 2021",
    nav: 162.04,
    sp500: 152.57,
  },
  {
    date: "17 April 2021",
    nav: 159.23,
    sp500: 152.57,
  },
  {
    date: "18 April 2021",
    nav: 155.24,
    sp500: 152.57,
  },
  {
    date: "19 April 2021",
    nav: 154.53,
    sp500: 151.76,
  },
  {
    date: "20 April 2021",
    nav: 156.77,
    sp500: 150.73,
  },
  {
    date: "21 April 2021",
    nav: 158.33,
    sp500: 152.13,
  },
  {
    date: "22 April 2021",
    nav: 159.88,
    sp500: 150.73,
  },
  {
    date: "23 April 2021",
    nav: 162.75,
    sp500: 152.38,
  },
  {
    date: "24 April 2021",
    nav: 163.9,
    sp500: 152.38,
  },
  {
    date: "25 April 2021",
    nav: 164.17,
    sp500: 152.38,
  },
  {
    date: "26 April 2021",
    nav: 163.73,
    sp500: 152.65,
  },
  {
    date: "27 April 2021",
    nav: 163.73,
    sp500: 152.61,
  },
  {
    date: "28 April 2021",
    nav: 162.34,
    sp500: 152.49,
  },
  {
    date: "29 April 2021",
    nav: 164.96,
    sp500: 153.52,
  },
  {
    date: "30 April 2021",
    nav: 164.95,
    sp500: 152.41,
  },
  {
    date: "01 May 2021",
    nav: 165.77,
    sp500: 152.41,
  },
  {
    date: "02 May 2021",
    nav: 164.96,
    sp500: 152.41,
  },
  {
    date: "03 May 2021",
    nav: 166.93,
    sp500: 152.83,
  },
  {
    date: "04 May 2021",
    nav: 166.66,
    sp500: 151.81,
  },
  {
    date: "05 May 2021",
    nav: 166.52,
    sp500: 151.92,
  },
  {
    date: "06 May 2021",
    nav: 168.89,
    sp500: 153.16,
  },
  {
    date: "07 May 2021",
    nav: 166.6,
    sp500: 154.29,
  },
  {
    date: "08 May 2021",
    nav: 167.97,
    sp500: 154.29,
  },
  {
    date: "09 May 2021",
    nav: 167.58,
    sp500: 154.29,
  },
  {
    date: "10 May 2021",
    nav: 166.6,
    sp500: 152.68,
  },
  {
    date: "11 May 2021",
    nav: 166.8,
    sp500: 151.35,
  },
  {
    date: "12 May 2021",
    nav: 167.81,
    sp500: 148.11,
  },
  {
    date: "13 May 2021",
    nav: 167.83,
    sp500: 149.91,
  },
  {
    date: "14 May 2021",
    nav: 166.72,
    sp500: 152.15,
  },
  {
    date: "15 May 2021",
    nav: 166.35,
    sp500: 152.15,
  },
  {
    date: "16 May 2021",
    nav: 166.44,
    sp500: 152.15,
  },
  {
    date: "17 May 2021",
    nav: 166.79,
    sp500: 151.76,
  },
  {
    date: "18 May 2021",
    nav: 167.99,
    sp500: 150.47,
  },
  {
    date: "19 May 2021",
    nav: 167.99,
    sp500: 150.03,
  },
  {
    date: "20 May 2021",
    nav: 167.98,
    sp500: 151.61,
  },
  {
    date: "21 May 2021",
    nav: 167.9,
    sp500: 151.49,
  },
  {
    date: "22 May 2021",
    nav: 166.59,
    sp500: 151.49,
  },
  {
    date: "23 May 2021",
    nav: 168.15,
    sp500: 151.49,
  },
  {
    date: "24 May 2021",
    nav: 167.42,
    sp500: 152.99,
  },
  {
    date: "25 May 2021",
    nav: 167.99,
    sp500: 152.67,
  },
  {
    date: "26 May 2021",
    nav: 167.83,
    sp500: 152.95,
  },
  {
    date: "27 May 2021",
    nav: 168.07,
    sp500: 153.13,
  },
  {
    date: "28 May 2021",
    nav: 167.83,
    sp500: 153.25,
  },
  {
    date: "29 May 2021",
    nav: 173.51,
    sp500: 153.25,
  },
  {
    date: "30 May 2021",
    nav: 170.67,
    sp500: 153.25,
  },
  {
    date: "31 May 2021",
    nav: 170.26,
    sp500: 153.25,
  },
  {
    date: "01 June 2021",
    nav: 170.04,
    sp500: 153.17,
  },
  {
    date: "02 June 2021",
    nav: 169.46,
    sp500: 153.39,
  },
  {
    date: "03 June 2021",
    nav: 168.8,
    sp500: 152.84,
  },
  {
    date: "04 June 2021",
    nav: 171.5,
    sp500: 154.19,
  },
  {
    date: "05 June 2021",
    nav: 171.67,
    sp500: 154.19,
  },
  {
    date: "06 June 2021",
    nav: 170.3,
    sp500: 154.19,
  },
  {
    date: "07 June 2021",
    nav: 168.64,
    sp500: 154.07,
  },
  {
    date: "08 June 2021",
    nav: 166.8,
    sp500: 154.09,
  },
  {
    date: "09 June 2021",
    nav: 171.92,
    sp500: 153.81,
  },
  {
    date: "10 June 2021",
    nav: 172.25,
    sp500: 154.53,
  },
  {
    date: "11 June 2021",
    nav: 169.05,
    sp500: 154.83,
  },
  {
    date: "12 June 2021",
    nav: 172.73,
    sp500: 154.83,
  },
  {
    date: "13 June 2021",
    nav: 173.31,
    sp500: 154.83,
  },
  {
    date: "14 June 2021",
    nav: 179.23,
    sp500: 155.11,
  },
  {
    date: "15 June 2021",
    nav: 178.06,
    sp500: 154.8,
  },
  {
    date: "16 June 2021",
    nav: 182.52,
    sp500: 153.96,
  },
  {
    date: "17 June 2021",
    nav: 185.01,
    sp500: 153.9,
  },
  {
    date: "18 June 2021",
    nav: 183.95,
    sp500: 151.88,
  },
  {
    date: "19 June 2021",
    nav: 182.23,
    sp500: 151.88,
  },
  {
    date: "20 June 2021",
    nav: 177.54,
    sp500: 151.88,
  },
  {
    date: "21 June 2021",
    nav: 178.87,
    sp500: 154,
  },
  {
    date: "22 June 2021",
    nav: 175.11,
    sp500: 154.79,
  },
  {
    date: "23 June 2021",
    nav: 177.22,
    sp500: 154.62,
  },
  {
    date: "24 June 2021",
    nav: 176.83,
    sp500: 155.52,
  },
  {
    date: "25 June 2021",
    nav: 179.17,
    sp500: 156.04,
  },
  {
    date: "26 June 2021",
    nav: 182.77,
    sp500: 156.04,
  },
  {
    date: "27 June 2021",
    nav: 184.19,
    sp500: 156.04,
  },
  {
    date: "28 June 2021",
    nav: 190.74,
    sp500: 156.4,
  },
  {
    date: "29 June 2021",
    nav: 193.52,
    sp500: 156.45,
  },
  {
    date: "30 June 2021",
    nav: 194.26,
    sp500: 156.65,
  },
  {
    date: "01 July 2021",
    nav: 192.21,
    sp500: 157.47,
  },
  {
    date: "02 July 2021",
    nav: 190.69,
    sp500: 158.65,
  },
  {
    date: "03 July 2021",
    nav: 190.57,
    sp500: 158.65,
  },
  {
    date: "04 July 2021",
    nav: 193.07,
    sp500: 158.65,
  },
  {
    date: "05 July 2021",
    nav: 193.64,
    sp500: 158.65,
  },
  {
    date: "06 July 2021",
    nav: 194.01,
    sp500: 158.33,
  },
  {
    date: "07 July 2021",
    nav: 194.42,
    sp500: 158.86,
  },
  {
    date: "08 July 2021",
    nav: 194.28,
    sp500: 157.5,
  },
  {
    date: "09 July 2021",
    nav: 194.42,
    sp500: 159.28,
  },
  {
    date: "10 July 2021",
    nav: 193.82,
    sp500: 159.28,
  },
  {
    date: "11 July 2021",
    nav: 193.85,
    sp500: 159.28,
  },
  {
    date: "12 July 2021",
    nav: 195.23,
    sp500: 159.83,
  },
  {
    date: "13 July 2021",
    nav: 196.47,
    sp500: 159.27,
  },
  {
    date: "14 July 2021",
    nav: 198.35,
    sp500: 159.45,
  },
  {
    date: "15 July 2021",
    nav: 199.04,
    sp500: 158.93,
  },
  {
    date: "16 July 2021",
    nav: 199.66,
    sp500: 157.73,
  },
  {
    date: "17 July 2021",
    nav: 200.6,
    sp500: 157.73,
  },
  {
    date: "18 July 2021",
    nav: 204.69,
    sp500: 157.73,
  },
  {
    date: "19 July 2021",
    nav: 206.28,
    sp500: 155.23,
  },
  {
    date: "20 July 2021",
    nav: 209.04,
    sp500: 157.58,
  },
  {
    date: "21 July 2021",
    nav: 212.92,
    sp500: 158.88,
  },
  {
    date: "22 July 2021",
    nav: 214.88,
    sp500: 159.2,
  },
  {
    date: "23 July 2021",
    nav: 215.37,
    sp500: 160.82,
  },
  {
    date: "24 July 2021",
    nav: 216.93,
    sp500: 160.82,
  },
  {
    date: "25 July 2021",
    nav: 219.54,
    sp500: 160.82,
  },
  {
    date: "26 July 2021",
    nav: 219.65,
    sp500: 161.2,
  },
  {
    date: "27 July 2021",
    nav: 219.38,
    sp500: 160.44,
  },
  {
    date: "28 July 2021",
    nav: 218.64,
    sp500: 160.41,
  },
  {
    date: "29 July 2021",
    nav: 217.49,
    sp500: 161.09,
  },
  {
    date: "30 July 2021",
    nav: 217.42,
    sp500: 160.22,
  },
  {
    date: "31 July 2021",
    nav: 219.01,
    sp500: 160.22,
  },
  {
    date: "01 August 2021",
    nav: 221.67,
    sp500: 160.22,
  },
  {
    date: "02 August 2021",
    nav: 221.1,
    sp500: 159.92,
  },
  {
    date: "03 August 2021",
    nav: 219.95,
    sp500: 161.23,
  },
  {
    date: "04 August 2021",
    nav: 218.89,
    sp500: 160.49,
  },
  {
    date: "05 August 2021",
    nav: 219.05,
    sp500: 161.45,
  },
  {
    date: "06 August 2021",
    nav: 217.49,
    sp500: 161.72,
  },
  {
    date: "07 August 2021",
    nav: 217.16,
    sp500: 161.72,
  },
  {
    date: "08 August 2021",
    nav: 215.86,
    sp500: 161.72,
  },
  {
    date: "09 August 2021",
    nav: 215.07,
    sp500: 161.57,
  },
  {
    date: "10 August 2021",
    nav: 213.07,
    sp500: 161.73,
  },
  {
    date: "11 August 2021",
    nav: 212.29,
    sp500: 162.13,
  },
  {
    date: "12 August 2021",
    nav: 217.66,
    sp500: 162.61,
  },
  {
    date: "13 August 2021",
    nav: 217.98,
    sp500: 162.87,
  },
  {
    date: "14 August 2021",
    nav: 219.14,
    sp500: 162.87,
  },
  {
    date: "15 August 2021",
    nav: 214.49,
    sp500: 162.87,
  },
  {
    date: "16 August 2021",
    nav: 216.52,
    sp500: 163.29,
  },
  {
    date: "17 August 2021",
    nav: 210.87,
    sp500: 162.14,
  },
  {
    date: "18 August 2021",
    nav: 208.33,
    sp500: 160.4,
  },
  {
    date: "19 August 2021",
    nav: 206.29,
    sp500: 160.6,
  },
  {
    date: "20 August 2021",
    nav: 204.8,
    sp500: 161.91,
  },
  {
    date: "21 August 2021",
    nav: 207.67,
    sp500: 161.91,
  },
  {
    date: "22 August 2021",
    nav: 209.25,
    sp500: 161.91,
  },
  {
    date: "23 August 2021",
    nav: 208.78,
    sp500: 163.29,
  },
  {
    date: "24 August 2021",
    nav: 208.76,
    sp500: 163.53,
  },
  {
    date: "25 August 2021",
    nav: 206.36,
    sp500: 163.9,
  },
  {
    date: "26 August 2021",
    nav: 206.12,
    sp500: 162.94,
  },
  {
    date: "27 August 2021",
    nav: 204.97,
    sp500: 164.38,
  },
  {
    date: "28 August 2021",
    nav: 207.42,
    sp500: 164.38,
  },
  {
    date: "29 August 2021",
    nav: 206.08,
    sp500: 164.38,
  },
  {
    date: "30 August 2021",
    nav: 205.59,
    sp500: 165.08,
  },
  {
    date: "31 August 2021",
    nav: 212.18,
    sp500: 164.86,
  },
  {
    date: "01 September 2021",
    nav: 215.38,
    sp500: 164.91,
  },
  {
    date: "02 September 2021",
    nav: 214.5,
    sp500: 165.38,
  },
  {
    date: "03 September 2021",
    nav: 214.8,
    sp500: 165.33,
  },
  {
    date: "04 September 2021",
    nav: 211.21,
    sp500: 165.33,
  },
  {
    date: "05 September 2021",
    nav: 211.99,
    sp500: 165.33,
  },
  {
    date: "06 September 2021",
    nav: 206.76,
    sp500: 165.33,
  },
  {
    date: "07 September 2021",
    nav: 210.11,
    sp500: 164.76,
  },
  {
    date: "08 September 2021",
    nav: 209.35,
    sp500: 164.55,
  },
  {
    date: "09 September 2021",
    nav: 211.62,
    sp500: 163.79,
  },
  {
    date: "10 September 2021",
    nav: 222.9,
    sp500: 162.52,
  },
  {
    date: "11 September 2021",
    nav: 229.14,
    sp500: 162.52,
  },
  {
    date: "12 September 2021",
    nav: 232.39,
    sp500: 162.52,
  },
  {
    date: "13 September 2021",
    nav: 237.14,
    sp500: 162.89,
  },
  {
    date: "14 September 2021",
    nav: 239.35,
    sp500: 161.96,
  },
  {
    date: "15 September 2021",
    nav: 248.85,
    sp500: 163.33,
  },
  {
    date: "16 September 2021",
    nav: 260.13,
    sp500: 163.08,
  },
  {
    date: "17 September 2021",
    nav: 226.42,
    sp500: 161.59,
  },
  {
    date: "18 September 2021",
    nav: 213.94,
    sp500: 161.59,
  },
  {
    date: "19 September 2021",
    nav: 213.55,
    sp500: 161.59,
  },
  {
    date: "20 September 2021",
    nav: 217.93,
    sp500: 158.85,
  },
  {
    date: "21 September 2021",
    nav: 217.1,
    sp500: 158.72,
  },
  {
    date: "22 September 2021",
    nav: 221.46,
    sp500: 160.23,
  },
  {
    date: "23 September 2021",
    nav: 237.7,
    sp500: 162.17,
  },
  {
    date: "24 September 2021",
    nav: 241.67,
    sp500: 162.41,
  },
  {
    date: "25 September 2021",
    nav: 248.59,
    sp500: 162.41,
  },
  {
    date: "26 September 2021",
    nav: 258.57,
    sp500: 162.41,
  },
  {
    date: "27 September 2021",
    nav: 260.94,
    sp500: 161.96,
  },
  {
    date: "28 September 2021",
    nav: 271.97,
    sp500: 158.66,
  },
  {
    date: "29 September 2021",
    nav: 281.17,
    sp500: 158.91,
  },
  {
    date: "30 September 2021",
    nav: 281.32,
    sp500: 157.02,
  },
  {
    date: "01 October 2021",
    nav: 278.67,
    sp500: 158.82,
  },
  {
    date: "02 October 2021",
    nav: 285.49,
    sp500: 158.82,
  },
  {
    date: "03 October 2021",
    nav: 287.9,
    sp500: 158.82,
  },
  {
    date: "04 October 2021",
    nav: 286.72,
    sp500: 156.76,
  },
  {
    date: "05 October 2021",
    nav: 285.48,
    sp500: 158.41,
  },
  {
    date: "06 October 2021",
    nav: 292.9,
    sp500: 159.06,
  },
  {
    date: "07 October 2021",
    nav: 290.2,
    sp500: 160.38,
  },
  {
    date: "08 October 2021",
    nav: 282.12,
    sp500: 160.07,
  },
  {
    date: "09 October 2021",
    nav: 280.77,
    sp500: 160.07,
  },
  {
    date: "10 October 2021",
    nav: 283.65,
    sp500: 160.07,
  },
  {
    date: "11 October 2021",
    nav: 281.67,
    sp500: 158.97,
  },
  {
    date: "12 October 2021",
    nav: 277.73,
    sp500: 158.59,
  },
  {
    date: "13 October 2021",
    nav: 274.58,
    sp500: 159.07,
  },
  {
    date: "14 October 2021",
    nav: 273.3,
    sp500: 161.78,
  },
  {
    date: "15 October 2021",
    nav: 279.25,
    sp500: 162.99,
  },
  {
    date: "16 October 2021",
    nav: 274.31,
    sp500: 162.99,
  },
  {
    date: "17 October 2021",
    nav: 284.7,
    sp500: 162.99,
  },
  {
    date: "18 October 2021",
    nav: 286.29,
    sp500: 163.54,
  },
  {
    date: "19 October 2021",
    nav: 277.7,
    sp500: 164.75,
  },
  {
    date: "20 October 2021",
    nav: 282.83,
    sp500: 165.35,
  },
  {
    date: "21 October 2021",
    nav: 285.71,
    sp500: 165.85,
  },
  {
    date: "22 October 2021",
    nav: 286.44,
    sp500: 165.67,
  },
  {
    date: "23 October 2021",
    nav: 288.6,
    sp500: 165.67,
  },
  {
    date: "24 October 2021",
    nav: 286.11,
    sp500: 165.67,
  },
  {
    date: "25 October 2021",
    nav: 289.61,
    sp500: 166.46,
  },
  {
    date: "26 October 2021",
    nav: 280.59,
    sp500: 166.76,
  },
  {
    date: "27 October 2021",
    nav: 277.43,
    sp500: 165.92,
  },
  {
    date: "28 October 2021",
    nav: 268.16,
    sp500: 167.55,
  },
  {
    date: "29 October 2021",
    nav: 259.63,
    sp500: 167.88,
  },
  {
    date: "30 October 2021",
    nav: 264.05,
    sp500: 167.88,
  },
  {
    date: "31 October 2021",
    nav: 273.24,
    sp500: 167.88,
  },
  {
    date: "01 November 2021",
    nav: 271.14,
    sp500: 168.18,
  },
  {
    date: "02 November 2021",
    nav: 271.09,
    sp500: 168.8,
  },
  {
    date: "03 November 2021",
    nav: 271.01,
    sp500: 169.89,
  },
  {
    date: "04 November 2021",
    nav: 270.56,
    sp500: 170.6,
  },
  {
    date: "05 November 2021",
    nav: 272.98,
    sp500: 171.23,
  },
  {
    date: "06 November 2021",
    nav: 273.02,
    sp500: 171.23,
  },
  {
    date: "07 November 2021",
    nav: 273.56,
    sp500: 171.23,
  },
  {
    date: "08 November 2021",
    nav: 273.81,
    sp500: 171.39,
  },
  {
    date: "09 November 2021",
    nav: 273.89,
    sp500: 170.79,
  },
  {
    date: "10 November 2021",
    nav: 273.51,
    sp500: 169.38,
  },
  {
    date: "11 November 2021",
    nav: 273.28,
    sp500: 169.48,
  },
  {
    date: "12 November 2021",
    nav: 272.99,
    sp500: 170.7,
  },
  {
    date: "13 November 2021",
    nav: 270.87,
    sp500: 170.7,
  },
  {
    date: "14 November 2021",
    nav: 271.66,
    sp500: 170.7,
  },
  {
    date: "15 November 2021",
    nav: 271.14,
    sp500: 170.7,
  },
  {
    date: "16 November 2021",
    nav: 271.88,
    sp500: 171.36,
  },
  {
    date: "17 November 2021",
    nav: 271.59,
    sp500: 170.91,
  },
  {
    date: "18 November 2021",
    nav: 272.19,
    sp500: 171.49,
  },
  {
    date: "19 November 2021",
    nav: 272.27,
    sp500: 171.25,
  },
  {
    date: "20 November 2021",
    nav: 272.33,
    sp500: 171.25,
  },
  {
    date: "21 November 2021",
    nav: 272.18,
    sp500: 171.25,
  },
  {
    date: "22 November 2021",
    nav: 273.36,
    sp500: 170.7,
  },
  {
    date: "23 November 2021",
    nav: 274.19,
    sp500: 170.99,
  },
  {
    date: "24 November 2021",
    nav: 274.94,
    sp500: 171.38,
  },
  {
    date: "25 November 2021",
    nav: 275.28,
    sp500: 171.38,
  },
  {
    date: "26 November 2021",
    nav: 278.97,
    sp500: 167.48,
  },
  {
    date: "27 November 2021",
    nav: 279.61,
    sp500: 167.48,
  },
  {
    date: "28 November 2021",
    nav: 278.51,
    sp500: 167.48,
  },
  {
    date: "29 November 2021",
    nav: 279.14,
    sp500: 169.69,
  },
  {
    date: "30 November 2021",
    nav: 279.34,
    sp500: 166.48,
  },
  {
    date: "01 December 2021",
    nav: 278.89,
    sp500: 164.51,
  },
  {
    date: "02 December 2021",
    nav: 279.15,
    sp500: 166.84,
  },
  {
    date: "03 December 2021",
    nav: 279.11,
    sp500: 165.44,
  },
  {
    date: "04 December 2021",
    nav: 280.15,
    sp500: 165.44,
  },
  {
    date: "05 December 2021",
    nav: 280.11,
    sp500: 165.44,
  },
  {
    date: "06 December 2021",
    nav: 280.15,
    sp500: 167.38,
  },
  {
    date: "07 December 2021",
    nav: 280.14,
    sp500: 170.84,
  },
  {
    date: "08 December 2021",
    nav: 279.92,
    sp500: 171.37,
  },
  {
    date: "09 December 2021",
    nav: 279.97,
    sp500: 170.14,
  },
  {
    date: "10 December 2021",
    nav: 280.21,
    sp500: 171.76,
  },
  {
    date: "11 December 2021",
    nav: 279.87,
    sp500: 171.76,
  },
  {
    date: "12 December 2021",
    nav: 278.16,
    sp500: 171.76,
  },
  {
    date: "13 December 2021",
    nav: 279.23,
    sp500: 170.19,
  },
  {
    date: "14 December 2021",
    nav: 280.23,
    sp500: 168.92,
  },
  {
    date: "15 December 2021",
    nav: 280.58,
    sp500: 171.68,
  },
  {
    date: "16 December 2021",
    nav: 281.01,
    sp500: 170.17,
  },
  {
    date: "17 December 2021",
    nav: 282.96,
    sp500: 168.43,
  },
  {
    date: "18 December 2021",
    nav: 282.53,
    sp500: 168.43,
  },
  {
    date: "19 December 2021",
    nav: 282.71,
    sp500: 168.43,
  },
  {
    date: "20 December 2021",
    nav: 283.02,
    sp500: 166.51,
  },
  {
    date: "21 December 2021",
    nav: 283.06,
    sp500: 169.47,
  },
  {
    date: "22 December 2021",
    nav: 283.11,
    sp500: 171.2,
  },
  {
    date: "23 December 2021",
    nav: 283.07,
    sp500: 172.26,
  },
  {
    date: "24 December 2021",
    nav: 283.01,
    sp500: 172.26,
  },
  {
    date: "25 December 2021",
    nav: 282.79,
    sp500: 172.26,
  },
  {
    date: "26 December 2021",
    nav: 283.48,
    sp500: 172.26,
  },
  {
    date: "27 December 2021",
    nav: 282.97,
    sp500: 174.65,
  },
  {
    date: "28 December 2021",
    nav: 283.13,
    sp500: 174.47,
  },
  {
    date: "29 December 2021",
    nav: 283.15,
    sp500: 174.72,
  },
  {
    date: "30 December 2021",
    nav: 283.16,
    sp500: 174.19,
  },
  {
    date: "31 December 2021",
    nav: 282.66,
    sp500: 173.74,
  },
  {
    date: "01 January 2022",
    nav: 297.55,
    sp500: 173.74,
  },
  {
    date: "02 January 2022",
    nav: 296.95,
    sp500: 173.74,
  },
  {
    date: "03 January 2022",
    nav: 296.18,
    sp500: 174.84,
  },
  {
    date: "04 January 2022",
    nav: 296.06,
    sp500: 174.73,
  },
  {
    date: "05 January 2022",
    nav: 296.16,
    sp500: 171.35,
  },
  {
    date: "06 January 2022",
    nav: 296.59,
    sp500: 171.18,
  },
  {
    date: "07 January 2022",
    nav: 296.36,
    sp500: 170.49,
  },
  {
    date: "08 January 2022",
    nav: 296.31,
    sp500: 170.49,
  },
  {
    date: "09 January 2022",
    nav: 296.72,
    sp500: 170.49,
  },
  {
    date: "10 January 2022",
    nav: 296.78,
    sp500: 170.24,
  },
  {
    date: "11 January 2022",
    nav: 296.29,
    sp500: 171.8,
  },
  {
    date: "12 January 2022",
    nav: 296.14,
    sp500: 172.29,
  },
  {
    date: "13 January 2022",
    nav: 296.36,
    sp500: 169.83,
  },
  {
    date: "14 January 2022",
    nav: 296.23,
    sp500: 169.97,
  },
  {
    date: "15 January 2022",
    nav: 296.67,
    sp500: 169.97,
  },
  {
    date: "16 January 2022",
    nav: 296.92,
    sp500: 169.97,
  },
  {
    date: "17 January 2022",
    nav: 297.02,
    sp500: 169.97,
  },
  {
    date: "18 January 2022",
    nav: 297.16,
    sp500: 166.85,
  },
  {
    date: "19 January 2022",
    nav: 297.78,
    sp500: 165.23,
  },
  {
    date: "20 January 2022",
    nav: 298.57,
    sp500: 163.4,
  },
  {
    date: "21 January 2022",
    nav: 299.46,
    sp500: 160.31,
  },
  {
    date: "22 January 2022",
    nav: 298.38,
    sp500: 160.31,
  },
  {
    date: "23 January 2022",
    nav: 297.69,
    sp500: 160.31,
  },
  {
    date: "24 January 2022",
    nav: 300.01,
    sp500: 160.76,
  },
  {
    date: "25 January 2022",
    nav: 300.12,
    sp500: 156.55,
  },
  {
    date: "26 January 2022",
    nav: 299.56,
    sp500: 158.56,
  },
  {
    date: "27 January 2022",
    nav: 300.04,
    sp500: 157.71,
  },
  {
    date: "28 January 2022",
    nav: 299.52,
    sp500: 161.55,
  },
  {
    date: "29 January 2022",
    nav: 300.36,
    sp500: 161.55,
  },
  {
    date: "30 January 2022",
    nav: 300.98,
    sp500: 161.55,
  },
  {
    date: "31 January 2022",
    nav: 301.14,
    sp500: 163.27,
  },
  {
    date: "01 February 2022",
    nav: 301.63,
    sp500: 165.73,
  },
  {
    date: "02 February 2022",
    nav: 301.54,
    sp500: 167.29,
  },
  {
    date: "03 February 2022",
    nav: 301.53,
    sp500: 163.21,
  },
  {
    date: "04 February 2022",
    nav: 301.32,
    sp500: 164.05,
  },
  {
    date: "05 February 2022",
    nav: 300.82,
    sp500: 164.05,
  },
  {
    date: "06 February 2022",
    nav: 301.31,
    sp500: 164.05,
  },
  {
    date: "07 February 2022",
    nav: 301.32,
    sp500: 163.45,
  },
  {
    date: "08 February 2022",
    nav: 303.49,
    sp500: 164.82,
  },
  {
    date: "09 February 2022",
    nav: 303.17,
    sp500: 167.21,
  },
  {
    date: "10 February 2022",
    nav: 303.11,
    sp500: 164.18,
  },
  {
    date: "11 February 2022",
    nav: 303.47,
    sp500: 161.07,
  },
  {
    date: "12 February 2022",
    nav: 304.07,
    sp500: 161.07,
  },
  {
    date: "13 February 2022",
    nav: 306.37,
    sp500: 161.07,
  },
  {
    date: "14 February 2022",
    nav: 306.57,
    sp500: 160.45,
  },
  {
    date: "15 February 2022",
    nav: 307.47,
    sp500: 162.98,
  },
  {
    date: "16 February 2022",
    nav: 309.57,
    sp500: 163.12,
  },
  {
    date: "17 February 2022",
    nav: 308.31,
    sp500: 159.67,
  },
  {
    date: "18 February 2022",
    nav: 309.85,
    sp500: 158.53,
  },
  {
    date: "19 February 2022",
    nav: 308.44,
    sp500: 158.53,
  },
  {
    date: "20 February 2022",
    nav: 308.32,
    sp500: 158.53,
  },
  {
    date: "21 February 2022",
    nav: 307.75,
    sp500: 158.53,
  },
  {
    date: "22 February 2022",
    nav: 311.54,
    sp500: 156.92,
  },
  {
    date: "23 February 2022",
    nav: 313.84,
    sp500: 154.03,
  },
  {
    date: "24 February 2022",
    nav: 306.45,
    sp500: 156.33,
  },
  {
    date: "25 February 2022",
    nav: 308.74,
    sp500: 159.83,
  },
  {
    date: "26 February 2022",
    nav: 308.57,
    sp500: 159.83,
  },
  {
    date: "27 February 2022",
    nav: 311.73,
    sp500: 159.83,
  },
  {
    date: "28 February 2022",
    nav: 312.41,
    sp500: 159.44,
  },
  {
    date: "01 March 2022",
    nav: 310.27,
    sp500: 156.97,
  },
  {
    date: "02 March 2022",
    nav: 314.84,
    sp500: 159.9,
  },
  {
    date: "03 March 2022",
    nav: 314.58,
    sp500: 159.06,
  },
  {
    date: "04 March 2022",
    nav: 316.37,
    sp500: 157.8,
  },
  {
    date: "05 March 2022",
    nav: 316.42,
    sp500: 157.8,
  },
  {
    date: "06 March 2022",
    nav: 315.03,
    sp500: 157.8,
  },
  {
    date: "07 March 2022",
    nav: 316.47,
    sp500: 153.14,
  },
  {
    date: "08 March 2022",
    nav: 317.04,
    sp500: 152.03,
  },
  {
    date: "09 March 2022",
    nav: 319.47,
    sp500: 155.94,
  },
  {
    date: "10 March 2022",
    nav: 313.47,
    sp500: 155.27,
  },
  {
    date: "11 March 2022",
    nav: 318.02,
    sp500: 153.26,
  },
  {
    date: "12 March 2022",
    nav: 313.38,
    sp500: 153.26,
  },
  {
    date: "13 March 2022",
    nav: 317.47,
    sp500: 153.26,
  },
  {
    date: "14 March 2022",
    nav: 317.43,
    sp500: 151.86,
  },
  {
    date: "15 March 2022",
    nav: 321.38,
    sp500: 155.38,
  },
  {
    date: "16 March 2022",
    nav: 320.03,
    sp500: 157.62,
  },
  {
    date: "17 March 2022",
    nav: 322.37,
    sp500: 160.14,
  },
  {
    date: "18 March 2022",
    nav: 324.53,
    sp500: 162.69,
  },
  {
    date: "19 March 2022",
    nav: 322.48,
    sp500: 162.69,
  },
  {
    date: "20 March 2022",
    nav: 319.38,
    sp500: 162.69,
  },
  {
    date: "21 March 2022",
    nav: 318.48,
    sp500: 162.62,
  },
  {
    date: "22 March 2022",
    nav: 321.92,
    sp500: 164.46,
  },
  {
    date: "23 March 2022",
    nav: 322.34,
    sp500: 162.44,
  },
  {
    date: "24 March 2022",
    nav: 319.83,
    sp500: 164.77,
  },
  {
    date: "25 March 2022",
    nav: 320.38,
    sp500: 165.6,
  },
  {
    date: "26 March 2022",
    nav: 321.71,
    sp500: 165.6,
  },
  {
    date: "27 March 2022",
    nav: 322.83,
    sp500: 165.6,
  },
  {
    date: "28 March 2022",
    nav: 322.17,
    sp500: 165.53,
  },
  {
    date: "29 March 2022",
    nav: 320.83,
    sp500: 168.83,
  },
  {
    date: "30 March 2022",
    nav: 323.82,
    sp500: 167.77,
  },
  {
    date: "31 March 2022",
    nav: 336.21,
    sp500: 165.14,
  },
  {
    date: "01 April 2022",
    nav: 334.62,
    sp500: 165.71,
  },
  {
    date: "02 April 2022",
    nav: 334.71,
    sp500: 165.71,
  },
  {
    date: "03 April 2022",
    nav: 336.27,
    sp500: 165.71,
  },
  {
    date: "04 April 2022",
    nav: 338.57,
    sp500: 167.05,
  },
  {
    date: "05 April 2022",
    nav: 337.58,
    sp500: 164.95,
  },
  {
    date: "06 April 2022",
    nav: 337.59,
    sp500: 163.35,
  },
  {
    date: "07 April 2022",
    nav: 339.78,
    sp500: 164.04,
  },
  {
    date: "08 April 2022",
    nav: 335.85,
    sp500: 163.61,
  },
  {
    date: "09 April 2022",
    nav: 336.93,
    sp500: 163.61,
  },
  {
    date: "10 April 2022",
    nav: 336.37,
    sp500: 163.61,
  },
  {
    date: "11 April 2022",
    nav: 338.37,
    sp500: 160.85,
  },
  {
    date: "12 April 2022",
    nav: 339.47,
    sp500: 160.3,
  },
  {
    date: "13 April 2022",
    nav: 339.92,
    sp500: 162.09,
  },
  {
    date: "14 April 2022",
    nav: 339.89,
    sp500: 160.12,
  },
  {
    date: "15 April 2022",
    nav: 342.12,
    sp500: 160.12,
  },
  {
    date: "16 April 2022",
    nav: 339.46,
    sp500: 160.12,
  },
  {
    date: "17 April 2022",
    nav: 340.82,
    sp500: 160.12,
  },
  {
    date: "18 April 2022",
    nav: 342.37,
    sp500: 160.09,
  },
  {
    date: "19 April 2022",
    nav: 342.21,
    sp500: 162.66,
  },
  {
    date: "20 April 2022",
    nav: 343.1,
    sp500: 162.55,
  },
];
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 14,
        },
        color: "#fff",
      },
    },
    title: {
      display: true,
      text: "",
    },
    tooltip: {
      callbacks: {
        title: (context) => {
          return context[0].label.replace(", 12:00:00 am", ".");
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      // time: {
      //   unit: "day",
      // },
      grid: {
        display: false,
        // tickLength: 100,
      },
      ticks: {
        color: "#ffffff",
        callback: function (value, index, ticks) {
          console.log(value, index, ticks[index].value);
          let val = new Date(ticks[index].value).toString().split(" ");
          return val[1] + " " + val[3][2] + val[3][3];
        },
        autoSkip: true,
        maxTicksLimit: 5,
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      grid: {
        display: true,
        // tickLength: 100,
      },
      ticks: {
        color: "#ffffff",
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = dataList.map((el) => el.date);

export const data = {
  labels,
  datasets: [
    {
      label: "Hedonova",
      data: dataList.map((el) => el.nav),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointStyle: "circle",
      pointBorderWidth: 1,
      hideInLegendAndTooltip: false,
      borderWidth: 4,
      pointRadius: 2.5,
      color: "#fff",
    },
    {
      label: "S&P500",
      data: dataList.map((el) => el.sp500),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      pointStyle: "circle",
      borderWidth: 4,
      pointBorderWidth: 1,
      pointRadius: 2.5,
      color: "#fff",
    },
  ],
};

export default function App() {
  return (
    <div style={{ height: "100vh", cursor: "pointer" }}>
      <Line options={options} data={data} />
    </div>
  );
}
