import dynamic from "next/dynamic";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

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
    colors: ["#33A02C", "#1F78B4", "#B2DF8A", "#A6CEE3"],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      export: {
        enabled: false,
      },
      toolbar: {
        show: false,
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
      tooltipHoverFormatter: null,
      show: false,
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
      enabled: false,
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
