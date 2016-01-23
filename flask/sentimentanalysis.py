import urllib2
import urlparse as up
import re
import json
import indicoio
from bs4 import BeautifulSoup

class SentimentAnalysis(object):
    indicoio.config.api_key = '037314d08f03395813f6b66d05aebe06'
    def __init__(self, url):
        self.error = 0
        self.url = url
        self.data = ""
        self.final_json = {}

    def parse_data(self):
        redo_count = 0
        retry_limit = 5
        while redo_count < retry_limit:
            try:
                opener = urllib2.build_opener()
                headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:10.0.1) Gecko/20100101 Firefox/10.0.1'}
                opener.addheaders = headers.items()
                response = opener.open(self.url)
                html = response.read()
                soup = BeautifulSoup(html)

                text_list = [''.join(s.findAll(text=True)) for s in soup.find_all('p')]
                body_text = '.'.join(text_list)
            except urllib2.URLError as e:
                print "Error: ", e," for URL: ", url
                redo_count += 1
            except:
                redo_count += 1
            else:
                # code worked fine, exit loop
                break
        if redo_count == retry_limit:
            self.error = 1
        else:
            self.data = body_text

    def fetch_word_count(self):
        count = len(re.findall(r'\w+', self.data))
        read_avg = count / 225
        print "\nread_avg: ", read_avg
        self.final_json['avg_time'] = read_avg

    def fetch_keywords(self):
        words = indicoio.keywords(self.data, top_n = 5, version=2)  
        self.final_json['keywords'] = set(sorted(words, key=words.get, reverse=True)[:5])
        print "\nwords: ", self.final_json['keywords']

    def fetch_named_entities(self):
        properNouns = indicoio.named_entities(self.data)
        print "\nproperNouns: ", properNouns
        nounDict = {k:v['confidence'] for k,v in properNouns.items()}
        self.final_json['keywords'].update(sorted(nounDict, key=nounDict.get, reverse=True)[:5])

    def fetch_sentiment(self):
        sentiment = indicoio.sentiment(self.data)
        print "\nsentiment: ", sentiment
        self.final_json['sentiment'] = sentiment

    def get_json(self):
        # invoke all api calls
        self.parse_data();
        if not self.error:
            self.fetch_word_count();
            self.fetch_keywords();
            self.fetch_named_entities();
            self.fetch_sentiment();
            # convert set to list and limit keywords to 5
            self.final_json['keywords'] = [element for element in self.final_json['keywords']][:5]
        json_data = json.dumps(self.final_json)
        return json_data, self.error
