import wolframalpha
import json
class QueryWolfram(object):

	def __init__(self, query):
		self.app_id = "TAVYVP-36T35XU8RQ"
		self.query = query

	def call_wolfram(self):
		client = wolframalpha.Client(self.app_id);
		res = client.query(self.query);
		data = {}
		count = 0
		for pod in res.pods:
			for content in pod:
				count += 1
				if count == 1:
					data['title'] = content.text
					data['content'] = []
				elif count < 3:
					data['content'].append(content.text)
		print data
		json_data = json.dumps(data)
		return json_data

