import fs from "fs";
import puppeteer from "puppeteer";
import cheerio from "cheerio";

const BASE_URL = "https://leetcode.com";
const map = {
	Medium: 1,
	Easy: 0,
	Hard: 2
};
const getData = async (url, selector) => {
	console.log(url);
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	page.setCookie(
		...JSON.parse(
			'[{"domain":".leetcode.com","expirationDate":1695756602,"hostOnly":false,"httpOnly":false,"name":"__stripe_mid","path":"/","sameSite":"strict","secure":true,"session":false,"storeId":"0","value":"cee9ae7f-bf5b-488e-8065-c105c45cf8fedc6b64"},{"domain":"leetcode.com","expirationDate":1695685104.164506,"hostOnly":true,"httpOnly":false,"name":"csrftoken","path":"/","sameSite":"lax","secure":true,"session":false,"storeId":"0","value":"9R0IZIKm78L27l55XUyww1jpkVqTBjYBnojacUJymweIv9bcaEMAaMXMpoNvSFdN"},{"domain":".leetcode.com","expirationDate":1665428572.757126,"hostOnly":false,"httpOnly":true,"name":"LEETCODE_SESSION","path":"/","sameSite":"lax","secure":true,"session":false,"storeId":"0","value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiNDc2NzcwNSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImY2ZTJmYjNjYTk3MGNhNTA4ZDQ3YjgzNjM5M2EzNDlhMTkwNWE3ZDMiLCJpZCI6NDc2NzcwNSwiZW1haWwiOiJjb3J5aXNhbmVyZEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Ik9rVGhvbWFzIiwidXNlcl9zbHVnIjoiT2tUaG9tYXMiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvQmlpZ01vbmV5L2F2YXRhcl8xNjI5NDMxOTQ5LnBuZyIsInJlZnJlc2hlZF9hdCI6MTY2NDIxODk3MywiaXAiOiIyNC42Ny4xMDQuMjM2IiwiaWRlbnRpdHkiOiJiMjBmOTZlNTg3OGIwYTQ3ZmY4NjI2YzhmNzU3ZTM1YiIsInNlc3Npb25faWQiOjI2OTQzNjgyfQ.-vHAIWZ67keVcdBUEqD1p2UqJ6oVTEfhv_9DR2s5RZc"},{"domain":"leetcode.com","hostOnly":true,"httpOnly":false,"name":"c_a_u","path":"/","sameSite":"unspecified","secure":false,"session":true,"storeId":"0","value":"T2tUaG9tYXM=:1octNa:TowORsY5BmRSKjFHbCMQnc5ziTc"}]'
		)
	);
	await page.goto(url, { waitUntil: "load" });
	await page.waitForSelector(selector, { timeout: 10000 });
	const body = await page.evaluate(() => {
		return document.querySelector("body").innerHTML;
	});
	await browser.close();
	return body;
};
let questions = [];

//let data = await getData(BASE_URL + "/OkThomas", ".h-\\[56px\\]");
let data = fs.readFileSync("./cache.html");
let c = cheerio.load(data);
let problems = c(".h-\\[56px\\]");
for (const problem of problems) {
	let name = problem.children[0].children[1].children[0].data;
	if (name.includes("Design")) continue;
	let url = problem.attribs.href;
	//let submission = await getData(BASE_URL + url, "#result_language");
	let submission = fs.readFileSync("./cache2.html");
	c = cheerio.load(submission);
	let lines = c(".ace_text-layer")[0].children;
	let solution = "";
	for (const line of lines) {
		solution += c(line).text() + "\n";
	}
	url = c(".inline-wrap")[0].attribs.href;
	//let question = await getData(BASE_URL + url, ".CodeMirror");
	let question = fs.readFileSync("./cache3.html");
	c = cheerio.load(question);
	let content = c("div[data-key='description-content']")[0];
	let difficulty = map[c(content.children[0].children[0].children[1].children[0]).text()];
	let p = c(content.children[0].children[1]).html();
	questions.push({ name, solution });
	break;
}
