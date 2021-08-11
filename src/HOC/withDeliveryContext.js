import DeliveryClass from "../DB/Delivery/DeliveryClass"
import DeliveryContext from "../DB/Delivery/DeliveryContext"

const withDelivery=Component=>props=>{
    return (
        <DeliveryContext.Provider value={new DeliveryClass()}>
            <Component {...props}  />
        </DeliveryContext.Provider>
    )
}
export default withDelivery