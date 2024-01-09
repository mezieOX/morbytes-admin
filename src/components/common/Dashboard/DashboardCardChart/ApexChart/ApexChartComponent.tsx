import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = () => {
  const [series, setSeries] = useState<Array<{ name: string; data: number[] }>>(
    [
      {
        name: "Movies",
        data: [45, 52, 38, 24, 33, 26],
      },
      {
        name: "Socials",
        data: [35, 41, 62, 42, 13, 18],
      },
      {
        name: "News",
        data: [87, 57, 74, 99, 75, 38],
      },
      {
        name: "Music",
        data: [87, 28, 74, 54, 75, 38],
      },
    ]
  );

  const [options, setOptions] = useState<any>({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    contextmenu: {
      items: [],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2, 2],
      curve: "straight",
      dashArray: [0, 0, 0],
    },

    legend: {
      tooltipHoverFormatter: function (val: any, opts: any) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },

    xaxis: {
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      labels: {
        style: {
          colors: "#A3A3A3",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#A3A3A3",
        },
      },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val: any) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      show: false,
      borderColor: "#fff",
    },
  });

  return (
    <DynamicReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
    />
  );
};

export default ApexChart;
