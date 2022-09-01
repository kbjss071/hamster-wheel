import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import {withRouter} from "react-router-dom";
import { StripeProvider } from '@stripe/stripe-react-native';


const PaymentForm = () => {
    const element = useElements();
	const stripe = useStripe();

    const handleSubmit = async (e) => {
        e.preventDefault();

     if(!stripe || !elements) {
         return;
     }   
    
    const cardElement = elements.getElement(CardElement); 
	console.log("card", cardElement)
    console.log("stripe", stripe)
		
	}



    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>Donate</button>
        </form>
    )}