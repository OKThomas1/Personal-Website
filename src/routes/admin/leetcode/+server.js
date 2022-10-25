import { json, error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST({ request }) {
	const body = await request.json();
	try {
		body.difficulty = parseInt(body.difficulty);
		let exists = await prisma.leetcode.findUnique({
			where: {
				name: body.name
			}
		});
		if (exists) {
			await prisma.leetcode.update({
				where: {
					id: exists.id
				},
				data: {
					solution: body.solution
				}
			});
			return json({ success: "Successfully updated leetcode" });
		} else {
			await prisma.leetcode.create({ data: body });
			return json({ success: "Successfully created leetcode" });
		}
	} catch (err) {
		console.error(err);
		throw error(500, { error: "Could not create leetcode" });
	}
}
