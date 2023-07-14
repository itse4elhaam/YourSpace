import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "src/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req: Request) {
	const session = await getServerSession(authOptions);

	const currentUserEmail = session?.user?.email;

	const data = await req.json();
	data.age = Number(data.age);

	const user = await prisma.user.update({
		where: {
			email: currentUserEmail!,
		},
		data,
	});
}