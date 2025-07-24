// TechSkillsChart.jsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TechSkillsChart = () => {
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'C++', 'React'],
    datasets: [
      {
        label: 'Skill Level (%)',
        data: [90, 85, 80, 70, 75], // Customize these values
        backgroundColor: [
          '#f97316', // HTML - orange
          '#3b82f6', // CSS - blue
          '#facc15', // JS - yellow
          '#64748b', // C++ - gray
          '#10b981', // React - green
        ],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="w-full h-screen flex justify-center items-center  bg-gradient-to-br  from-slate-900 via-purple-900 to-slate-900">
    <div className="w-[500px] shadow-2xl ">
      <h2 className="text-2xl font-semibold text-center mb-4">Tech Stack Proficiency</h2>
      <Bar data={data} options={options} />
    </div>
    </div>
  );
};

export default TechSkillsChart;
