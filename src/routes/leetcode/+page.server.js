import { error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function load({ params }) {
	const posts = await prisma.leetcode.findMany({ orderBy: [{ id: "desc" }] });

	if (posts) {
		return {
			posts: posts.sort((a, b) => {
				if (a.testcase.length > 0) {
					if (b.testcase.length > 0) return 0;
					else return -1;
				} else {
					if (b.testcase.length > 0) return 1;
					else return 0;
				}
			})
		};
	}

	throw error(404, "Not found");
}
