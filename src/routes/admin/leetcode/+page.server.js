import { error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function load() {
	const posts = await prisma.leetcode.findMany();

	if (posts) {
		return {
			posts: posts.sort((a, b) => {
				if (a.testcase === "" && b.testcase !== "") return -1;
				else if (a.testcase !== "" && b.testcase === "") return 1;
				else return 0;
			})
		};
	}

	throw error(404, "Not found");
}
