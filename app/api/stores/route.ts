import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

/**
 * Handles the POST request to create a new store.
 * 
 * @param req - The request object.
 * @returns A response object containing the newly created store.
 */

export async function POST(req: Request) {
	try {
		const { userId } = auth();

		const body = await req.json();
		const { name } = body;
		// make sure that have userId and name of the store to create new store
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 403 });
		}

		if (!name) {
			return new NextResponse("Missing name", { status: 400 });
		}
		// create new store
		const store = await prismadb.store.create({
			data: {
				name,
				userId,
			},
		});
		// return new store to client side
		return NextResponse.json(store);
	} catch (error) {
		console.log("[STORES_POST]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
