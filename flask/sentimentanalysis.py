import urllib2
from bs4 import BeautifulSoup
import urlparse as up
import re
import json
import indicoio

class SentimentAnalysis(object):
    indicoio.config.api_key = '037314d08f03395813f6b66d05aebe06'
    def __init__(self, url):
        self.url = url
        self.data = ""
        self.final_json = {}

    def parse_data(self):
        #encoding_format = 'ascii'
        #print "Scraping started for URL ", self.url.encode(encoding_format,'ignore')

        opener = urllib2.build_opener()
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:10.0.1) Gecko/20100101 Firefox/10.0.1'}
        opener.addheaders = headers.items()
        response = opener.open(self.url)
        html = response.read()
        soup = BeautifulSoup(html)

        text_list = [''.join(s.findAll(text=True)) for s in soup.find_all('p')]
        #body_text = '.'.join(text_list).encode(encoding_format, 'ignore')
        body_text = '.'.join(text_list)#.encode('ignore')
        
        # if there is table,fetch table text
        # if soup.find("table") is None:
        #     table_text = ''
        # else:
        #     table_text = soup.find("table").get_text().encode(encoding_format, 'ignore')
        self.data = body_text

    def word_count(self):
        count = len(re.findall(r'\w+', self.data))
        read_avg = count / 225
        self.final_json['avg_time'] = read_avg

    def keywords(self):
        words = indicoio.keywords(self.data, top_n = 5, version=2)
        self.final_json['keywords'] = words

    def named_entities(self):
        properNouns = indicoio.named_entities(self.data)
        self.final_json['properNouns'] = properNouns

    def sentiment(self):
        sentiment = indicoio.sentiment(self.data)
        self.final_json['sentiment'] = sentiment

    def get_json(self):
        self.parse_data();
        self.word_count();
        self.keywords();
        self.named_entities();
        self.sentiment();

        json_data = json.dumps(self.final_json)
        return json_data, 0
