import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "src/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);
	const currentUserEmail = session?.user?.email!;
    const {targetUserId} = await req.json();

	const currentUserId = await prisma.user
		.findUnique({
			where: { email: currentUserEmail },
		})
		.then((user) => user?.id);

        const record = await prisma.follows.create({
            data:{
                followerId: currentUserId,
                followingId: targetUserId
            }
        })
}

export async function DELETE(req: NextRequest) {}
