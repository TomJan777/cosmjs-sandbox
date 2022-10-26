import { ChangeEvent, Component, MouseEvent } from "react"
import styles from '../styles/Home.module.css'

interface FaucetSenderState {
    denom: string
    faucetBalance: string
    myAddress: string
    myBalance: string
    toSend: string
}

export interface FaucetSenderProps {
    faucetAddress: string
    rpcUrl: string
}

export class FaucetSender extends Component<FaucetSenderProps, FaucetSenderState> {


    // Set the initial state
    constructor(props:FaucetSenderProps) {
        super(props)
        this.state = {
            denom: "Loading...",
            faucetBalance: "Loading...",
            myAddress: "Click first",
            myBalance: "Click first",
            toSend: "0",
        }
    }

    // Store changed token amount to state
    onToSendChanged = (e: ChangeEvent<HTMLInputElement>) => this.setState({
        toSend: e.currentTarget.value
    })

    // When the user clicks the "send to faucet button"
    onSendClicked = async(e: MouseEvent<HTMLButtonElement>) => {
        alert("TODO")
    }

    // The render function that draws the component at init and at state change
    render() {
        const { denom, faucetBalance, myAddress, myBalance, toSend } = this.state
        const { faucetAddress } = this.props
        console.log(toSend)
        // The web page structure itself
        return <div>
            <fieldset className={styles.card}>
                <legend>Faucet</legend>
                <p>Address: {faucetAddress}</p>
                <p>Balance: {faucetBalance}</p>
            </fieldset>
            <fieldset className={styles.card}>
                <legend>You</legend>
                <p>Address: {myAddress}</p>
                <p>Balance: {myBalance}</p>
            </fieldset>
            <fieldset className={styles.card}>
                <legend>Send</legend>
                <p>To faucet:</p>
                <input value={toSend} type="number" onChange={this.onToSendChanged}/> {denom}
                <button onClick={this.onSendClicked}>Send to faucet</button>
            </fieldset>
        </div>
    }
}
