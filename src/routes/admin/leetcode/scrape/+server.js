import { json } from "@sveltejs/kit";
import scrape from "$lib/util/scraper";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST() {
	console.log("received");
	let data = await scrape();
	console.log(data);
	await prisma.leetcode.createMany({ data });
	return json({ sucess: "worked" });
}

export function GET() {
	return json({ test: "test" });
}
