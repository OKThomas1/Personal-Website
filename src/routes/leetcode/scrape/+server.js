import { CronJob } from "quirrel/sveltekit";
import { json } from "@sveltejs/kit";

const f = (arg) => {
	console.log("heehe");
	return json();
};
const cron = CronJob("leetcode/scrape", ["0 0 * * *"], async () => {
	"console.log();";
});

export const POST = f;
export default cron;
