import { json, error } from "@sveltejs/kit";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PATCH({ request, params }) {
	const body = await request.json();
	try {
		await prisma.blog.update({ where: { id: parseInt(params.slug) }, data: body });
	} catch (err) {
		console.error(err);
		throw error(500, { error: "Could not update blog post" });
	}
	return json({ success: "Successfully updated blog post" });
}

export async function DELETE({ params }) {
	try {
		await prisma.blog.delete({ where: { id: parseInt(params.slug) } });
	} catch (err) {
		console.error(err);
		throw error(500, { error: "Could not delete blog post" });
	}
	return json({ success: "Successfully deleted blog post" });
}
