import { InvoiceCompletedSet } from "../../generated/OpenQ/OpenQ"
import {
	Bounty
} from "../../generated/schema"

export default function handleInvoiceCompletedSet(event: InvoiceCompletedSet): void {
	let bounty = Bounty.load(event.params.bountyAddress.toHexString())

	if (!bounty) { throw "Error" }

	bounty.invoiceCompleted = event.params.invoiceCompleted;

	// SAVE ALL ENTITIES
	bounty.save()
}