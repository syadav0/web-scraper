import { load } from 'cheerio';
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function POST(req: Request) {
  console.log('in route');
  const method = req.method;

  try {
    const data = await req.json();
    const { search } = data;
    const url = `https://www.newegg.com/p/pl?d=${search}`;
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.content();

    const $ = load(html);

    const products: {}[] = []; 
    $('.item-cell').each((i, el) => {
      // Limit to 5 products
      if (i >= 5) return false;

      const title = $('.item-title', el).text();
      let price = $('li.price-current', el).text();
      price = price.slice(0, -2);
      
      // TOOD
      const imgURL = '';

      products.push({title, price, imgURL});
    });

    return NextResponse.json(products);
  } catch(err) {
    return NextResponse.json({ message: err, success: false});
  }
  
}