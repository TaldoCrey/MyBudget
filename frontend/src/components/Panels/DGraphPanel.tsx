import styles from "./Panel.module.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartOptions
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

function DGraphPanel() {

    const data = {
        labels: ['Membro A', 'Membro B', 'Membro C', 'Membro D', 'Membro E', 'Membro F'],
        datasets: [
            {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        responsive: true,
        animation: {
            animateRotate: true,
            duration: 1500,
            loop: false,
            easing: "easeInOutCirc"
        }
    };

    return(
        <div className={styles.dgraph}>
            <p className="font-semibold text-[28px] text-center">Title</p>
            <hr className="border-[0.5px] border-bg-mid"></hr>
            <div className="flex w-full h-[80%] items-center justify-center">
            <Doughnut data={data} options={options}/>
            </div>
        </div>
    );
}

export default DGraphPanel;