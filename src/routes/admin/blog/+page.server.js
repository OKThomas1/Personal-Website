import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function load() {
	const posts = await prisma.blog.findMany();

	if (posts) {
		return {
			posts
		};
	}

	throw error(404, "Not found");
}
