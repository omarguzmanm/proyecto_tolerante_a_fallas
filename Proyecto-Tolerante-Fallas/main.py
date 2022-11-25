from flask import Flask, render_template, request
import requests
import pickle


app = Flask(__name__, static_folder='templates')

@app.route('/inicio', methods=['GET','POST'])
def home():
    if request.method == 'GET':
        return render_template('index.html')
    if request.form['search']:
        url= "https://api.giphy.com/v1/gifs/search?api_key=rGgmZSIYd6EvztznZGnv66seXlpwAItb&limit=12&q=" + request.form['search']
        giphy = requests.get(url)
        dataGiphy = giphy.json()
        # print(dataGiphy)
        return render_template('index.html', data=dataGiphy['data'])
    else:
        return render_template('index.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    if request.form['search']:
        url= "https://api.giphy.com/v1/gifs/search?api_key=rGgmZSIYd6EvztznZGnv66seXlpwAItb&limit=12&q=" + request.form['search']
        giphy = requests.get(url)
        dataGiphy = giphy.json()
        # print(dataGiphy)
        return render_template('login.html', data=dataGiphy['data'])
    else:
        return render_template('login.html')

@app.route('/registrarse', methods=['GET','POST'])
def registro():
        if request.method == 'GET':
            return render_template('registrarse.html')

if __name__ == '__main__':
    app.run(debug=True, port=4000)
    