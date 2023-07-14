import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ProfileForm } from "./ProfileForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "src/lib/prisma";

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/api/auth/signin");
	}

	const currentUserEmail = session?.user?.email;
	const user = await prisma.user.findUnique({
		where: {
			email: currentUserEmail!,
		},
	});

	return (

	<div className="mx-8 bg-white">
		<h1 className="text-4xl font-semibold">User Dashboard</h1>
		<ProfileForm user={user} />
	</div>
	)
}
