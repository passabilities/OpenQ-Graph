import { ExternalUserIdAssociatedWithAddress } from "../../generated/OpenQ/OpenQ"
import {
	User
} from "../../generated/schema"

export default function handleExternalUserIdAssociatedWithAddress(event: ExternalUserIdAssociatedWithAddress): void {
	let user = User.load(event.params.newAddress.toHexString())

	if (!user) {
		user = new User(event.params.newAddress.toHexString())
		user.save()
	}

	user.externalUserId = event.params.externalUserId

	// SAVE ALL ENTITIES
	user.save()
}