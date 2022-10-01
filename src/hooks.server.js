import { ADMIN } from "$env/static/private";
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith("/admin") && event.cookies.get("admin") !== ADMIN) {
		return new Response("Unauthorized", {
			status: 302,
			headers: { Location: "/" }
		});
	}
	const response = await resolve(event);
	return response;
}
