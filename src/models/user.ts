export type UserUninitialized = {
	cpf: string;
	creationDate: number;
};

export type UserInitialized = UserUninitialized & {
	name: string;
	hashedPassword: string;
	initializationDate: number;
};

export function isUserInitialized(user: any): user is UserInitialized {
	if (!user) return false;
	if (typeof user !== 'object') return false;
	if (
		!user.cpf ||
		!user.name ||
		!user.hashedPassword ||
		!user.creationDate ||
		!user.initializationDate
	)
		return false;
	return true;
}
