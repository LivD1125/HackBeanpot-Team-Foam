# all the imports
import sqlite3, sys, subprocess
from flask import Flask, request, session, g, redirect, url_for, \
	 abort, render_template, flash
from contextlib import closing
from flask.ext.cors import CORS
import json
from sentimentanalysis import SentimentAnalysis

# configuration
DEBUG = True
SECRET_KEY = 'development key'


# create our little application :)
app = Flask(__name__)
CORS(app)
app.config.from_object(__name__)
#app.config.from_envvar('FLASKR_SETTINGS', silent=True)

@app.route('/', methods=['GET', 'POST'])		
def index(name=None):
	#return 'Hello World!'
	if request.method == 'POST':
		url = request.form.get('url')
		print url;
		#flash('Successfully downloaded!', 'success')
		sa = SentimentAnalysis(url);
		jsonDict, status = sa.get_json()
		if status == 0:
			print('Successfully Parsed!')
			#print(jsonDict)
			#return render_template('show_entries.html', data=jsonDict)
			return jsonDict#jsonify(**dataDict)
		else:
			print('Error in API Parsing!')
			return render_template('show_entries.html')
	else:
		return render_template('show_entries.html', name=name)

if __name__ == '__main__':
	#app.run(host='0.0.0.0')
	app.run(host = '0.0.0.0', port=5000, debug=True)