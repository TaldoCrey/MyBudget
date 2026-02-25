import styles from "./Panel.module.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LGraphPanel() {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 50, 60],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Dataset 2',
            data: [100, 200, 300, 400, 500, 600, 700],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        animation: {},
        scales: {
            x: {
                grid: {
                    color: '#3d3d3d'
                }
            },
            y: {
                grid: {
                    color: '#3d3d3d'
                }
            }
        }
    };

    return(
        <div className={styles.lgraph}>
            <p className="font-semibold text-[28px] text-center">Title</p>
            <hr className="border-[0.5px] border-bg-mid"></hr>
            <div className="flex w-full h-[80%] items-center justify-center">
            <Line data={data} options={options}/>
            </div>
        </div>
    );
}

export default LGraphPanel;