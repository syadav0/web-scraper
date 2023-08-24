import { load } from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

type Body = {
  search: string;
}

export async function POST(req: Request, res: NextApiResponse) {
  console.log('in route');
  const method = req.method;

  if (method === 'POST') {
    const data = await req.json();
    const { search } = data;
    const url = `https://www.newegg.com/p/pl?d=${search}`;
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();

    const $ = load(html);
    const titles: string[] = []; 
    $('.item-cell').each((i, el) => {
      const title = $('.item-title', el).text()
      titles.push(title);
    });

    return NextResponse.json(titles);
  } else {
    res.send('Method not allowed');
    return NextResponse.json({ message: 'Error', success: false});
  }
  
}