import { error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function load({ params }) {
	const post = await prisma.blog.findUnique({
		where: {
			id: parseInt(params.slug)
		}
	});

	if (post) {
		return post;
	}

	throw error(404, "Not found");
}
