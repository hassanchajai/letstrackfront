import formatDistance from 'date-fns/formatDistance'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import { withRouter } from 'react-router'
import withloading from '../../../../HOC/WithLoading'

const Statistique = ({
    styles,ordersState,chartdata,lastOrders,history
}) => {
    const handleOnclickShow=id=>{
        history.push("/company/orders/"+id)
     }
    return (
        <React.Fragment>
        {" "}
        <ul className={styles.statistique}>
          <li className={styles.statistiqueItem}>
            <div className={styles.statistiqueItemDetail}>
              {/* statisqtique details */}
              <div>
                <h3 className="mb-2">Completed</h3>
                <p>{ordersState.orders.ordersCompleted}</p>
              </div>
              {/* icon container */}
              <div className={styles.statistiqueItemDetailIcon}>
                <i className="fas fa-check"></i>
              </div>
              {/* end icon container */}
            </div>
            {/* percent */}

            <p>
              <span className="text-success">
                {ordersState.ordersPercent.ordersCompleted}%
              </span>{" "}
              since last month
            </p>

            {/* end of percent */}
          </li>
          {/* end of list item */}
          <li className={styles.statistiqueItem}>
            <div className={styles.statistiqueItemDetail}>
              {/* statisqtique details */}
              <div>
                <h3 className="mb-2">Process</h3>
                <p>{ordersState.orders.ordersProcessing}</p>
              </div>
              {/* icon container */}
              <div
                className={styles.statistiqueItemDetailIcon + " bg-primary"}
              >
                <i className="fas fa-download"></i>
              </div>
              {/* end icon container */}
            </div>
            {/* percent */}

            <p>
              <span className="text-success">
                {ordersState.ordersPercent.ordersProcessing}%
              </span>{" "}
              since last month
            </p>

            {/* end of percent */}
          </li>
          {/* end of list item */}
          <li className={styles.statistiqueItem}>
            <div className={styles.statistiqueItemDetail}>
              {/* statisqtique details */}
              <div>
                <h3 className="mb-2">Cancelled</h3>
                <p>{ordersState.orders.ordersCancelled}</p>
              </div>
              {/* icon container */}
              <div
                className={styles.statistiqueItemDetailIcon + " bg-danger"}
              >
                <i className="fas fa-ban"></i>
              </div>
              {/* end icon container */}
            </div>
            {/* percent */}

            <p>
              <span className="text-success">
                {ordersState.ordersPercent.ordersCancelled}%
              </span>{" "}
              since last month
            </p>

            {/* end of percent */}
          </li>
          {/* end of list item */}
          <li className={styles.statistiqueItem}>
            <div className={styles.statistiqueItemDetail}>
              {/* statisqtique details */}
              <div>
                <h3 className="mb-2">En Delivery</h3>
                <p>{ordersState.orders.ordersEnDelivery}</p>
              </div>
              {/* icon container */}
              <div
                className={styles.statistiqueItemDetailIcon + " bg-blue"}
              >
                <i className="fas fa-truck"></i>
              </div>
              {/* end icon container */}
            </div>
            {/* percent */}

            <p>
              <span className="text-success">
                {ordersState.ordersPercent.ordersEnDelivery}%
              </span>{" "}
              since last month
            </p>

            {/* end of percent */}
          </li>
          {/* end of list item */}
        </ul>
        <div className="row m-0 mt-4">
          <div className="col-12 col-md-8">
            <Bar
              data={{
                labels: chartdata.map(item=>item.month),
                datasets: [
                  {
                    label: "# of Votes",
                    data: chartdata.map(item=>item.count),
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
                options: {
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                },
              }}
            />
          </div>
          <div className="col-12 col-md-4 card p-0 ">
            <div className="card-header">
              <p>Last {lastOrders.length} orders</p>
            </div>
            {lastOrders.length ? (
              <table className="table card-body mb-0 text-center">
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">Shipping Address</th>
                    <th scope="col">Date</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {lastOrders.map((order,i) => (
                    <tr key={i}>
                      <td>{order.shipping_address}</td>
                      <td>
                        {" "}
                        {formatDistance(
                          new Date(order.created_at),
                          new Date(),
                          { addSuffix: true }
                        )}
                      </td>
                      <td>
                        <button className="btn btn-warning text-white" onClick={()=>handleOnclickShow(order.id)}>
                          Show
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    )
}

export default withRouter(withloading(Statistique))