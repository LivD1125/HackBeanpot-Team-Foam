import urllib2
from bs4 import BeautifulSoup
import urlparse as up

class SentimentAnalysis(object):
	private data;
	def __init__(self, url):
		self.url = url
		self.data = ""

	def parse_data(self):
		encoding_format = 'ascii'
		print count, "Scraping started for URL ", self.url.encode(encoding_format,'ignore')

		opener = urllib2.build_opener()
		headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:10.0.1) Gecko/20100101 Firefox/10.0.1'}
		opener.addheaders = headers.items()
		response = opener.open(self.url)
		# fetch data from url
        html = response.read()
		soup = BeautifulSoup(html)

		text_list = [''.join(s.findAll(text=True)) for s in soup.find_all('p')]
        body_text = '.'.join(text_list).encode(encoding_format, 'ignore')
        
        # if there is table,fetch table text
        # if soup.find("table") is None:
        #     table_text = ''
        # else:
        #     table_text = soup.find("table").get_text().encode(encoding_format, 'ignore')
        self.data = body_text