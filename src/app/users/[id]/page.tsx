import { prisma } from "src/lib/prisma";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const user = await prisma.user.findUnique({ where: { id: params.id } });
	return { title: `User profile of ${user?.name}` };
}


interface Props {
	params: {
		id: string;
	};
}

// TODO: FORMAT THIS

export default async function UserProfile({ params }: Props) {
	const user = await prisma.user.findUnique({ where: { id: params.id } });

	const { name, bio, image } = user ?? {};

	return (
		<>
			<div className="m-20">{name}</div>
			<div className="m-20">{bio}</div>
		</>
	);
}
