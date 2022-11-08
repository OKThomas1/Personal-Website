import fs from "fs";
import puppeteer from "puppeteer";
import cheerio from "cheerio";

const BASE_URL = "https://leetcode.com";
const map = {
	Medium: 1,
	Easy: 0,
	Hard: 2
};

export default async function scrape(cookies) {
	if (fs.existsSync("cookies.json")) cookies = JSON.parse(fs.readFileSync("cookies.json"));
	const browser = await puppeteer.launch();
	console.log("scraping");
	const getData = async (url, selector) => {
		console.log(url);
		const page = await browser.newPage();
		await page.setCookie(...cookies);
		await page.goto(url, { waitUntil: "load" });
		await page.waitForSelector(selector, { timeout: 10000 });
		const body = await page.evaluate(() => document.querySelector("html").innerHTML);
		cookies = await page.cookies();
		await page.close();
		return body;
	};
	let questions = [];

	let data = await getData(BASE_URL + "/OkThomas", "a.h-\\[56px\\]");
	let c = cheerio.load(data);
	let problems = c("a.h-\\[56px\\]");
	for (const problem of problems) {
		let name = problem.children[0].children[0].children[0].data;
		if (name.includes("Design")) continue;
		let date = problem.children[0].children[1].children[0].data;
		if (date.includes("a day ago") || date.includes("days ago") || date.includes("months ago"))
			break;
		let submission = await getData(BASE_URL + problem.attribs.href, ".language-javascript");
		c = cheerio.load(submission);
		let lines = c("code")[0].children;
		let solution = "";
		for (const line of lines) {
			solution += c(line).text();
		}
		let question = await getData(c("meta[property='og:url']")[0].attribs.content, "code");
		c = cheerio.load(question);
		let difficulty = map[c(c("div.rounded-\\[21px\\]")[0]).text()];
		let p = c(c("div[class='px-5 pt-4']")[0].children[0]).html();
		questions.push({ name, solution, problem: p, testcase: "", difficulty });
	}
	fs.writeFileSync("cookies.json", JSON.stringify(cookies));
	await browser.close();
	return questions;
}
