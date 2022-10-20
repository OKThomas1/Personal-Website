import { json } from "@sveltejs/kit";
import scrape from "$lib/util/scraper";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST() {
	console.log("received");
	let data = await scrape();
	for (const question of data) {
		let exists = await prisma.leetcode.findUnique({
			where: {
				name: question.name
			}
		});
		console.log(exists, question.name);
		if (exists) {
			await prisma.leetcode.update({
				where: {
					id: exists.id
				},
				data: {
					solution: question.solution
				}
			});
		} else {
			await prisma.leetcode.create({ data: question });
		}
	}
	return json({ sucess: "worked" });
}

export function GET() {
	return json({ test: "test" });
}
