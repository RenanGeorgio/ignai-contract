import React, { useEffect, useRef } from 'react';
import { Chart, BarElement, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const JurimetriaChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const mixedChart = new Chart(ctx, {
          data: {
            labels: ['1 Set', '2 Set', '3 Set', '4 Set', '5 Set', '6 Set', '7 Set', '8 Set', '9 Set', '10 Set'],
            datasets: [
              {
                type: 'bar',
                label: 'Estadual',
                data: [500, 1000, 1500, 2000, 1900, 2000, 1500, 800, 700, 1000],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                order: 2
              },
              {
                type: 'line',
                label: 'Federal',
                data: [500, 1000, 1500, 2000, 1900, 2000, 1500, 800, 700, 1000],
                borderColor: 'rgb(54, 162, 235)',
                fill: false,
                order: 1
              }
            ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value) {
                    if (value === 500) return '500';
                    if (value === 1000) return '1k';
                    if (value === 1500) return '1.5k';
                    if (value === 2000) return '2k';
                    if (value === 2500) return '2.5k';
                    return value;
                  }
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  usePointStyle: true, 
                  boxWidth: 6, 
                  boxHeight: 6,
                  padding: 20, 
                  generateLabels: (chart) => {
                    const original = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                    return original.map(label => ({
                      ...label,
                      padding: 15, 
                    }));
                  },
                },
              },
            },
          }
        });

        return () => {
          mixedChart.destroy();
        };
      }
    }
  }, []);

  return (
    <div style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", margin: "10px" }}>
      <h1 style={{ margin: "20px 0 10px 10px", fontWeight: "bold", fontSize: "25px" }}>
        Jurimetria de busca
      </h1>
      <p style={{ marginBottom: "20px" }}>Total número de processos no período 23.8k</p>
      <canvas ref={chartRef} />
    </div>
  );
};

export default JurimetriaChart;
