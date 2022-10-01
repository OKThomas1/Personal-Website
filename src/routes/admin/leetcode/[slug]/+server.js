import { json, error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PATCH({ request, params }) {
	const body = await request.json();
	try {
		await prisma.leetcode.update({
			where: { id: parseInt(params.slug) },
			data: { testcase: body.testcase }
		});
	} catch (err) {
		console.error(err);
		return error(400, { error: "Could not update" });
	}
	return json({ success: "Successfully updated" });
}

export async function DELETE({ params }) {
	try {
		await prisma.leetcode.delete({
			where: { id: parseInt(params.slug) }
		});
	} catch (err) {
		console.error(err);
		return error(400, { error: "Could not delete" });
	}
	return json({ success: "Successfully deleted" });
}
