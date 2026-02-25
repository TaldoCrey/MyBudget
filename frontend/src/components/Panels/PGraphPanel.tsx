import styles from "./Panel.module.css"
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PGraphPanel() {

const data = {
  labels: ['Despesa 1', 'Despesa 2', 'Despesa 3', 'Despesa 4', 'Despesa 5', 'Despesa 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

    const options: ChartOptions<'polarArea'> = {
        responsive: true,
        animation: {
          animateRotate: true,
          animateScale: true,
          duration: 1000,
          loop: false,
          easing: "easeInOutSine"
        },
        scales: {
          r: {
            ticks: {
              backdropColor: '#1f1f1f',
              color: '#1f1f1f'
            },
            grid: {
              color: '#3d3d3d'
            }
          }
        }
    };

    return(
        <div className={styles.pgraph}>
            <p className="font-semibold text-[28px] text-center">Title</p>
            <hr className="border-[0.5px] border-bg-mid"></hr>
            <div className="flex w-full h-[80%] items-center justify-center">
            <PolarArea data={data} options={options}/>
            </div>
        </div>
    );
}

export default PGraphPanel;