import { assign } from "lodash";

// *
// * Colors
// *
const bridgePurple = "#4E57CA";
const bridgePink = "#EB2B97";
const bridgeSeafoam = "#02C39D";
const bridgeBlue = "#30A1D4";

const colors = [
  bridgePurple,
  bridgePink,
  bridgeSeafoam,
  bridgeBlue,
];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 7;

// Layout
const padding = 5;
const baseProps = {
  width: 350,
  height: 350,
  padding: 50
};

// * Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: assign(
    {
      style: {
        data: {
          fill: grey900
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: blueGrey300,
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent"
        }),
        grid: {
          fill: "none",
          stroke: blueGrey50,
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted"
        },
        ticks: {
          fill: "transparent",
          size: 5,
          stroke: blueGrey300,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin
        },
        tickLabels: assign({}, baseLabelStyles, {
          fill: blueGrey700
        })
      }
    },
    baseProps
  ),
  bar: assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0
        },
        labels: baseLabelStyles
      }
    },
    baseProps
  ),
  chart: baseProps,
  group: assign(
    {
      colorScale: colors
    },
    baseProps
  ),
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: bridgePurple,
          strokeWidth: 2
        },
        labels: centeredLabelStyles
      }
    },
    baseProps
  ),
};