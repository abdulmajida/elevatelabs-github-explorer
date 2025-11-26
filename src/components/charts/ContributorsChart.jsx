import { Bar } from "react-chartjs-2";

export default function ContributorsChart({ contributors }) {
return (
    <Bar
        data={{
        labels: contributors.map((c) => c.login),
        datasets: [
        {
            label: "Contributions",
            data: contributors.map((c) => c.contributions),
        },
        ],
    }}
    />
);
}
