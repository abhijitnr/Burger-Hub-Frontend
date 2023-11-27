import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const loading = false;

  const data = {
    labels: ["Processing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgba(159, 63, 176, 0.1)",
          "rgba(78, 63, 176, 0.2)",
          "rgba(156, 0, 60, 0.3)",
        ],
        borderColor: [
          "rgb(159, 63, 176)",
          "rgb(78, 63, 176)",
          "rgb(156, 0, 60)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
      {loading === false ? (
        <>
          <main>
            <article>
              <Box title="Users" value={234} />
              <Box title="Orders" value={43} />
              <Box title="Income" value={34560} />
            </article>

            <section>
              <div>
                <Link to="/admin/orders">View Orders</Link>
                <Link to="/admin/users">View Users</Link>
              </div>

              <aside>
                <Doughnut data={data} />
              </aside>
            </section>
          </main>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
