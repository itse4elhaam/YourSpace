import { prisma } from "../../lib/prisma";
import { Metadata } from "next";
import UserCard from '../../components/UserCard';

export const metadata: Metadata = {
	title: "YourSpace Users section",
	description: "we're a social media app",
};

export default async function Users() {
	const users = await prisma.user.findMany();

	// TODO: MAKE A COMPONENT FOR USER CARD LATER ON.
	return (
		<div className="grid grid-cols-2">
			{users.map((user) => {
				return <UserCard key={user.id} {...user} />
			})}
		</div>
	);
}
