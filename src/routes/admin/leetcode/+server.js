import { json, error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST({ request }) {
	const body = await request.json();
	try {
		body.difficulty = parseInt(body.difficulty);
		await prisma.leetcode.create({ data: body });
	} catch (err) {
		console.error(err);
		throw error(500, { error: "Could not create leetcode" });
	}
	return json({ success: "Successfully created leetcode" });
}
